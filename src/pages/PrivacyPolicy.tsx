import SEOHead from '@/components/shared/SEOHead';
import LegalPageLayout from '@/components/shared/LegalPageLayout';

const sections = [
  { id: 'info-collect', title: 'Information We Collect' },
  { id: 'how-use', title: 'How We Use Your Information' },
  { id: 'sharing', title: 'Information Sharing & Disclosure' },
  { id: 'security', title: 'Data Security & Storage' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'your-rights', title: 'Your Rights & Choices' },
  { id: 'third-party', title: 'Third-Party Services' },
  { id: 'children', title: "Children's Privacy" },
  { id: 'changes', title: 'Changes to This Policy' },
  { id: 'contact-privacy', title: 'Contact Our Privacy Team' },
];

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="March 2025" sections={sections}>
      <SEOHead
        title="Privacy Policy — State Life Insurance"
        description="How we collect, use and protect your personal information in accordance with Pakistan's data protection framework."
        canonical="/privacy-policy"
      />

      <h2 id="info-collect" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">1. Information We Collect</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">We collect information necessary to provide insurance services, including: CNIC numbers, date of birth, contact details (phone, email, postal address), health declarations and medical history required for underwriting, payment information for premium processing, and digital data such as IP addresses and session cookies when you use our website.</p>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">Information is collected directly from you during policy applications, claims submissions, and customer service interactions. We may also receive data from authorized agents, empanelled hospitals, and government databases as required for policy administration.</p>

      <h2 id="how-use" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">2. How We Use Your Information</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">Your information is used to: process policy applications and issue certificates, calculate premiums and assess risk, administer claims and make benefit payments, meet regulatory obligations under SECP and other government bodies, communicate policy updates and service notifications, and improve our products and customer experience.</p>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">We do not use automated decision-making without human oversight for any decision that materially affects your policy or claim. All underwriting and claim decisions involve qualified professionals.</p>

      <h2 id="sharing" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">3. Information Sharing & Disclosure</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">We share your information only when necessary: with reinsurance companies for risk management, empanelled hospitals for cashless claim processing, SECP and FBR as legally required, and technology service providers under strict data processing agreements. We never sell your personal data to third parties for marketing purposes.</p>

      <h2 id="security" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">4. Data Security & Storage</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">We employ AES-256 encryption for data at rest and TLS 1.3 for data in transit. Policy records are retained for a minimum of 10 years following policy termination in compliance with insurance regulations. Our security practices are subject to annual third-party audits.</p>

      <h2 id="cookies" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">5. Cookies & Tracking</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">We use essential cookies for website functionality, analytics cookies (Google Analytics with IP anonymization) for usage statistics, and preference cookies to remember your settings. Declining analytics cookies does not affect website functionality or your ability to use our services.</p>

      <h2 id="your-rights" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">6. Your Rights & Choices</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">You have the right to: access your personal data held by us, request correction of inaccurate information, request deletion of your data (subject to legal retention requirements), withdraw consent for marketing communications at any time, and lodge a complaint with SECP if you believe your data rights have been violated. To exercise these rights, contact us at privacy@statelife.com.pk.</p>

      <h2 id="third-party" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">7. Third-Party Services</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">We use the following third-party services: Google Analytics for website usage analytics, Supabase for secure data storage, and Vercel for website hosting. All vendors are selected for GDPR-aligned data protection practices and operate under data processing agreements.</p>

      <h2 id="children" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">8. Children's Privacy</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">Our website and services are not directed at individuals under 18 years of age. Insurance policies for minors require a parent or legal guardian as the primary policyholder. We do not knowingly collect personal information from children without parental consent.</p>

      <h2 id="changes" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">9. Changes to This Policy</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">Material changes to this privacy policy will be communicated to policyholders via email and a prominent notice on our website. We encourage you to review this policy periodically. The "Last updated" date at the top of this page indicates when the policy was last revised.</p>

      <h2 id="contact-privacy" className="font-display font-bold text-[1.75rem] text-ink-900 mt-14 mb-4 pb-3 border-b border-ink-100">10. Contact Our Privacy Team</h2>
      <p className="text-body-md text-ink-600 leading-relaxed mb-4">For any privacy-related inquiries, requests, or complaints:</p>
      <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-xl p-5 my-6">
        <p className="text-body-md text-ink-700 font-medium">Privacy Officer</p>
        <p className="text-body-sm text-ink-600 mt-1">Email: privacy@statelife.com.pk</p>
        <p className="text-body-sm text-ink-600">Address: State Life Building, Dr. Ziauddin Ahmed Road, Karachi 75600</p>
        <p className="text-body-sm text-ink-600">Phone: 0800-700-900</p>
      </div>
    </LegalPageLayout>
  );
}
