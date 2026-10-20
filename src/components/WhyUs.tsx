import { Zap, Users, BarChart3 } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="bg-[#0d1014] py-20 md:py-28" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-[#111417] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[#111417]" />

            <div className="relative z-10 mb-12 flex justify-center">
              <div className="rounded-full border border-primary/25 bg-[#111417] px-8 py-3 text-center shadow-[0_0_30px_rgba(255,106,61,0.12)]">
                <span className="block text-lg font-extrabold tracking-[-0.05em] text-primary">BizImara POS</span>
                <span className="block text-sm font-medium text-white/70">Dashboard</span>
              </div>
            </div>

            <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full text-primary/25" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M50 0 C50 30, 20 30, 20 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
              <path d="M50 0 C50 30, 80 30, 80 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
              <path d="M50 0 L50 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
            </svg>

            <div className="relative z-10 flex h-44 items-end justify-between gap-3 px-2 sm:px-8">
              {[
                ['Main Branch', 'Nairobi'],
                ['Westlands Branch', 'Nairobi'],
                ['Kisumu Branch', 'Kisumu'],
              ].map(([name, location], index) => (
                <div
                  key={name}
                  className={`flex w-[30%] max-w-[140px] flex-col items-center rounded-2xl border border-white/10 bg-[#14181c] p-3 text-center shadow-lg ${index === 1 ? 'mb-8' : index === 0 || index === 2 ? 'mb-4' : ''}`}
                >
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl shadow-inner shadow-primary/10">
                    🏪
                  </div>
                  <span className="text-[11px] font-bold leading-tight text-white">{name}</span>
                  <span className="text-[10px] text-text-muted">{location}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">Why BizImara POS</span>
            <h2 className="mb-12 text-3xl font-extrabold tracking-[-0.06em] text-white md:text-4xl lg:text-5xl">
              Designed for growing businesses.
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: Zap,
                  title: 'Lightning-fast checkout',
                  text: 'Speed up sales, serve more customers, and keep lines moving even at peak hours.',
                },
                {
                  icon: Users,
                  title: 'Easy employee management',
                  text: 'Assign roles, track performance, and maintain full control across every location.',
                },
                {
                  icon: BarChart3,
                  title: 'Powerful reports & insights',
                  text: 'Turn your transaction data into better business decisions with clear reporting.',
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-5">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary shadow-[0_0_20px_rgba(255,106,61,0.2)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.04em] text-white">{title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
