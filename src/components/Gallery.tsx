import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const IMAGES = [
  {
    src: "https://i.ibb.co/0jxcCwDk/Screenshot-2026-07-09-at-1-57-17-AM.png",
    title: "The Courtyard Pool"
  },
  {
    src: "https://i.ibb.co/ymYhP2Qz/Screenshot-2026-07-09-at-2-01-07-AM.png",
    title: "Luxury Interiors"
  },
  {
    src: "https://i.ibb.co/hFpYWYbG/Screenshot-2026-07-09-at-2-00-39-AM.png",
    title: "Restful Bedrooms"
  },
  {
    src: "https://i.ibb.co/hxnfS8mh/Screenshot-2026-07-09-at-2-02-12-AM.png",
    title: "Jacuzzi"
  },
  {
    src: "https://i.ibb.co/HTSr5rdh/Screenshot-2026-07-09-at-1-05-56-AM.png",
    title: "Lush Greenery"
  }
];

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="gallery" className="py-16 md:py-24 overflow-hidden bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex justify-between items-end"
        >
          <div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-flex items-center gap-3 mb-4">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">A Glimpse</span>
              <span className="h-px w-12 bg-accent/50 block" />
            </motion.div>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink">Spaces to Unwind</motion.h2>
          </div>
        </motion.div>
      </div>

      <div className="pl-4 sm:pl-6 lg:pl-8">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory hide-scrollbar pr-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative shrink-0 snap-center w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Glass caption */}
              <div className="absolute bottom-6 left-6 right-6 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                <div className="glass px-6 py-4 rounded-xl text-paper">
                  <p className="font-serif text-xl shadow-sm drop-shadow-md">{img.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
