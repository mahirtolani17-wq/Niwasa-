import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-paper">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="flex flex-col justify-center space-y-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="inline-flex items-center gap-3">
              <span className="h-px w-12 bg-accent/50 block" />
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Welcome to Niwasa</span>
            </motion.div>
            
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink leading-tight">
              A registered boutique homestay in Sukher, Udaipur.
            </motion.h2>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="space-y-6 text-lg text-ink/70 font-light leading-relaxed">
              <p>
                Blending home comfort with quiet luxury, Niwasa is designed for those seeking a serene escape. Every corner of our property reflects handcrafted textures, natural light, and the warmth of courtyard living.
              </p>
              <p>
                Personally hosted by Mehul, whose warm and attentive presence ensures every guest feels completely at home. Whether you're enjoying a quiet morning by the pool or unwinding in our lush green spaces, Niwasa offers an authentic, curated Rajasthani experience away from the noise.
              </p>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="pt-4">
              <img 
                src="https://i.ibb.co/hFjQGffN/image.jpg" 
                alt="Mehul - Host of Niwasa Homestay" 
                className="h-16 w-16 rounded-full object-cover shadow-sm mb-4"
                loading="lazy"
              />
              <p className="font-serif text-xl text-ink">Mehul</p>
              <p className="text-sm text-ink/60 tracking-wide">Your Host</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl">
              <img 
                src="https://i.ibb.co/4D9Q68S/Screenshot-2026-07-09-at-2-07-25-AM.png" 
                alt="Niwasa Homestay Courtyard" 
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            
            {/* Floating glass badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 glass p-6 rounded-2xl max-w-[240px]"
            >
              <p className="font-serif text-xl text-ink mb-1">Authentic Stay</p>
              <p className="text-sm text-ink/70">Experience Rajasthan's hospitality with modern comforts.</p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
