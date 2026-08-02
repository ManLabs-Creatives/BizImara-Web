'use client';

import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Store, 
  Database, 
  Smartphone, 
  Lock, 
  Share2, 
  UserCheck, 
  Server, 
  MessageSquareCode, 
  Image as ImageIcon, 
  LineChart, 
  CloudOff, 
  Mail, 
  Phone,
  Info,
  Shield,
  FileText,
  AlertTriangle,
  Scale,
  Wifi,
  CheckSquare,
  KeyRound,
  XCircle
} from 'lucide-react';

export default function AboutPrivacy() {
  const [activeTab, setActiveTab] = useState<'about' | 'privacy' | 'terms'>('about');

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash.toLowerCase();
        if (hash === '#privacy' || hash === '#privacy-policy') {
          setActiveTab('privacy');
        } else if (hash === '#terms' || hash === '#terms-conditions') {
          setActiveTab('terms');
        } else if (hash === '#about' || hash === '#about-bizimara') {
          setActiveTab('about');
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="about">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-light/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-secondary-light/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-light border border-primary/20 text-[13px] font-bold text-primary tracking-wide mb-4">
            <Info className="w-4 h-4" />
            <span>Company, Data & Legal Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main tracking-tight mb-4 leading-tight">
            About, Privacy & <span className="text-primary">Terms</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted font-medium max-w-2xl mx-auto">
            Learn more about our mission, how we protect your data, and the terms governing BizImara POS.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 relative z-20">
          <div className="bg-white p-1.5 rounded-full border border-gray-200 shadow-sm flex flex-wrap items-center justify-center gap-1.5 sm:gap-2" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'about'}
              onClick={() => setActiveTab('about')}
              className={`cursor-pointer flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 select-none ${
                activeTab === 'about'
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]'
                  : 'text-text-muted hover:text-text-main hover:bg-gray-100/80'
              }`}
            >
              <Store className="w-4 h-4 shrink-0" />
              <span>1. About BizImara</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'privacy'}
              onClick={() => setActiveTab('privacy')}
              className={`cursor-pointer flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 select-none ${
                activeTab === 'privacy'
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]'
                  : 'text-text-muted hover:text-text-main hover:bg-gray-100/80'
              }`}
            >
              <Shield className="w-4 h-4 shrink-0" />
              <span>2. Privacy Policy</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'terms'}
              onClick={() => setActiveTab('terms')}
              className={`cursor-pointer flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 select-none ${
                activeTab === 'terms'
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]'
                  : 'text-text-muted hover:text-text-main hover:bg-gray-100/80'
              }`}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>3. Terms & Conditions</span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="transition-all duration-300 relative z-10">
          
          {/* ABOUT BIZIMARA POS TAB CONTENT */}
          {activeTab === 'about' && (
            <div className="space-y-10 animate-fadeIn">
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-light border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-main">About BizImara POS</h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mt-0.5">Built for Local Retail & Multi-Branch Enterprise</p>
                  </div>
                </div>

                <div className="space-y-6 text-text-muted text-base sm:text-lg leading-relaxed font-medium">
                  <p className="bg-surface-light/60 p-6 rounded-2xl border border-primary-light/20 text-text-main">
                    <strong className="text-primary font-bold">BizImara POS</strong> is a modern, secure, and intuitive Point of Sale platform designed to empower business owners. We bridge the gap between complex inventory management and everyday retail operations.
                  </p>
                  <p>
                    Whether you are managing a single storefront or monitoring multiple branches, BizImara provides real-time sales tracking, secure cashier management, and seamless product cataloging. Built with an offline-first architecture and instant cloud synchronization, BizImara ensures that your business keeps moving forward, even when the internet doesn&apos;t.
                  </p>
                </div>

                {/* Key Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                  <div className="p-6 rounded-2xl bg-background border border-gray-100 flex flex-col items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <CloudOff className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-text-main text-base">Offline-First Engine</h4>
                    <p className="text-xs text-text-muted leading-relaxed font-medium">Keep processing transactions non-stop during internet dropouts.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-background border border-gray-100 flex flex-col items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <LineChart className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-text-main text-base">Real-Time Insights</h4>
                    <p className="text-xs text-text-muted leading-relaxed font-medium">Monitor live sales, branch revenue, and product velocity.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-background border border-gray-100 flex flex-col items-start gap-3 sm:col-span-2 md:col-span-1">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-text-main text-base">Role-Based Security</h4>
                    <p className="text-xs text-text-muted leading-relaxed font-medium">Empower cashiers while maintaining strict data access control.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PRIVACY POLICY TAB CONTENT */}
          {activeTab === 'privacy' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Header Badge */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-surface-light border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-text-main">Privacy Policy</h3>
                      <p className="text-xs font-semibold text-text-muted mt-0.5">Transparency & Data Governance</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-light border border-primary/20 text-xs font-bold text-primary self-start sm:self-auto">
                    Effective Date: August 2026
                  </span>
                </div>

                <p className="text-text-muted text-base leading-relaxed font-medium mb-10">
                  At BizImara, we take your business data and privacy seriously. This policy explains how we collect, use, and protect your information.
                </p>

                {/* Privacy Sections Grid */}
                <div className="space-y-8">
                  
                  {/* Section 1: Information We Collect */}
                  <div className="bg-background rounded-2xl p-6 sm:p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <Database className="w-5 h-5" />
                      <h4 className="text-xl font-bold text-text-main">Information We Collect</h4>
                    </div>
                    <p className="text-sm text-text-muted font-medium mb-4">
                      To provide you with our point-of-sale services, we collect the following types of information:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-5 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 font-bold text-text-main text-sm mb-2">
                          <Smartphone className="w-4 h-4 text-primary" />
                          <span>Account Information</span>
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed font-medium">
                          Your mobile phone number (used for secure login and registration) and your Business/Organization Name.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 font-bold text-text-main text-sm mb-2">
                          <Server className="w-4 h-4 text-primary" />
                          <span>Operational Data</span>
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed font-medium">
                          Sales records, transaction totals, tax information, and branch/cashier identifiers.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 font-bold text-text-main text-sm mb-2">
                          <ImageIcon className="w-4 h-4 text-primary" />
                          <span>Media</span>
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed font-medium">
                          Product images uploaded by you or your cashiers to your catalog.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: How We Use Your Information */}
                  <div className="bg-background rounded-2xl p-6 sm:p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <Lock className="w-5 h-5" />
                      <h4 className="text-xl font-bold text-text-main">How We Use Your Information</h4>
                    </div>
                    <p className="text-sm text-text-muted font-medium mb-4">
                      We use your data exclusively to operate and improve your BizImara experience:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="bg-white p-4 rounded-xl border border-gray-100 text-xs font-semibold text-text-main flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-surface-light text-primary flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</span>
                        <span>To authenticate your account securely via One-Time Passwords (OTP).</span>
                      </li>
                      <li className="bg-white p-4 rounded-xl border border-gray-100 text-xs font-semibold text-text-main flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-surface-light text-primary flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</span>
                        <span>To synchronize your sales data across your devices and branches.</span>
                      </li>
                      <li className="bg-white p-4 rounded-xl border border-gray-100 text-xs font-semibold text-text-main flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-surface-light text-primary flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">3</span>
                        <span>To generate analytics and dashboards for business owners.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 3: Third-Party Services & Data Sharing */}
                  <div className="bg-background rounded-2xl p-6 sm:p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <Share2 className="w-5 h-5" />
                      <h4 className="text-xl font-bold text-text-main">Third-Party Services & Data Sharing</h4>
                    </div>
                    <p className="text-sm text-text-muted font-medium mb-4">
                      We do not sell your business data to advertisers. We share information only with secure infrastructure partners strictly for operating the app:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-5 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 font-bold text-text-main text-sm mb-2">
                          <Server className="w-4 h-4 text-primary" />
                          <span>Cloud Infrastructure</span>
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed font-medium">
                          Your database, including sales data and product images, is securely hosted on our cloud backend servers.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 font-bold text-text-main text-sm mb-2">
                          <MessageSquareCode className="w-4 h-4 text-primary" />
                          <span>SMS Providers</span>
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed font-medium">
                          Your phone number is shared securely with our regional SMS gateway partner (e.g., TextSMS) solely for the purpose of delivering your login OTPs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 & 5: Data Security & Your Rights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface-light/80 rounded-2xl p-6 sm:p-8 border border-primary/20 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3 text-primary">
                          <ShieldCheck className="w-5 h-5" />
                          <h4 className="text-xl font-bold text-text-main">Data Security</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                          Your data is protected using industry-standard security measures. We employ strict Row-Level Security (RLS) policies at the database level to ensure that business owners can only access their own organization&apos;s data, and cashiers can only perform actions authorized by the owner.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3 text-primary">
                          <UserCheck className="w-5 h-5" />
                          <h4 className="text-xl font-bold text-text-main">Your Rights</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium mb-4">
                          You have the right to request access to, correction of, or deletion of your business data. To initiate a data request, please contact us:
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-100">
                        <a 
                          href="mailto:hello@bizimara.app" 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background text-text-main hover:text-primary border border-gray-200 text-xs font-bold transition-colors"
                        >
                          <Mail className="w-4 h-4 text-primary" />
                          <span>hello@bizimara.app</span>
                        </a>
                        <a 
                          href="https://wa.me/254769782503" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background text-text-main hover:text-primary border border-gray-200 text-xs font-bold transition-colors"
                        >
                          <Phone className="w-4 h-4 text-success" />
                          <span>+254 769 782 503</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* TERMS & CONDITIONS TAB CONTENT */}
          {activeTab === 'terms' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-surface-light border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-text-main">Terms & Conditions</h3>
                      <p className="text-xs font-semibold text-text-muted mt-0.5">Legal Agreement & Service Usage</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-light border border-primary/20 text-xs font-bold text-primary self-start sm:self-auto">
                    Effective Date: August 2026
                  </span>
                </div>

                <div className="bg-surface-light/60 p-6 rounded-2xl border border-primary-light/20 text-text-main text-base sm:text-lg font-medium mb-10">
                  By downloading, accessing, or using <strong className="text-primary font-bold">BizImara POS</strong>, you agree to these Terms & Conditions.
                </div>

                {/* Terms Sections Grid */}
                <div className="space-y-8">
                  
                  {/* Account Responsibilities */}
                  <div className="bg-background rounded-2xl p-6 sm:p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <KeyRound className="w-5 h-5" />
                      <h4 className="text-xl font-bold text-text-main">Account Responsibilities</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-5 rounded-xl border border-gray-100">
                        <h5 className="font-bold text-text-main text-sm mb-2 flex items-center gap-2">
                          <Lock className="w-4 h-4 text-primary" /> Security
                        </h5>
                        <p className="text-xs text-text-muted leading-relaxed font-medium">
                          You are responsible for maintaining the confidentiality of your mobile device and the OTP codes used to access your account. BizImara is not liable for unauthorized access resulting from shared or compromised login credentials.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-100">
                        <h5 className="font-bold text-text-main text-sm mb-2 flex items-center gap-2">
                          <UserCheck className="w-4 h-4 text-primary" /> Cashier Management
                        </h5>
                        <p className="text-xs text-text-muted leading-relaxed font-medium">
                          Business owners are fully responsible for the actions of the cashiers and staff profiles created under their organization, including PIN management.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Acceptable Use */}
                  <div className="bg-background rounded-2xl p-6 sm:p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <CheckSquare className="w-5 h-5" />
                      <h4 className="text-xl font-bold text-text-main">Acceptable Use</h4>
                    </div>
                    <p className="text-sm text-text-muted font-medium mb-4">
                      You agree to use BizImara POS only for lawful business purposes. You must not:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3 text-xs font-semibold text-text-main">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>Upload illegal, offensive, or copyrighted product images to our storage buckets.</span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3 text-xs font-semibold text-text-main">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>Attempt to reverse-engineer the application or bypass our security, Row-Level Security (RLS), or authentication protocols.</span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3 text-xs font-semibold text-text-main">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>Use the service to process fraudulent transactions.</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Availability & Data Ownership Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-3 text-primary">
                        <Wifi className="w-5 h-5" />
                        <h4 className="text-xl font-bold text-text-main">Service Availability</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                        While BizImara utilizes an offline-first architecture to ensure continuous local operation, our cloud synchronization, SMS verification, and dashboard analytics require an active internet connection. We strive for maximum uptime but do not guarantee uninterrupted cloud availability.
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-3 text-primary">
                        <Database className="w-5 h-5" />
                        <h4 className="text-xl font-bold text-text-main">Data Ownership</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                        You retain full ownership of your business data (sales, product names, images). By using the service, you grant BizImara a license to host, process, and back up this data to provide the service to you.
                      </p>
                    </div>
                  </div>

                  {/* Limitation of Liability & Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface-light/80 rounded-2xl p-6 sm:p-8 border border-primary/20 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3 text-primary">
                          <Scale className="w-5 h-5" />
                          <h4 className="text-xl font-bold text-text-main">Limitation of Liability</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                          To the maximum extent permitted by law, BizImara and its developers shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business interruptions, arising from the use or inability to use the application.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3 text-primary">
                          <Mail className="w-5 h-5" />
                          <h4 className="text-xl font-bold text-text-main">Contact Us</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium mb-4">
                          For support, legal, or privacy inquiries, please reach out to us at:
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-100">
                        <a 
                          href="mailto:atembamicah@gmail.com" 
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background text-text-main hover:text-primary border border-gray-200 text-xs font-bold transition-colors"
                        >
                          <Mail className="w-4 h-4 text-primary" />
                          <span>atembamicah@gmail.com</span>
                        </a>
                        <a 
                          href="https://wa.me/254769782503" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background text-text-main hover:text-primary border border-gray-200 text-xs font-bold transition-colors"
                        >
                          <Phone className="w-4 h-4 text-success" />
                          <span>0769782503</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
