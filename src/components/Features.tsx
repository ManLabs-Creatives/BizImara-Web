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
    <section className="bg-[#0d1014] py-20 md:py-28" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">Core features</span>
          <h2 className="mb-6 text-3xl font-extrabold tracking-[-0.06em] text-white md:text-4xl lg:text-5xl">
            Built to keep your whole operation moving.
          </h2>
          <p className="text-lg text-text-muted">Simplify daily operations, reduce friction, and help your business grow with confidence.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-start rounded-[28px] border border-white/10 bg-[#111417] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(255,106,61,0.12)] md:p-10"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_25px_rgba(255,106,61,0.15)]">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-[-0.05em] text-white">{feature.title}</h3>
                <p className="text-base leading-relaxed text-text-muted">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
