'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Location() {
  return (
    <section id="lokasi" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Lokasi Kami"
          subtitle="Kunjungi kantor kami atau gunakan peta untuk mendapatkan petunjuk arah."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Google Maps Placeholder - Replace src with actual embed URL */}
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-light to-brand-blue/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi LPK Sadewa"
              />
            </div>
          </motion.div>

          {/* Address Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-brand-light rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2 font-[family-name:var(--font-heading)]">
                    Alamat Kantor
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    Jl. Raya Sadewa No. 123<br />
                    Kelurahan Merdeka, Kecamatan Sukamaju<br />
                    Jakarta Selatan, DKI Jakarta 12345
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-brand-muted">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  <span>Buka Senin - Sabtu: 08.00 - 18.00 WIB</span>
                </div>
                <div className="flex items-center gap-3 text-brand-muted">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  <span>Minggu: 09.00 - 15.00 WIB</span>
                </div>
                <div className="flex items-center gap-3 text-brand-muted">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-600 font-medium">Parkir luas tersedia</span>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-blue/90 transition-all hover:shadow-lg hover:shadow-brand-blue/25"
              >
                <Navigation className="w-5 h-5" />
                Petunjuk Arah
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
