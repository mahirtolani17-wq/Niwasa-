import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isReducedMotion) {
      setShowOverlay(true);
      return;
    }
    
    let animationFrameId: number;
    let isVideoLoaded = false;
    
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        isVideoLoaded = true;
        handleScroll();
      });
    }

    const updateVideoProgress = (scrollY: number) => {
      const container = containerRef.current;
      if (!video || !container || !isVideoLoaded || isNaN(video.duration)) return;
      
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate progress from 0 to 1 as we scroll through the container
      let progress = (scrollY - containerTop) / (containerHeight - windowHeight);
      progress = Math.max(0, Math.min(1, progress));
      
      // Update overlay visibility at ~95% scrubbed progress
      setShowOverlay(progress > 0.95);
      
      // Smooth update with rAF
      animationFrameId = requestAnimationFrame(() => {
        if (video.duration) {
          // Add a small offset so it doesn't try to seek to exactly 0 or end which can stutter on some browsers
          const targetTime = video.duration * progress;
          video.currentTime = targetTime;
        }
      });
    };

    const handleScroll = () => {
      updateVideoProgress(window.scrollY);
    };

    let touchStartY = 0;
    let scrollStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      scrollStartY = window.scrollY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      
      // Calculate vertical distance ratio to simulate precise mouse-wheel-style scrubbing
      const simulatedScrollY = scrollStartY + deltaY;
      updateVideoProgress(simulatedScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    // Initial call
    if (isVideoLoaded) handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReducedMotion]);

  return (
    <section ref={containerRef} className={`relative ${isReducedMotion ? 'h-screen' : 'h-[350vh]'}`}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        <video 
          ref={videoRef}
          src="https://videotourl.com/videos/1783585728041-08b21c5c-2c10-401c-971e-00605b53756e.mp4" 
          autoPlay={isReducedMotion}
          loop={isReducedMotion}
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          preload="auto"
        />
        
        {/* Scrim for contrast to ensure text is legible over the video */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/80" />
        <div className="absolute inset-0 bg-ink/30" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div 
            initial="hidden"
            animate={showOverlay || isReducedMotion ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, ease: "easeOut" }
              }
            }}
            className="flex flex-col items-center max-w-2xl text-center"
          >
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-paper font-serif mb-6 leading-tight drop-shadow-lg">
              Quiet Luxury in the Heart of Udaipur
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-lg sm:text-xl md:text-2xl text-paper font-sans mb-10 font-light tracking-wide max-w-lg drop-shadow-lg">
              A serene boutique homestay blending home comfort with handcrafted elegance.
            </motion.p>
            <motion.a 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              href="#book"
              className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-medium rounded-full bg-accent text-paper hover:bg-accent/90 transition-all hover:scale-105 hover:shadow-xl shadow-lg hover:shadow-accent/20"
            >
              Book Your Stay
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: showOverlay ? 0 : 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-paper/70 gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-paper/70 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
