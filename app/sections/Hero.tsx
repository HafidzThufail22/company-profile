'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Shield, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-blue-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Shield className="w-4 h-4" />
            LPK Berizin Resmi
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 leading-tight font-[family-name:var(--font-heading)]">
            Mengemudi Aman &{' '}
            <span className="text-brand-blue relative">
              Percaya Diri
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 2 100 2 150 6C200 10 250 10 298 2"
                  stroke="#2563EB"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-30"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10"
          >
            Belajar mengemudi bersama instruktur profesional dan berpengalaman. 
            Metode pembelajaran yang mudah dipahami untuk pemula hingga mahir.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#kontak"
              className="group bg-brand-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-blue/90 transition-all hover:shadow-xl hover:shadow-brand-blue/25 flex items-center gap-2"
            >
              Daftar Sekarang
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#paket"
              className="text-brand-dark font-semibold px-8 py-4 rounded-full border-2 border-brand-dark/10 hover:border-brand-blue hover:text-brand-blue transition-all"
            >
              Lihat Paket
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: Users, value: '5000+', label: 'Siswa Lulus' },
              { icon: Clock, value: '10+', label: 'Tahun Pengalaman' },
              { icon: Shield, value: '100%', label: 'Berizin Resmi' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <span className="text-2xl font-bold text-brand-dark font-[family-name:var(--font-heading)]">
                  {stat.value}
                </span>
                <span className="text-brand-muted text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-brand-muted hover:text-brand-blue transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
