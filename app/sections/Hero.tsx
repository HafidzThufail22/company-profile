'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Shield, Clock, Users, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Landing Page Web LPK.png')" }}
      />
      
      {/* White Overlay for softer background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
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
              className="text-brand-blue font-semibold px-8 py-4 rounded-full border-2 border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/10 transition-all backdrop-blur-sm"
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
              { icon: Calendar, value: '✓', label: 'Jadwal Fleksibel' },
              { icon: Clock, value: '10+', label: 'Tahun Pengalaman' },
              { icon: Shield, value: '100%', label: 'Standar Keselamatan' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm">
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
