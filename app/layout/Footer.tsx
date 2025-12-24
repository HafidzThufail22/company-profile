'use client';

import { Car, MapPin, Phone, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#paket', label: 'Paket' },
  { href: '#lokasi', label: 'Lokasi' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                LPK Sadewa
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lembaga Pendidikan Kursus Mengemudi terpercaya dengan instruktur profesional dan berpengalaman.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>Jl. Gadingan, Durungan, Wates, Kulon Progo, DIY</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <a 
                  href="https://wa.me/6281215884127" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors"
                >
                  0812 1588 4127
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">
              Ikuti Kami
            </h3>
            <a
              href="https://instagram.com/sadewacourse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 transition-all group"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-gray-400 group-hover:text-white transition-colors">@sadewacourse</span>
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} LPK Sadewa..</p>
        </motion.div>
      </div>
    </footer>
  );
}
