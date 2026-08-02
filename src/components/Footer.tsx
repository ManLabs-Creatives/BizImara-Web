import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-12 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-extrabold tracking-tight text-text-main">
                BizImara <span className="text-primary">POS</span>
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-[250px] font-medium">
              Empowering local businesses with powerful, offline-first POS solutions.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-sm text-text-muted font-medium text-center">
              © {new Date().getFullYear()} BizImara POS.
              <br />
              All rights reserved.
            </p>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-5 h-full justify-center">
            <a href="mailto:hello@bizimara.app" className="flex items-center gap-3 text-text-main hover:text-primary transition-colors duration-200 text-sm font-bold">
              <Mail className="w-5 h-5 text-primary" />
              hello@bizimara.app
            </a>
            <a href="https://wa.me/254769782503" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-main hover:text-primary transition-colors duration-200 text-sm font-bold">
              <MessageCircle className="w-5 h-5 text-success" />
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
