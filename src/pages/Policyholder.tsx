import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, FileSearch, UserSearch, MapPin, Phone, CheckCircle, Loader2 } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ScrollReveal from '@/components/shared/ScrollReveal';

// ---- PAY PREMIUM ----
const step1Schema = z.object({
  policyNumber: z.string().regex(/^[A-Z]{2}-\d{6,8}$/, 'Format: SL-XXXXXXX'),
  cnic: z.string().regex(/^\d{5}-\d{7}-\d{1}$/, 'Format: 35201-1234567-1'),
});

type Step1Data = z.infer<typeof step1Schema>;

function PayPremiumSection() {
  const [step, setStep] = useState(1);
  const [policyData, setPolicyData] = useState<Step1Data | null>(null);
  const [installment, setInstallment] = useState<'quarterly' | 'half' | 'annual'>('quarterly');
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  });

  const amounts = { quarterly: '12,500', half: '24,000', annual: '45,000' };

  const onStep1 = (data: Step1Data) => {
    setLoading(true);
    setTimeout(() => {
      setPolicyData(data);
      setStep(2);
      setLoading(false);
    }, 1500);
  };

  const onStep3Pay = () => {
    setLoading(true);
    setTimeout(() => {
      setDone(true);
      setLoading(false);
    }, 1500);
  };

  const dots = (
    <div className="flex justify-center gap-2 mb-6">
      {[1, 2, 3].map((s) => (
        <div key={s} className={`w-3 h-3 rounded-full transition-colors ${s <= step ? 'bg-brand-500' : 'bg-ink-200'}`} />
      ))}
    </div>
  );

  if (done) {
    return (
      <div className="bg-white rounded-3xl border-2 border-brand-100 shadow-modal p-8 text-center">
        <CheckCircle className="w-16 h-16 text-accent-500 mx-auto" />
        <h3 className="text-display-md font-display text-ink-900 mt-4">Payment Initiated!</h3>
        <p className="text-body-md text-ink-500 mt-2">Redirecting to payment gateway...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-brand-100 shadow-modal p-8">
      {dots}
      {step === 1 && (
        <form onSubmit={handleSubmit(onStep1)} className="space-y-5">
          <h3 className="text-body-lg font-semibold text-ink-900">Look Up Your Policy</h3>
          <div>
            <label className="block text-body-sm font-medium text-ink-700 mb-1">Policy Number</label>
            <input {...register('policyNumber')} placeholder="e.g. SL-1234567" className={`w-full border ${errors.policyNumber ? 'border-error' : 'border-ink-200'} rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition`} />
            {errors.policyNumber && <p className="text-error text-body-xs mt-1">{errors.policyNumber.message}</p>}
            <p className="text-body-xs text-ink-400 mt-1">Found on your policy document</p>
          </div>
          <div>
            <label className="block text-body-sm font-medium text-ink-700 mb-1">CNIC Number</label>
            <input {...register('cnic')} placeholder="35201-1234567-1" className={`w-full border ${errors.cnic ? 'border-error' : 'border-ink-200'} rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition`} />
            {errors.cnic && <p className="text-error text-body-xs mt-1">{errors.cnic.message}</p>}
          </div>
          <button type="submit" disabled={loading} className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl py-3 text-body-sm font-semibold transition-colors flex items-center justify-center gap-2">
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Searching...</> : 'Look Up Policy'}
          </button>
        </form>
      )}

      {step === 2 && policyData && (
        <div className="space-y-5">
          <h3 className="text-body-lg font-semibold text-ink-900">Confirm Payment Details</h3>
          <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 space-y-2">
            <div className="flex justify-between text-body-sm"><span className="text-ink-500">Policyholder</span><span className="font-semibold text-ink-900">Muhammad Ahmad</span></div>
            <div className="flex justify-between text-body-sm"><span className="text-ink-500">Policy Type</span><span className="font-semibold text-ink-900">Platinum Plus Life Insurance</span></div>
            <div className="flex justify-between text-body-sm"><span className="text-ink-500">Policy #</span><span className="font-semibold text-ink-900">{policyData.policyNumber}</span></div>
            <div className="flex justify-between text-body-sm"><span className="text-ink-500">Due Date</span><span className="inline-block bg-warning/10 text-warning rounded-full px-3 py-0.5 text-body-xs font-semibold">Due: April 30, 2026</span></div>
          </div>

          <div className="space-y-3">
            {([['quarterly', 'Quarterly', 'PKR 12,500', ''], ['half', 'Half-Yearly', 'PKR 24,000', 'Save PKR 1,000'], ['annual', 'Annual', 'PKR 45,000', 'Save PKR 5,000']] as const).map(([key, label, amount, save]) => (
              <button key={key} onClick={() => setInstallment(key)} className={`w-full flex items-center justify-between border-2 ${installment === key ? 'border-brand-500 bg-brand-50' : 'border-ink-100'} rounded-xl p-4 transition-colors text-left`}>
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 ${installment === key ? 'border-brand-500 bg-brand-500' : 'border-ink-300'} flex items-center justify-center`}>
                    {installment === key && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="text-body-sm font-semibold text-ink-900">{label}</div>
                    {save && <div className="text-body-xs text-accent-500">{save}</div>}
                  </div>
                </div>
                <span className="text-body-md font-bold text-brand-500">{amount}</span>
              </button>
            ))}
          </div>
          <button onClick={() => setStep(3)} className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl py-3 text-body-sm font-semibold transition-colors">
            Proceed to Payment
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <h3 className="text-body-lg font-semibold text-ink-900">Select Payment Method</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'jazzcash', label: 'JazzCash', accent: 'border-orange-500 bg-orange-50' },
              { id: 'easypaisa', label: 'EasyPaisa', accent: 'border-accent-500 bg-accent-100' },
              { id: 'card', label: 'Debit / Credit Card', accent: 'border-brand-500 bg-brand-50' },
            ].map((m) => (
              <button key={m.id} onClick={() => setPaymentMethod(m.id)} className={`flex items-center gap-3 border-2 ${paymentMethod === m.id ? m.accent : 'border-ink-100'} rounded-2xl p-5 transition-colors hover:border-brand-500`}>
                <CreditCard className="w-6 h-6 text-ink-600" />
                <span className="text-body-sm font-semibold text-ink-900">{m.label}</span>
              </button>
            ))}
          </div>
          <button onClick={onStep3Pay} disabled={!paymentMethod || loading} className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white rounded-xl py-3 text-body-sm font-semibold transition-colors flex items-center justify-center gap-2">
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</> : `Pay PKR ${amounts[installment]}`}
          </button>
        </div>
      )}
    </div>
  );
}

// ---- TRACK CLAIM ----
function TrackClaimSection() {
  const [tab, setTab] = useState<'individual' | 'group'>('individual');
  const [showResult, setShowResult] = useState(false);

  return (
    <div>
      <div className="flex gap-2 mb-8">
        {(['individual', 'group'] as const).map((t) => (
          <button key={t} onClick={() => { setTab(t); setShowResult(false); }} className={`px-6 py-2.5 rounded-lg text-body-sm font-semibold transition-colors ${tab === t ? 'bg-brand-500 text-white' : 'text-ink-600 hover:bg-ink-100'}`}>
            {t === 'individual' ? 'Individual Claim' : 'Group Claim'}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 border border-ink-100 shadow-card">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-body-sm font-medium text-ink-700 mb-1">{tab === 'group' ? 'Company NTN' : 'Policy Number'}</label>
            <input placeholder={tab === 'group' ? 'Company NTN' : 'SL-XXXXXXX'} className="w-full border border-ink-200 rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-body-sm font-medium text-ink-700 mb-1">{tab === 'group' ? 'Group Policy Number' : 'CNIC Number'}</label>
            <input placeholder={tab === 'group' ? 'GP-XXXXXXX' : '35201-1234567-1'} className="w-full border border-ink-200 rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          {tab === 'individual' && (
            <div className="sm:col-span-2">
              <label className="block text-body-sm font-medium text-ink-700 mb-1">Claim Type</label>
              <select className="w-full border border-ink-200 rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white">
                <option>Death Claim</option><option>Maturity Claim</option><option>Surrender</option><option>Loan</option><option>Premium Waiver</option>
              </select>
            </div>
          )}
          {tab === 'group' && (
            <>
              <div><label className="block text-body-sm font-medium text-ink-700 mb-1">Employee Name</label><input className="w-full border border-ink-200 rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500" /></div>
              <div><label className="block text-body-sm font-medium text-ink-700 mb-1">Nature of Claim</label>
                <select className="w-full border border-ink-200 rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white">
                  <option>Death Claim</option><option>Hospitalization</option><option>Disability</option>
                </select>
              </div>
            </>
          )}
        </div>
        <button onClick={() => setShowResult(true)} className="mt-6 bg-brand-500 hover:bg-brand-600 text-white rounded-xl px-8 py-3 text-body-sm font-semibold transition-colors">
          Track Claim
        </button>

        {showResult && (
          <div className="mt-8 bg-ink-50 rounded-2xl p-6 border border-ink-100">
            <div className="flex items-center justify-between mb-4">
              <div><span className="text-body-xs text-ink-400">Claim #</span><div className="text-body-md font-semibold text-ink-900">CL-2024-7842</div></div>
              <span className="bg-warning/10 text-warning rounded-full px-3 py-1 text-body-xs font-semibold">Under Review</span>
            </div>
            <div className="flex gap-4 text-body-xs text-ink-500 mb-6"><span>Submitted: Mar 15, 2026</span><span>Expected: Apr 30, 2026</span></div>
            <div className="flex items-center gap-0">
              {['Received', 'Under Review', 'Approved'].map((s, i) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-body-xs font-bold ${i <= 1 ? 'bg-brand-500 text-white' : 'bg-ink-200 text-ink-500'}`}>{i + 1}</div>
                  {i < 2 && <div className={`flex-1 h-1 ${i < 1 ? 'bg-brand-500' : 'bg-ink-200'}`} />}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-body-xs text-ink-500 mt-1">
              <span>Received</span><span>Under Review</span><span>Approved</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ---- FIND AGENT ----
const agents = [
  { name: 'Khalid Mehmood', city: 'Lahore', area: 'Gulberg III', phone: '0300-1234567', spec: 'Life Insurance', license: 'SL-00234' },
  { name: 'Fatima Zahra', city: 'Karachi', area: 'DHA Phase 5', phone: '0321-7654321', spec: 'Health Insurance', license: 'SL-00891' },
  { name: 'Tariq Nawaz', city: 'Islamabad', area: 'F-10 Markaz', phone: '0333-9876543', spec: 'Takaful', license: 'SL-01456' },
];

const specColors: Record<string, string> = {
  'Life Insurance': 'bg-brand-50 text-brand-600',
  'Health Insurance': 'bg-accent-100 text-accent-600',
  Takaful: 'bg-gold-100 text-gold-600',
};

function FindAgentSection() {
  return (
    <div>
      <div className="bg-white rounded-3xl p-8 border border-ink-100 shadow-card mb-8">
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-body-sm font-medium text-ink-700 mb-1">City</label>
            <select className="w-full border border-ink-200 rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white">
              <option>Lahore</option><option>Karachi</option><option>Islamabad</option><option>Faisalabad</option><option>Rawalpindi</option><option>Peshawar</option><option>Multan</option><option>Quetta</option>
            </select>
          </div>
          <div>
            <label className="block text-body-sm font-medium text-ink-700 mb-1">Area / District</label>
            <input placeholder="e.g. Gulberg" className="w-full border border-ink-200 rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl py-3 text-body-sm font-semibold transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((a) => (
          <ScrollReveal key={a.license}>
            <div className="bg-white rounded-2xl border border-ink-100 p-5 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-600 font-semibold text-body-md">{a.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="text-body-md font-semibold text-ink-900">{a.name}</div>
                  <div className="text-body-xs text-ink-400">License: {a.license}</div>
                </div>
              </div>
              <span className={`inline-block ${specColors[a.spec] || ''} rounded-full px-3 py-1 text-body-xs font-semibold mt-3`}>{a.spec}</span>
              <div className="flex items-center gap-2 text-body-sm text-ink-500 mt-3">
                <MapPin className="w-4 h-4" /> {a.city}, {a.area}
              </div>
              <div className="text-body-md text-brand-500 font-semibold mt-2">{a.phone}</div>
              <a href={`tel:${a.phone.replace(/-/g, '')}`} className="block mt-4 text-center border-2 border-brand-500 text-brand-600 rounded-xl py-2.5 text-body-sm font-semibold hover:bg-brand-50 transition-colors">
                Contact Agent
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

// ---- MAIN PAGE ----
export default function Policyholder() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-14 md:py-16 bg-gradient-to-br from-brand-800 to-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-body-xs uppercase tracking-widest text-brand-300 font-semibold">Policyholder Services</span>
            <h1 className="text-display-xl text-white font-display mt-2">Manage Your Policy, Anytime</h1>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { Icon: CreditCard, label: 'Pay Premium', anchor: '#pay' },
                { Icon: FileSearch, label: 'Track Claim', anchor: '#claims' },
                { Icon: UserSearch, label: 'Find Agent', anchor: '#agent' },
              ].map(({ Icon, label, anchor }) => (
                <a key={label} href={anchor} className="bg-white/10 border border-white/20 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/20 transition-colors">
                  <Icon className="w-6 h-6 text-white/80" />
                  <span className="text-white font-semibold text-body-md">{label}</span>
                  <span className="ml-auto text-white/50">→</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pay Premium */}
      <section id="pay" className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="text-display-md font-display text-ink-900">Pay Your Premium Online</h2>
              <div className="space-y-5 mt-8">
                {[
                  'Enter your policy number',
                  'Verify your CNIC',
                  'Choose amount & installment',
                  'Pay via JazzCash, EasyPaisa, or card',
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center flex-shrink-0 text-body-sm font-bold">{i + 1}</div>
                    <span className="text-body-sm text-ink-600 pt-1">{s}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {['JazzCash', 'EasyPaisa', 'HBL', 'MCB', 'Debit/Credit Card'].map((m) => (
                  <span key={m} className="bg-ink-50 border border-ink-100 rounded-lg px-4 py-2 text-body-xs text-ink-600 font-medium">{m}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <PayPremiumSection />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Track Claim */}
      <section id="claims" className="py-14 md:py-20 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-display-md font-display text-ink-900 mb-8">Track Your Claim</h2>
          </ScrollReveal>
          <TrackClaimSection />
        </div>
      </section>

      {/* Find Agent */}
      <section id="agent" className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-display-md font-display text-ink-900 mb-8">Find a State Life Agent Near You</h2>
          </ScrollReveal>
          <FindAgentSection />
        </div>
      </section>
    </PageLayout>
  );
}
