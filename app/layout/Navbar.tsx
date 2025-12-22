'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Car } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#paket', label: 'Paket' },
  { href: '#lokasi', label: 'Lokasi' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-brand-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-brand-dark font-[family-name:var(--font-heading)]">
              LPK Sadewa
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-muted hover:text-brand-blue transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#kontak"
              className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-blue/90 transition-all hover:shadow-lg hover:shadow-brand-blue/25"
            >
              Daftar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-dark hover:text-brand-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-white border-t border-brand-light overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-brand-dark hover:text-brand-blue transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontak"
                onClick={handleLinkClick}
                className="block bg-brand-blue text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-brand-blue/90 transition-all"
              >
                Daftar Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
