'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Heart, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const features = [
  {
    icon: Shield,
    title: 'Fokus pada Standar dan Keselamatan Kerja',
    description: 'Mengutamakan keselamatan dengan standar pelatihan terbaik dan terukur.',
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
              {/* Image Kegiatan Pelatihan */}
              <div className="aspect-[4/3]">
                <img 
                  src="/images/Stir_1.jpg" 
                  alt="Kegiatan Pelatihan"
                  className="w-full h-full object-cover"
                />
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
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/6281215884127?text=Halo%20LPK%20Sadewa%2C%20saya%20ingin%20mendaftar%20kursus%20mengemudi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-blue/90 transition-all hover:shadow-xl hover:shadow-brand-blue/25"
              >
                Daftar Sekarang
                <span>→</span>
              </a>
              <a
                href="#paket"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all px-6 py-3"
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
