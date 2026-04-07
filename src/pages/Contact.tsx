import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, CheckCircle, Loader2 } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ScrollReveal from '@/components/shared/ScrollReveal';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().trim().min(1, 'Phone is required').max(20),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().trim().min(1, 'Message is required').max(500),
});

type ContactFormData = z.infer<typeof contactSchema>;

const offices = [
  { city: 'Karachi', address: 'State Life Building, Dr. Ziauddin Ahmed Road', phone: '021-9920-5441' },
  { city: 'Lahore', address: '22-A Davis Road, Lahore Cantt', phone: '042-3636-8541' },
  { city: 'Islamabad', address: 'State Life Building, Jinnah Avenue, Blue Area', phone: '051-920-7571' },
  { city: 'Peshawar', address: 'State Life Building, The Mall', phone: '091-921-4571' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const msgLength = (watch('message') || '').length;

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-14 md:py-16 bg-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-display-xl text-white font-display">Get in Touch</h1>
            <p className="text-white/60 text-body-lg mt-3 max-w-2xl">
              We're here to help — reach our team by phone, email, or visit us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main */}
      <section className="py-14 md:py-16 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <ScrollReveal className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-card">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-accent-500 mx-auto" />
                    <h3 className="text-display-md font-display text-ink-900 mt-4">Message Sent!</h3>
                    <p className="text-body-md text-ink-500 mt-2">We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <h3 className="text-body-lg font-semibold text-ink-900 mb-2">Send a Message</h3>
                    <div>
                      <label className="block text-body-sm font-medium text-ink-700 mb-1">Full Name</label>
                      <input {...register('name')} className={`w-full border ${errors.name ? 'border-error' : 'border-ink-200'} rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500`} />
                      {errors.name && <p className="text-error text-body-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-ink-700 mb-1">Email</label>
                      <input {...register('email')} type="email" className={`w-full border ${errors.email ? 'border-error' : 'border-ink-200'} rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500`} />
                      {errors.email && <p className="text-error text-body-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-ink-700 mb-1">Phone</label>
                      <input {...register('phone')} className={`w-full border ${errors.phone ? 'border-error' : 'border-ink-200'} rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500`} />
                      {errors.phone && <p className="text-error text-body-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-ink-700 mb-1">Subject</label>
                      <select {...register('subject')} className={`w-full border ${errors.subject ? 'border-error' : 'border-ink-200'} rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white`}>
                        <option value="">Select a subject</option>
                        <option>Policy Inquiry</option><option>Claim Status</option><option>Premium Payment</option><option>Complaint</option><option>Agent Query</option><option>General Information</option>
                      </select>
                      {errors.subject && <p className="text-error text-body-xs mt-1">{errors.subject.message}</p>}
                    </div>
                    <div className="relative">
                      <label className="block text-body-sm font-medium text-ink-700 mb-1">Message</label>
                      <textarea {...register('message')} maxLength={500} rows={4} className={`w-full border ${errors.message ? 'border-error' : 'border-ink-200'} rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none`} />
                      <span className="absolute bottom-3 right-3 text-body-xs text-ink-400">{msgLength} / 500</span>
                      {errors.message && <p className="text-error text-body-xs mt-1">{errors.message.message}</p>}
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl py-3 text-body-sm font-semibold transition-colors flex items-center justify-center gap-2">
                      {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Details */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-card space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center"><MapPin className="w-5 h-5 text-brand-500" /></div>
                    <h4 className="text-body-md font-semibold text-ink-900">Head Office</h4>
                  </div>
                  <p className="text-body-sm text-ink-500 leading-relaxed">State Life Insurance Corporation of Pakistan<br />State Life Building, Dr. Ziauddin Ahmed Road<br />Karachi - 75600, Pakistan</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center"><Phone className="w-5 h-5 text-accent-500" /></div>
                    <h4 className="text-body-md font-semibold text-ink-900">Helpline</h4>
                  </div>
                  <a href="tel:0800700900" className="text-display-md text-brand-500 font-display font-bold block">0800-700-900</a>
                  <p className="text-body-xs text-ink-400">Toll Free | Mon–Sat 9am–6pm</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center"><Mail className="w-5 h-5 text-gold-500" /></div>
                    <h4 className="text-body-md font-semibold text-ink-900">Email</h4>
                  </div>
                  <p className="text-body-sm text-ink-500">info@statelife.com.pk</p>
                  <p className="text-body-sm text-ink-500">claims@statelife.com.pk</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Map placeholder */}
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-ink-100 to-ink-200 rounded-3xl overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                <MapPin className="w-12 h-12 text-ink-300" />
                <p className="text-body-sm text-ink-400 text-center mt-3">Karachi Head Office<br />Dr. Ziauddin Ahmed Road</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Regional offices */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {offices.map((o, i) => (
              <ScrollReveal key={o.city} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-5 border border-ink-100 text-center">
                  <h4 className="font-semibold text-body-md text-ink-900">{o.city}</h4>
                  <p className="text-body-xs text-ink-500 mt-1">{o.address}</p>
                  <a href={`tel:${o.phone.replace(/-/g, '')}`} className="text-brand-500 text-body-sm font-semibold mt-2 block">{o.phone}</a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
