import SEOHead from '@/components/shared/SEOHead';
import LegalPageLayout from '@/components/shared/LegalPageLayout';

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'website-use', title: 'Use of This Website' },
  { id: 'products-services', title: 'Insurance Products & Services' },
  { id: 'policyholder-obligations', title: 'Policyholder Obligations' },
  { id: 'claims-process', title: 'Claims Process' },
  { id: 'ip-rights', title: 'Intellectual Property Rights' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'disputes', title: 'Dispute Resolution' },
  { id: 'contact-info', title: 'Contact Information' },
];

export default function Terms() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated="March 2025" sections={sections}>
      <SEOHead
        title="Terms & Conditions — State Life Insurance"
        description="Terms governing use of State Life Insurance website and purchase of State Life products in Pakistan."
        canonical="/terms"
      />

      <h2 id="acceptance" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">1. Acceptance of Terms</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">By accessing and using the State Life Insurance Corporation of Pakistan website, you accept and agree to be bound by these Terms and Conditions. These terms are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan.</p>

      <h2 id="website-use" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">2. Use of This Website</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">You agree not to use this website for any unlawful purpose, including but not limited to: scraping or automated data collection, uploading malware or malicious code, misrepresenting your identity, or attempting to gain unauthorized access to our systems. We reserve the right to restrict access to the website at our discretion.</p>

      <h2 id="products-services" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">3. Insurance Products & Services</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">Product descriptions on this website are summaries only. The terms of the actual policy document prevail in all cases. Insurance products are available to eligible Pakistani residents and nationals as determined by our underwriting guidelines. Premium estimates provided online are indicative and subject to formal underwriting.</p>

      <h2 id="policyholder-obligations" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">4. Policyholder Obligations</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">As a policyholder, you are obligated to: provide truthful and complete disclosure of all material facts, pay premiums in a timely manner, notify State Life promptly of any changes in risk or personal circumstances, and cooperate fully in claims investigations. Failure to meet these obligations may result in policy cancellation or claim denial.</p>

      <h2 id="claims-process" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">5. Claims Process</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">Claims must be notified within 90 days of the insured event. All supporting documents must be submitted within 6 months. Fraudulent claims will result in immediate policy cancellation, forfeiture of all benefits, and may be reported to law enforcement authorities under applicable Pakistani law.</p>

      <h2 id="ip-rights" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">6. Intellectual Property Rights</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">All content on this website — including text, graphics, logos, images, software, and design — is the property of State Life Insurance Corporation of Pakistan and is protected by copyright, trademark, and other intellectual property laws. Unauthorized reproduction, distribution, or modification is prohibited.</p>

      <h2 id="liability" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">7. Limitation of Liability</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">State Life's liability is limited to the amount paid for the specific product or service in question. We are not liable for any indirect, incidental, consequential, or punitive damages arising from your use of our website or services. This limitation applies to the maximum extent permitted under Pakistani law.</p>

      <h2 id="governing-law" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">8. Governing Law</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">These terms are governed by the laws of the Islamic Republic of Pakistan. The Insurance Ordinance 2000 and regulations issued by the Securities and Exchange Commission of Pakistan (SECP) take precedence over these terms where applicable.</p>

      <h2 id="disputes" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">9. Dispute Resolution</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">Disputes should first be raised with our customer service team. If unresolved, complaints may be escalated to the Federal Insurance Ombudsman. As a last resort, disputes shall be subject to the exclusive jurisdiction of the courts of Karachi, Pakistan.</p>

      <h2 id="contact-info" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">10. Contact Information</h2>
      <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-xl p-5 my-6">
        <p className="text-body-md text-ink-700 font-medium">State Life Insurance Corporation of Pakistan</p>
        <p className="text-body-sm text-ink-600 mt-1">State Life Building, Dr. Ziauddin Ahmed Road, Karachi 75600</p>
        <p className="text-body-sm text-ink-600">Phone: 0800-700-900</p>
        <p className="text-body-sm text-ink-600">Email: info@statelife.com.pk</p>
      </div>
    </LegalPageLayout>
  );
}
