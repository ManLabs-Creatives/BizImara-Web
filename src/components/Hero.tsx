import { MessageCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-20 md:pt-20 md:pb-28" id="download">
      <div className="absolute inset-0 -z-10 bg-[#0c0f12]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="z-10 max-w-2xl animate-slide-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary shadow-[0_0_25px_rgba(255,106,61,0.15)]">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Offline First • Multi-Branch • Built for Local Businesses
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-[5rem]">
              Grow your business
              <span className="mt-2 block text-primary">
                without limits.
              </span>
            </h1>

            <p className="max-w-xl text-lg text-text-muted sm:text-xl">
              The all-in-one POS that works offline. Manage sales, track inventory, and monitor every branch without slowing down your team.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-bold text-[#131416] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get it on Google Play
              </a>
              <a
                href="https://wa.me/254769782503"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-7 py-3.5 text-base font-bold text-primary transition-all duration-200 hover:bg-primary/15"
              >
                <MessageCircle className="h-5 w-5" />
                Talk to Sales
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-bold text-white/90">
              {['Offline Ready', 'Multi-Branch', 'Fast Setup', 'Secure Data'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary" fill="currentColor" strokeWidth={1} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-5 w-full max-w-[620px] lg:mt-0 lg:scale-[1.04] xl:scale-[1.08] lg:origin-right">
            <div className="absolute -inset-8 -z-10 rounded-[32px] bg-primary/10 blur-3xl" />
            <div className="absolute left-5 top-10 -z-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute bottom-8 right-8 -z-10 h-52 w-52 rounded-full bg-[#ffb38a]/15 blur-3xl" />

            <div className="animate-float relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111417] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)] animate-glow">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/10 bg-[#0d1014]">
                <Image
                  src="/hero-mockup.png"
                  alt="BizImara POS Dashboard and Mobile App Mockup"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="absolute -left-4 top-8 rounded-2xl border border-white/10 bg-[#0f1114]/90 p-3 shadow-2xl backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">Daily sales</p>
              <div className="mt-2 flex items-end gap-2 text-white">
                <span className="text-2xl font-extrabold tracking-[-0.05em]">KES 42K</span>
                <span className="mb-1 text-xs font-bold text-success">+18.2%</span>
              </div>
            </div>

            <div className="absolute -bottom-2 right-3 rounded-2xl border border-primary/25 bg-primary/10 p-3 shadow-2xl backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.22em] text-primary/80">Branches online</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-2xl font-extrabold tracking-[-0.06em] text-white">12</span>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-success shadow-[0_0_12px_rgba(33,208,122,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
