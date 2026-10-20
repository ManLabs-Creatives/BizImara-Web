import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-[#0d1014] pb-24 pt-16" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-primary/20 bg-[#111417] p-8 shadow-[0_35px_100px_rgba(255,106,61,0.12)] md:p-12">
          <div className="absolute -right-10 top-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-12 left-10 h-52 w-52 rounded-full bg-[#ffb38a]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-xl text-white">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/75">Ready when you are</p>
              <h2 className="text-3xl font-extrabold tracking-[-0.05em] md:text-4xl lg:text-5xl">
                Ready to modernize your business?
              </h2>
              <p className="mt-4 text-lg text-white/85">Start selling smarter with BizImara POS today.</p>
            </div>

            <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row md:w-auto">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#111417] px-7 py-3.5 text-base font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get it on Google Play
              </a>
              <a
                href="https://wa.me/254769782503"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-[#111417] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
