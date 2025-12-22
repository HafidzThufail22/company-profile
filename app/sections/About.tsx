'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Heart, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const features = [
  {
    icon: Award,
    title: 'Berizin Resmi',
    description: 'Terdaftar dan diakui oleh Dinas Perhubungan dengan sertifikat resmi.',
  },
  {
    icon: Heart,
    title: 'Instruktur Sabar',
    description: 'Tim instruktur berpengalaman yang ramah dan sabar membimbing.',
  },
  {
    icon: Calendar,
    title: 'Jadwal Fleksibel',
    description: 'Atur jadwal latihan sesuai waktu luang Anda, termasuk weekend.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Mengapa Memilih Kami?"
          subtitle="LPK Sadewa hadir untuk membantu Anda menguasai kemampuan mengemudi dengan aman dan percaya diri."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-12 h-12 text-brand-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                      />
                    </svg>
                  </div>
                  <p className="text-brand-muted text-sm">Foto Kegiatan Pelatihan</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl"
            >
              <span className="text-3xl font-bold block font-[family-name:var(--font-heading)]">10+</span>
              <span className="text-sm opacity-90">Tahun Pengalaman</span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 font-[family-name:var(--font-heading)]">
              Kursus Mengemudi Profesional dengan Standar Keamanan Tinggi
            </h3>
            <p className="text-brand-muted mb-8 leading-relaxed">
              Kami berkomitmen memberikan pelatihan mengemudi terbaik dengan mengutamakan 
              keselamatan dan kenyamanan peserta. Setiap instruktur kami telah tersertifikasi 
              dan memiliki pengalaman bertahun-tahun dalam mengajar.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1 font-[family-name:var(--font-heading)]">
                      {feature.title}
                    </h4>
                    <p className="text-brand-muted text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="#paket"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
              >
                Lihat Paket Kursus
                <span>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
