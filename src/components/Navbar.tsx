import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b0d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_30px_rgba(255,106,61,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-[-0.06em] text-white md:text-2xl">
            BizImara <span className="text-primary">POS</span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/75 md:flex">
          <Link href="#features" className="transition-colors hover:text-white">Features</Link>
          <Link href="#how-it-works" className="transition-colors hover:text-white">How it works</Link>
          <Link href="#pricing" className="transition-colors hover:text-white">Pricing</Link>
          <Link href="#about" className="transition-colors hover:text-white">About</Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="#download"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary-light"
          >
            Download App
          </Link>
        </div>
      </div>
    </header>
  );
}
