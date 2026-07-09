import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  Wifi, 
  Coffee, 
  Car, 
  Plane, 
  Sparkles, 
  Moon, 
  Wind, 
  Wine, 
  Bath,
  Dumbbell,
  X
} from 'lucide-react';

const AMENITIES = [
  { category: 'Pool & Wellness', items: [
    { name: 'Outdoor Pool', icon: Waves },
    { name: 'Hot Tub', icon: Waves },
    { name: 'Fitness Centre', icon: Dumbbell }
  ]},
  { category: 'Connectivity', items: [
    { name: 'Free Wi-Fi', icon: Wifi }
  ]},
  { category: 'Food & Drink', items: [
    { name: 'Free Breakfast', icon: Coffee },
    { name: 'Minibar', icon: Wine }
  ]},
  { category: 'Services', items: [
    { name: 'Free Parking', icon: Car },
    { name: 'Airport Shuttle (extra charge)', icon: Plane },
    { name: 'Daily Housekeeping', icon: Sparkles },
    { name: 'Turndown Service', icon: Moon }
  ]},
  { category: 'Rooms', items: [
    { name: 'Air Conditioning', icon: Wind },
    { name: 'Private Bathrooms', icon: Bath }
  ]}
];

// Flat list for the highlighted ones
const TOP_AMENITIES = [
  { name: 'Outdoor Pool', icon: Waves },
  { name: 'Free Wi-Fi', icon: Wifi }
];

export function Amenities() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="amenities" className="relative py-16 md:py-24 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-accent/50 block" />
            <span className="text-accent uppercase tracking-widest text-sm font-medium">Curated Comforts</span>
            <span className="h-px w-8 bg-accent/50 block" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-8"
          >
            Thoughtful Amenities
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button 
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-paper transition-colors font-medium"
            >
              Explore All Amenities
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {TOP_AMENITIES.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-5 group transition-all duration-300 hover:shadow-lg hover:border-accent/30"
            >
              <div className="p-3 bg-primary/20 rounded-xl text-accent group-hover:bg-accent group-hover:text-paper transition-colors">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="font-medium text-ink/90 text-lg">{item.name}</span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal for All Amenities */}
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
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass bg-paper/95 rounded-3xl p-6 sm:p-10 shadow-2xl hide-scrollbar"
            >
              <button 
                onClick={() => setShowAll(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-primary/20 text-ink/70 transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-serif text-ink mb-10 text-center">All Amenities</h3>
              
              <div className="space-y-12">
                {AMENITIES.map((group, groupIdx) => (
                  <div key={group.category} className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="md:w-1/3 shrink-0">
                      <h4 className="text-xl font-serif text-ink/80 border-b border-primary/30 pb-3">{group.category}</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                      {group.items.map((item) => (
                        <div key={item.name} className="flex items-center gap-3">
                          <div className="text-accent/70">
                            <item.icon size={18} strokeWidth={2} />
                          </div>
                          <span className="text-ink/80 font-medium">{item.name}</span>
                        </div>
                      ))}
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
