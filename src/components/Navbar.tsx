'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    location: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = [
      'Hello BizImara team,',
      '',
      'I would like to request a demo.',
      `Business Name: ${formData.businessName}`,
      `Business Type: ${formData.businessType}`,
      `Location: ${formData.location}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/254769782503?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsModalOpen(false);
    setFormData({ businessName: '', businessType: '', location: '' });
  };

  return (
    <>
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

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-[#111417] px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              Book / Request Demo
            </button>
            <Link
              href="#download"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary-light"
            >
              Download App
            </Link>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-[#111417] p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Book a demo</p>
                <h3 className="mt-1 text-2xl font-extrabold tracking-[-0.05em] text-white">Request access</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition-colors hover:text-primary"
                aria-label="Close demo modal"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="businessName" className="mb-2 block text-sm font-semibold text-white/80">
                  Business Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Mwangaza Supermarket"
                  className="w-full rounded-xl border border-white/10 bg-[#1a1d21] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="businessType" className="mb-2 block text-sm font-semibold text-white/80">
                  Business Type
                </label>
                <input
                  id="businessType"
                  name="businessType"
                  type="text"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder="e.g. Minimart / Chemist"
                  className="w-full rounded-xl border border-white/10 bg-[#1a1d21] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="mb-2 block text-sm font-semibold text-white/80">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Nairobi, Kenya"
                  className="w-full rounded-xl border border-white/10 bg-[#1a1d21] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-light"
              >
                Submit to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
