import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090b0d] pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 text-center md:grid-cols-3 md:gap-8 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-extrabold tracking-[-0.05em] text-white">
                BizImara <span className="text-primary">POS</span>
              </span>
            </div>
            <p className="max-w-[260px] text-sm leading-relaxed text-text-muted">
              Empowering local businesses with powerful, offline-first POS solutions.
            </p>
          </div>

          <div className="flex h-full flex-col items-center justify-center">
            <p className="text-center text-sm text-text-muted">
              © {new Date().getFullYear()} BizImara POS.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="flex h-full flex-col items-center justify-center gap-5 md:items-end">
            <a href="mailto:hello@bizimara.app" className="flex items-center gap-3 text-sm font-bold text-white transition-colors duration-200 hover:text-primary">
              <Mail className="h-5 w-5 text-primary" />
              hello@bizimara.app
            </a>
            <a href="https://wa.me/254769782503" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold text-white transition-colors duration-200 hover:text-primary">
              <MessageCircle className="h-5 w-5 text-success" />
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
