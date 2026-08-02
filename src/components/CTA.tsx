import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="py-16 bg-white pb-24" id="pricing">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-gradient-to-r from-primary to-[#FF7043] rounded-[24px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          
          <div className="text-center md:text-left text-white z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Modernize Your Business?</h2>
            <p className="text-lg md:text-xl text-white/95 font-medium">Start selling smarter with BizImara POS today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10 shrink-0">
            <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-black hover:bg-gray-900 rounded-full transition-colors duration-200">
              <span className="mr-2">Get it on</span>
              <span>Google Play</span>
            </a>
            <a href="https://wa.me/254769782503" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-success bg-white hover:bg-gray-50 rounded-full transition-colors duration-200 gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Talk to Sales</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
