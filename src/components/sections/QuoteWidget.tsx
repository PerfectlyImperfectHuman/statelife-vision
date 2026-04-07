import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/shared/ScrollReveal';

const schema = z.object({
  protection_type: z.enum(['Family', 'Myself', 'My Employees']),
  product_type: z.string().min(1, 'Please select a product type'),
  age: z.number().min(18, 'Minimum age is 18').max(65, 'Maximum age is 65'),
  coverage_amount: z.number().min(500000),
  name: z.string().trim().min(2, 'Name is required').max(100),
  phone: z.string().regex(/^03\d{2}-?\d{7}$/, 'Enter valid phone: 03XX-XXXXXXX'),
});

type FormData = z.infer<typeof schema>;

const protectionTypes = ['Family', 'Myself', 'My Employees'] as const;
const productTypes = ['Life Insurance', 'Health Insurance', 'Takaful', 'Savings Plan'];

function formatCoverage(val: number) {
  if (val >= 1000000) return `PKR ${(val / 1000000).toFixed(1)}M`;
  return `PKR ${(val / 1000).toFixed(0)}K`;
}

export default function QuoteWidget() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [coverage, setCoverage] = useState(2500000);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      protection_type: 'Family',
      product_type: '',
      age: 30,
      coverage_amount: 2500000,
      name: '',
      phone: '',
    },
  });

  const selectedProtection = watch('protection_type');

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-14 md:py-24 bg-brand-950 relative overflow-hidden" aria-label="Get a free premium estimate">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-brand-800/30 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-brand-800/20 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <ScrollReveal>
            <span className="text-brand-300 text-body-xs uppercase tracking-widest">
              Free Premium Estimate
            </span>
            <h2 className="text-display-xl text-white font-display mt-3">
              Find the Right Plan in Under 60 Seconds
            </h2>
            <p className="text-white/60 text-body-lg mt-4">
              Get an instant estimate — no commitments, no personal data required.
            </p>
            <div className="flex flex-col gap-3 mt-8" role="list">
              {[
                'No personal data required to get estimate',
                'Compare 8+ plans side by side',
                'Speak to an agent immediately after',
              ].map((text) => (
                <div key={text} className="flex items-center gap-3" role="listitem">
                  <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-white/70 text-body-sm">{text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-modal">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                    role="alert"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-16 h-16 text-accent-500 mx-auto" aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-display-md text-ink-900 font-display mt-4">Quote Request Received!</h3>
                    <p className="text-body-md text-ink-500 mt-2">An agent will call you within 2 hours.</p>
                    <a
                      href="tel:0800700900"
                      className="inline-flex items-center gap-2 mt-6 bg-brand-500 text-white rounded-xl px-6 py-3 font-semibold text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                    >
                      Or call now: 0800-700-900
                    </a>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    aria-label="Premium estimate form"
                  >
                    {/* Protection type */}
                    <div>
                      <legend className="text-body-sm font-medium text-ink-700 mb-2 block">I want to protect my…</legend>
                      <div className="flex gap-2" role="group" aria-label="Select who you want to protect">
                        {protectionTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setValue('protection_type', type)}
                            className={`flex-1 rounded-full py-2.5 text-body-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                              selectedProtection === type
                                ? 'bg-brand-500 text-white shadow-md'
                                : 'border border-ink-200 text-ink-600 hover:border-brand-300'
                            }`}
                            aria-pressed={selectedProtection === type}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Product type */}
                    <div>
                      <label htmlFor="product_type" className="text-body-sm font-medium text-ink-700 mb-2 block">Product Type</label>
                      <select
                        id="product_type"
                        {...register('product_type')}
                        className={`w-full rounded-xl border border-ink-200 px-4 py-3 text-body-sm text-ink-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white ${errors.product_type ? 'border-error' : ''}`}
                        aria-invalid={!!errors.product_type}
                        aria-describedby={errors.product_type ? 'product_type-error' : undefined}
                      >
                        <option value="">Select a product type</option>
                        {productTypes.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      {errors.product_type && (
                        <p id="product_type-error" className="text-error text-body-xs mt-1" role="alert">
                          {errors.product_type.message}
                        </p>
                      )}
                    </div>

                    {/* Age */}
                    <div>
                      <label htmlFor="age" className="text-body-sm font-medium text-ink-700 mb-2 block">Your Age</label>
                      <input
                        id="age"
                        type="number"
                        {...register('age', { valueAsNumber: true })}
                        className={`w-full rounded-xl border border-ink-200 px-4 py-3 text-body-sm text-ink-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all ${errors.age ? 'border-error' : ''}`}
                        min={18}
                        max={65}
                        aria-invalid={!!errors.age}
                        aria-describedby={errors.age ? 'age-error' : 'age-hint'}
                      />
                      <p id="age-hint" className="text-body-xs text-ink-400 mt-1">Age affects premium calculation</p>
                      {errors.age && (
                        <p id="age-error" className="text-error text-body-xs mt-1" role="alert">
                          {errors.age.message}
                        </p>
                      )}
                    </div>

                    {/* Coverage slider */}
                    <div>
                      <label className="text-body-sm font-medium text-ink-700 mb-2 flex justify-between">
                        <span>Coverage Amount</span>
                        <span className="text-brand-500 font-semibold">{formatCoverage(coverage)}</span>
                      </label>
                      <input
                        type="range"
                        min={500000}
                        max={10000000}
                        step={500000}
                        value={coverage}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setCoverage(val);
                          setValue('coverage_amount', val);
                        }}
                        className="w-full h-2 bg-ink-100 rounded-full appearance-none cursor-pointer accent-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Adjust coverage amount"
                        aria-valuemin={500000}
                        aria-valuemax={10000000}
                        aria-valuenow={coverage}
                      />
                      <div className="flex justify-between text-body-xs text-ink-400 mt-1">
                        <span>PKR 500K</span>
                        <span>PKR 10M</span>
                      </div>
                    </div>

                    {/* Name & phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-body-sm font-medium text-ink-700 mb-2 block">Your Name</label>
                        <input
                          id="name"
                          type="text"
                          {...register('name')}
                          className={`w-full rounded-xl border border-ink-200 px-4 py-3 text-body-sm text-ink-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all ${errors.name ? 'border-error' : ''}`}
                          placeholder="Full name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-error text-body-xs mt-1" role="alert">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-body-sm font-medium text-ink-700 mb-2 block">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className={`w-full rounded-xl border border-ink-200 px-4 py-3 text-body-sm text-ink-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all ${errors.phone ? 'border-error' : ''}`}
                          placeholder="03XX-XXXXXXX"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-error text-body-xs mt-1" role="alert">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl py-4 font-semibold text-body-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                      aria-busy={loading}
                    >
                      {loading ? (
                        <><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> Calculating...</>
                      ) : (
                        <>Get My Free Quote <ArrowRight className="w-5 h-5" aria-hidden="true" /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
