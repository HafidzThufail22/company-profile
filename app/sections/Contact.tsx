'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send, MapPin, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    href: 'https://wa.me/6281234567890',
    color: 'bg-green-500',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 21-1234-5678',
    href: 'tel:+622112345678',
    color: 'bg-brand-blue',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@lpksadewa.com',
    href: 'mailto:info@lpksadewa.com',
    color: 'bg-red-500',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (in real app, integrate with backend)
    alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
  };

  return (
    <section id="kontak" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hubungi Kami"
          subtitle="Punya pertanyaan atau ingin mendaftar? Hubungi kami melalui kontak di bawah atau isi formulir."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6 font-[family-name:var(--font-heading)]">
              Informasi Kontak
            </h3>
            <p className="text-brand-muted mb-8 leading-relaxed">
              Tim kami siap membantu menjawab pertanyaan Anda seputar kursus mengemudi. 
              Jangan ragu untuk menghubungi kami!
            </p>

            <div className="space-y-4 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-brand-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-brand-muted block">{item.label}</span>
                    <span className="font-semibold text-brand-dark">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Operating Hours */}
            <div className="bg-brand-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-brand-blue" />
                <span className="font-semibold text-brand-dark">Jam Operasional</span>
              </div>
              <div className="space-y-2 text-sm text-brand-muted">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium text-brand-dark">08.00 - 18.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-medium text-brand-dark">08.00 - 17.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="font-medium text-brand-dark">09.00 - 15.00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-brand-white rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-dark/5">
              <h3 className="text-2xl font-bold text-brand-dark mb-2 font-[family-name:var(--font-heading)]">
                Kirim Pesan
              </h3>
              <p className="text-brand-muted mb-8">
                Isi formulir di bawah dan kami akan segera menghubungi Anda.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-brand-dark mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light/50 text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-brand-dark mb-2"
                  >
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light/50 text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    placeholder="Contoh: 081234567890"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-dark mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light/50 text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"
                    placeholder="Tulis pertanyaan atau pesan Anda di sini..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-all hover:shadow-lg hover:shadow-brand-blue/25 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
