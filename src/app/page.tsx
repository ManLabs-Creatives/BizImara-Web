import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyUs from '@/components/WhyUs';
import AboutPrivacy from '@/components/AboutPrivacy';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <WhyUs />
        <AboutPrivacy />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
