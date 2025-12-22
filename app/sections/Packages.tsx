'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/ui/Card';

const packages = [
  {
    name: 'Manual Dasar',
    price: 'Rp 750.000',
    description: 'Paket dasar untuk pemula yang ingin belajar mobil manual.',
    duration: '5x Pertemuan',
    features: [
      '5 sesi latihan @90 menit',
      'Mobil manual standar',
      'Instruktur berpengalaman',
      'Sertifikat kelulusan',
    ],
    popular: false,
    icon: null,
  },
  {
    name: 'Matic Lancar',
    price: 'Rp 850.000',
    description: 'Pilihan terpopuler untuk belajar mobil matic dengan cepat.',
    duration: '6x Pertemuan',
    features: [
      '6 sesi latihan @90 menit',
      'Mobil matic terbaru',
      'Instruktur berpengalaman',
      'Sertifikat kelulusan',
      'Latihan parkir intensif',
    ],
    popular: true,
    icon: Star,
  },
  {
    name: 'Paket VIP',
    price: 'Rp 1.500.000',
    description: 'Layanan premium dengan fasilitas terlengkap dan privat.',
    duration: '10x Pertemuan',
    features: [
      '10 sesi latihan @120 menit',
      'Pilih manual atau matic',
      'Instruktur senior pilihan',
      'Sertifikat premium',
      'Jemput dari rumah',
      'Bonus latihan malam',
    ],
    popular: false,
    icon: Zap,
  },
];

export default function Packages() {
  return (
    <section id="paket" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Pilih Paket Kursus"
          subtitle="Temukan paket belajar mengemudi yang sesuai dengan kebutuhan dan budget Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-brand-blue/25">
                    Paling Populer
                  </span>
                </div>
              )}

              <Card
                className={`h-full flex flex-col ${
                  pkg.popular ? 'ring-2 ring-brand-blue' : ''
                }`}
                hover={true}
              >
                {/* Header */}
                <div className="text-center pb-6 border-b border-brand-light">
                  {pkg.icon && (
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <pkg.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-brand-dark mb-2 font-[family-name:var(--font-heading)]">
                    {pkg.name}
                  </h3>
                  <p className="text-brand-muted text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-brand-dark font-[family-name:var(--font-heading)]">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-brand-muted text-sm">{pkg.duration}</span>
                </div>

                {/* Features */}
                <div className="flex-1 py-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span className="text-brand-muted text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="#kontak"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/25'
                      : 'bg-brand-light text-brand-dark hover:bg-brand-blue hover:text-white'
                  }`}
                >
                  Pilih Paket
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-brand-muted mt-12"
        >
          Butuh paket custom?{' '}
          <a href="#kontak" className="text-brand-blue font-semibold hover:underline">
            Hubungi kami
          </a>{' '}
          untuk penawaran khusus.
        </motion.p>
      </div>
    </section>
  );
}
