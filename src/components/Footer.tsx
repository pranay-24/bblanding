import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

const quickLinks = [
  { label: 'Offers', href: '#offers' },
  { label: 'Why Trust Blue Best', href: '#why-trust-bluebest' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Request Free Estimate', href: '#hero_Section-bblanding' },
];

const Footer: React.FC = () => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navbarHeight = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      className="bg-blue-primary text-white relative"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.04) 10px,
            rgba(255,255,255,0.04) 11px
          )
        `,
      }}
    >
      <div className="max-w-6xl mx-auto px-10 pt-16 pb-10">

        {/* Main grid: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] gap-x-16 gap-y-10 mb-12">

          {/* Column 1 — Logo + Google Rating + Social Icons */}
          <div className="flex flex-col gap-5">
            <div className="bg-white p-3 rounded-lg shadow-md inline-block w-fit">
              <Logo />
            </div>

            {/* Google Rating */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <svg width="28" height="28" viewBox="0 0 48 48" className="flex-shrink-0">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"/>
                </svg>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#F7941D">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="font-kanit font-bold text-base md:text-lg text-white">
                5.0 RATING <span className="font-normal text-white/80">(2600+ Reviews)</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white hover:text-orange-primary transition-colors duration-300"
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-kanit text-xl font-bold text-orange-primary mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 font-lato text-base md:text-lg text-white">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="hover:text-orange-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Us */}
          <div>
            <h3 className="font-kanit text-xl font-bold text-orange-primary mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 font-lato text-base md:text-lg text-white">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-orange-primary" />
                <span>600 N 500 W Suite D Bountiful, UT 84010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-orange-primary" />
                <a href="tel:+13852002604" className="hover:text-orange-primary transition-colors duration-300">
                  (385) 200-2604
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-orange-primary" />
                <a href="mailto:info@bluebest.com" className="hover:text-orange-primary transition-colors duration-300">
                  info@bluebest.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/15 my-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row flex-wrap sm:items-center sm:justify-between gap-3 font-lato text-base md:text-lg text-white text-center sm:text-left">
          <p className="md:mb-0">
            &copy; {new Date().getFullYear()} BlueBest Plumbing, Heating, Air, Generators. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 leading-none">
            <a href="/privacy-policy" className="hover:text-orange-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:text-orange-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/accessibility-statement" className="hover:text-orange-primary transition-colors duration-300">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
