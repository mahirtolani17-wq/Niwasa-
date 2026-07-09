import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, X } from 'lucide-react';

const REVIEWS = [
  {
    text: "The interior design is absolutely stunning. Every detail, from the handcrafted textures to the overall aesthetic, makes the stay feel incredibly luxurious yet grounded.",
    author: "Priya S.",
    context: "Couples trip"
  },
  {
    text: "A truly serene escape. We loved how quiet and peaceful the environment is. It's the perfect retreat away from the city noise, letting you just relax by the pool.",
    author: "Rahul M.",
    context: "Weekend getaway"
  },
  {
    text: "Mehul is an exceptional host. His hospitality and friendliness made us feel like we were visiting family. He goes out of his way to ensure you have everything you need.",
    author: "Anita & Family",
    context: "Family vacation"
  },
  {
    text: "We stayed here with three generations of our family and everyone found comfort in their rooms. The service and location were perfect for keeping both kids and grandparents happy.",
    author: "The Verma Family",
    context: "Multi-generational stay"
  },
  {
    text: "Appreciated the authentic homestay feel. The fixed home-style breakfast was delicious and felt much more personal than a standard hotel menu. The house rules (no smoking/alcohol in common areas) actually contribute beautifully to the peaceful family atmosphere.",
    author: "James T.",
    context: "Solo traveler"
  }
];

export function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const topReviews = REVIEWS.slice(0, 2);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-primary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-paper rounded-l-full opacity-30 -mr-[25%]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-xl"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-flex items-center gap-3 mb-4">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Guest Experiences</span>
              <span className="h-px w-12 bg-accent/50 block" />
            </motion.div>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-6">What They Say</motion.h2>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-4 bg-paper/50 inline-flex px-6 py-3 rounded-full border border-primary/20">
              <div className="flex text-accent">
                {[1, 2, 3, 4].map(i => <Star key={i} size={20} fill="currentColor" />)}
                <div className="relative">
                  <Star size={20} className="text-primary" />
                  <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                    <Star size={20} fill="currentColor" className="text-accent" />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-ink/80">
                <span className="text-ink font-bold text-lg">4.5</span> / 5 from 17 Google reviews
              </p>
            </motion.div>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => setShowAll(true)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-paper transition-colors font-medium self-start md:self-auto"
          >
            Read More Reviews
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {topReviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex text-accent/50 mb-6 gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-ink/80 font-light leading-relaxed mb-8 text-[15px]">
                  "{review.text}"
                </p>
              </div>
              <div>
                <p className="font-serif text-ink text-lg">{review.author}</p>
                <p className="text-xs text-ink/50 uppercase tracking-wider mt-1">{review.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for All Reviews */}
      <AnimatePresence>
        {showAll && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setShowAll(false)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass bg-paper/95 rounded-3xl p-6 sm:p-10 shadow-2xl hide-scrollbar"
            >
              <button 
                onClick={() => setShowAll(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-primary/20 text-ink/70 transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-serif text-ink mb-10 text-center">Guest Experiences</h3>
              
              <div className="space-y-6">
                {REVIEWS.map((review, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl">
                    <div className="flex text-accent/50 mb-4 gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-ink/80 font-light leading-relaxed mb-4 text-sm">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-serif text-ink">{review.author}</p>
                      <p className="text-xs text-ink/50 uppercase tracking-wider">{review.context}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
