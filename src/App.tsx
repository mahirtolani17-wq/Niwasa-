/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-paper min-h-screen text-ink font-sans selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <Reviews />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
