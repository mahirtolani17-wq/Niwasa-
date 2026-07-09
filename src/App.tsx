/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const About = React.lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Amenities = React.lazy(() => import('./components/Amenities').then(m => ({ default: m.Amenities })));
const Gallery = React.lazy(() => import('./components/Gallery').then(m => ({ default: m.Gallery })));
const Reviews = React.lazy(() => import('./components/Reviews').then(m => ({ default: m.Reviews })));
const BookingSection = React.lazy(() => import('./components/BookingSection').then(m => ({ default: m.BookingSection })));
const Footer = React.lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="bg-paper min-h-screen text-ink font-sans selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32 w-full flex items-center justify-center">Loading...</div>}>
          <About />
          <Amenities />
          <Gallery />
          <Reviews />
          <BookingSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
