import { MessageCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden" id="download">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl z-10">
            {/* Top pill */}
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-surface-light text-[13px] font-bold text-primary tracking-wide">
              Offline First • Multi-Branch • Built for Local Businesses
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-text-main mb-6 leading-[1.1]">
              Empowering Local Businesses, <span className="block mt-1 text-primary">Digitally.</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-muted mb-10 leading-relaxed max-w-[500px] font-medium">
              The all-in-one POS that works offline. Manage sales, track inventory, and monitor all your branches from a single dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-black hover:bg-gray-900 rounded-full transition-colors duration-200 shadow-lg shadow-black/10">
                <span className="mr-2">Get it on</span>
                <span>Google Play</span>
              </a>
              <a href="https://wa.me/254769782503" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-success bg-white border border-success/30 hover:bg-success/5 rounded-full transition-colors duration-200 gap-2 shadow-lg shadow-success/10">
                <MessageCircle className="w-5 h-5" />
                <span>Talk to Sales</span>
              </a>
            </div>
            
            {/* Checkmarks */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-extrabold text-text-main">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" fill="currentColor" strokeWidth={1} />
                <span>Offline Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" fill="currentColor" strokeWidth={1} />
                <span>Multi-Branch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" fill="currentColor" strokeWidth={1} />
                <span>Fast Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" fill="currentColor" strokeWidth={1} />
                <span>Secure Data</span>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none z-0 mt-12 lg:mt-0 lg:scale-110 xl:scale-125 lg:origin-right">
            {/* The generated hero image */}
            <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
              <Image 
                src="/hero-mockup.png" 
                alt="BizImara POS Dashboard and Mobile App Mockup" 
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-light/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
