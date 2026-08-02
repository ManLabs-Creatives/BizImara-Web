import { WifiOff, Store, Package } from 'lucide-react';

const features = [
  {
    icon: WifiOff,
    title: 'Offline-First',
    description: "Keep selling even when the internet drops. Every transaction is saved locally and automatically syncs once you're back online.",
  },
  {
    icon: Store,
    title: 'Multi-Branch Management',
    description: 'Switch between branches instantly. Admin controls for owners, local views for cashiers.',
  },
  {
    icon: Package,
    title: 'Smart Inventory',
    description: 'Real-time stock tracking and low-stock alerts help you avoid stockouts and reduce losses.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-background" id="features">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">CORE FEATURES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main mb-6">Everything Your Business Needs</h2>
          <p className="text-lg text-text-muted font-medium">Built to simplify daily operations while helping your business grow.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md border border-gray-100 flex flex-col items-start"
              >
                <div className="w-16 h-16 bg-surface-light rounded-full flex items-center justify-center mb-8 border-[6px] border-white ring-1 ring-primary/10 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 rounded-full" />
                  <Icon className="w-7 h-7 text-primary relative z-10" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
