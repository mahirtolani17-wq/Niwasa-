import { motion } from 'motion/react';
import { MapPin, Clock, Languages, Phone, MessageCircle } from 'lucide-react';

export function BookingSection() {
  return (
    <section id="book" className="py-16 md:py-24 bg-paper relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/10 -skew-y-6 transform origin-top-left z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Location & Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col space-y-10"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-accent uppercase tracking-widest text-sm font-medium">Plan Your Visit</span>
                <span className="h-px w-12 bg-accent/50 block" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-6">Practical Info</h2>
              <p className="text-ink/70 text-lg font-light max-w-md">
                Find us nestled away from the city noise, yet close enough to explore the beauty of Udaipur.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-full text-accent mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ink mb-2">Location</h4>
                  <p className="text-ink/70 font-light leading-relaxed">
                    Punjawati, Pulla Bhuwana, <br />
                    Sukher, Udaipur, <br />
                    Rajasthan 313001
                  </p>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-full text-accent mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ink mb-2">Check-in / Check-out</h4>
                  <p className="text-ink/70 font-light">
                    Check-in: 1:00 PM <br />
                    Check-out: 11:00 AM
                  </p>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-full text-accent mt-1">
                  <Languages size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ink mb-2">Languages</h4>
                  <p className="text-ink/70 font-light">English, Hindi</p>
                </div>
              </motion.div>
            </div>

            {/* Map Placeholder */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="glass-panel p-2 rounded-3xl w-full h-64 overflow-hidden shadow-lg mt-4 relative group">
              <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                alt="Map View Placeholder" 
                className="w-full h-full object-cover rounded-2xl opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="glass px-6 py-3 rounded-full text-ink font-medium shadow-xl flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  View on Google Maps
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative flex flex-col justify-center"
          >
            <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl font-serif text-ink mb-6 text-center">Book Your Stay</motion.h3>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-ink/70 mb-10 font-light text-center">
              We are excited to host you. Please use one of our trusted booking partners to reserve your dates, or reach out to us directly for any special requests.
            </motion.p>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-4 mb-10">
              <a 
                href="https://www.agoda.com/niwasa/hotel/udaipur-in.html?countryId=35&finalPriceView=1&isShowMobileAppPrice=false&cid=1844160&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2026-09-24&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&los=1&searchrequestid=a857beef-3bb0-457d-a58e-4edb589e5257&ds=wStwqjYrEKdg55F4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full glass bg-paper/50 hover:bg-paper/80 border border-primary/40 px-6 py-4 rounded-2xl text-ink font-medium transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
              >
                <span>Book on Agoda</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="https://www.booking.com/Share-MdSxO6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full glass bg-paper/50 hover:bg-paper/80 border border-primary/40 px-6 py-4 rounded-2xl text-ink font-medium transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
              >
                <span>Book on Booking.com</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="https://www.makemytrip.com/hotels/hotel-details/?hotelId=202605061321511977&Campaign=21413616605&_uCurrency=INR&checkin=09242026&checkout=09252026&city=CTUDR&cmp=googlehoteldfinder_Old_DH_META_Paid_RateRule%3D_usernolist_aud%3D_21413616605_default_IN_localuniversal_202605061321511977&country=IN&gad_campaignid=21413616605&gad_source=1&gbraid=0AAAAACwdfVVsBnglnpt-SGq7WPQZJXK0b&gclid=CjwKCAjw6rfSBhAqEiwA_yocpvukB9x5AKO5OHiXDHMFLHDhMpaUlvgAvyl3bnscxkr8NlU5zzDXVxoC8wgQAvD_BwE&lat=24.60866&lng=73.701&locusId=CTUDR&locusType=city&mtkeys=20b3e25f-d6a2-46bd-85a3-51f4e40d7b07_312168_2Thursday&rank=1&roomCount=1&roomStayQualifier=2e0e&rsc=1e2e0e&topHtlId=202605061321511977&totalGuestCount=2&isPropSearch=T" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full glass bg-paper/50 hover:bg-paper/80 border border-primary/40 px-6 py-4 rounded-2xl text-ink font-medium transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
              >
                <span>Book on MakeMyTrip</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-primary/30 pt-8">
              <span className="text-ink/60 text-sm font-medium w-full sm:w-auto text-center">Contact us directly:</span>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-2 glass px-5 py-3 rounded-full text-ink hover:bg-white/50 transition-all shadow-sm hover:shadow-md">
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <a href="#" className="flex items-center gap-2 glass px-5 py-3 rounded-full text-ink hover:bg-white/50 transition-all shadow-sm hover:shadow-md">
                  <Phone size={18} className="text-accent" />
                  <span className="text-sm font-medium">Call Us</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
