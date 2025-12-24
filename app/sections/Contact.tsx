'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '0812 1588 4127',
    href: 'https://wa.me/6281215884127?text=Halo%20LPK%20Sadewa%2C%20saya%20ingin%20bertanya%20tentang%20kursus%20mengemudi',
    color: 'bg-green-500',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@sadewacourse',
    href: 'https://instagram.com/sadewacourse',
    color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
  },
];

export default function Contact() {
  return (
    <section id="kontak" className="py-24 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hubungi Kami"
          subtitle="Punya pertanyaan atau ingin mendaftar? Hubungi kami melalui WhatsApp atau Instagram."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 bg-brand-white rounded-2xl shadow-sm hover:shadow-lg transition-all group"
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-sm text-brand-muted block">{item.label}</span>
                <span className="font-semibold text-brand-dark text-lg">{item.value}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Operating Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-brand-white rounded-2xl p-6 shadow-sm text-center max-w-md mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-brand-blue" />
            <span className="font-semibold text-brand-dark">Jam Operasional</span>
          </div>
          <p className="text-brand-muted">
            Buka Senin - Sabtu: <span className="font-medium text-brand-dark">08.00 - 16.00 WIB</span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://wa.me/6281215884127?text=Halo%20LPK%20Sadewa%2C%20saya%20ingin%20mendaftar%20kursus%20mengemudi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-blue/90 transition-all hover:shadow-xl hover:shadow-brand-blue/25"
          >
            <MessageCircle className="w-5 h-5" />
            Chat via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
