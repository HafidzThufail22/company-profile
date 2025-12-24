'use client';

import { motion } from 'framer-motion';
import { Check, Star, Clock, Car, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/ui/Card';

const packages = [
  {
    name: 'Paket Dasar',
    price: 'Rp 400.000',
    duration: '4 Jam',
    popular: false,
  },
  {
    name: 'Paket Standart',
    price: 'Rp 750.000',
    duration: '8 Jam',
    popular: false,
  },
  {
    name: 'Paket Lancar',
    price: 'Rp 900.000',
    duration: '10 Jam',
    popular: true,
  },
  {
    name: 'Paket Lancar',
    price: 'Rp 1.350.000',
    duration: '16 Jam',
    popular: false,
  },
  {
    name: 'Paket Lancar + SIM A',
    price: 'Rp 1.550.000',
    duration: '10 Jam + SIM A',
    popular: false,
  },
  {
    name: 'Paket Lancar + SIM A',
    price: 'Rp 1.900.000',
    duration: '16 Jam + SIM A',
    popular: false,
  },
];

const keterangan = [
  'Biaya Pendaftaran Rp 75.000',
  '1 Jam Pelajaran 60 menit terdiri dari 45 menit praktik dan 15 menit teori',
  'Biaya Ujian dan Sertifikat Rp 50.000',
];

const carInfo = 'Avanza Veloz Full AC';

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
                  <h3 className="text-xl font-bold text-brand-dark mb-2 font-[family-name:var(--font-heading)]">
                    {pkg.name}
                  </h3>
                  <span className="text-brand-blue text-sm font-medium bg-brand-blue/10 px-3 py-1 rounded-full">
                    {pkg.duration}
                  </span>
                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className="text-3xl font-bold text-brand-dark font-[family-name:var(--font-heading)]">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Car Info */}
                <div className="flex-1 py-6 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-brand-muted">
                    <Car className="w-5 h-5 text-brand-blue" />
                    <span className="text-sm">{carInfo}</span>
                  </div>
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

        {/* Keterangan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h4 className="text-xl font-bold text-brand-dark mb-6 font-[family-name:var(--font-heading)]">
            Keterangan
          </h4>
          <ul className="space-y-3">
            {keterangan.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-brand-blue font-bold">{index + 1}.</span>
                <span className="text-brand-muted">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/6281215884127?text=Halo%20LPK%20Sadewa%2C%20saya%20ingin%20mendaftar%20kursus%20mengemudi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-blue/90 transition-all hover:shadow-xl hover:shadow-brand-blue/25"
          >
            Daftar Sekarang
            <span>→</span>
          </a>
          <p className="text-brand-muted mt-6">
            Butuh paket custom?{' '}
            <a href="#kontak" className="text-brand-blue font-semibold hover:underline">
              Hubungi kami
            </a>{' '}
            untuk penawaran khusus.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
