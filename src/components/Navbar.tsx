import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo icon (orange geometric shape) */}
          <div className="w-8 h-8 relative flex items-center justify-center text-primary">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-text-main">
            BizImara <span className="text-primary">POS</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm text-text-main">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About & Privacy</Link>
          <Link href="#terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="#download" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-light transition-colors shadow-sm text-sm">
            Download App
          </Link>
        </div>
      </div>
    </header>
  );
}
