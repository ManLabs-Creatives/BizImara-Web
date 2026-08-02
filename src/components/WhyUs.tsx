import { Zap, Users, BarChart3 } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white" id="how-it-works">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Diagram */}
          <div className="relative w-full max-w-lg mx-auto aspect-[4/3] bg-background rounded-[32px] p-6 flex flex-col items-center justify-center border border-gray-100 overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-light to-transparent opacity-50" />
            
            {/* Top Node */}
            <div className="relative z-10 bg-white border border-primary-light/30 rounded-full px-8 py-3 shadow-md mb-12 flex flex-col items-center min-w-[200px]">
              <span className="block text-primary font-bold text-lg">BizImara POS</span>
              <span className="block text-text-main font-semibold text-sm">Dashboard</span>
            </div>
            
            {/* SVG Connecting Lines */}
            <svg className="absolute w-full h-full inset-0 z-0 text-primary-light/60 pointer-events-none" style={{ top: '42%' }}>
              <path d="M 50% 0 C 50% 60%, 20% 40%, 20% 100%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 50% 0 L 50% 100%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 50% 0 C 50% 60%, 80% 40%, 80% 100%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            </svg>

            {/* Bottom Nodes */}
            <div className="relative z-10 w-full flex justify-between px-2 sm:px-8 items-end h-32">
              <div className="flex flex-col items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm w-[30%] max-w-[120px] text-center mb-4">
                <div className="w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center mb-2">
                  <span className="text-primary text-2xl">🏪</span>
                </div>
                <span className="text-[11px] font-bold leading-tight mb-0.5">Main Branch</span>
                <span className="text-[10px] text-text-muted">Nairobi</span>
              </div>
              
              <div className="flex flex-col items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm w-[30%] max-w-[120px] text-center mb-8">
                <div className="w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center mb-2">
                  <span className="text-primary text-2xl">🏪</span>
                </div>
                <span className="text-[11px] font-bold leading-tight mb-0.5">Westlands Branch</span>
                <span className="text-[10px] text-text-muted">Nairobi</span>
              </div>

              <div className="flex flex-col items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm w-[30%] max-w-[120px] text-center mb-4">
                <div className="w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center mb-2">
                  <span className="text-primary text-2xl">🏪</span>
                </div>
                <span className="text-[11px] font-bold leading-tight mb-0.5">Kisumu Branch</span>
                <span className="text-[10px] text-text-muted">Kisumu</span>
              </div>
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-light/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl" />
          </div>

          {/* Right Content */}
          <div className="max-w-xl">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Why BizImara POS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main mb-12 leading-tight">
              Designed for<br />Growing Businesses
            </h2>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-[1.5px] border-primary flex items-center justify-center text-primary mt-1">
                  <Zap className="w-5 h-5" fill="currentColor" strokeWidth={1} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main">Lightning fast checkout</h3>
                  <p className="text-text-muted mt-2 leading-relaxed">Speed up sales and serve more customers.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-[1.5px] border-primary flex items-center justify-center text-primary mt-1">
                  <Users className="w-5 h-5" fill="currentColor" strokeWidth={1} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main">Easy employee management</h3>
                  <p className="text-text-muted mt-2 leading-relaxed">Assign roles, track performance, and stay in control.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-[1.5px] border-primary flex items-center justify-center text-primary mt-1">
                  <BarChart3 className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main">Powerful reports & insights</h3>
                  <p className="text-text-muted mt-2 leading-relaxed">Make smarter decisions with real-time data.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
