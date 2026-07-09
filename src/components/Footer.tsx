export function Footer() {
  return (
    <footer className="bg-ink text-paper py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 border-b border-paper/10 pb-12">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://i.ibb.co/yBNBLVPR/logo.png" 
              alt="Niwasa Homestay" 
              className="h-12 w-auto mb-4 invert opacity-90" 
            />
            <p className="text-paper/60 font-light text-sm text-center md:text-left max-w-sm">
              A serene boutique homestay blending home comfort with handcrafted elegance in Udaipur, Rajasthan.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#about" className="text-paper/70 hover:text-accent transition-colors text-sm">About</a>
            <a href="#amenities" className="text-paper/70 hover:text-accent transition-colors text-sm">Amenities</a>
            <a href="#gallery" className="text-paper/70 hover:text-accent transition-colors text-sm">Gallery</a>
            <a href="#reviews" className="text-paper/70 hover:text-accent transition-colors text-sm">Reviews</a>
            <a href="#book" className="text-paper/70 hover:text-accent transition-colors text-sm">Location</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-paper/40 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} Niwasa Homestay. All rights reserved.</p>
          <p>Designed with intentionality.</p>
        </div>
      </div>
    </footer>
  );
}
