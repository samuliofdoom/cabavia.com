import Footer from '../Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-body flex flex-col">
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center text-xs tracking-[0.18em] uppercase text-cyber-blue hover:text-white transition-colors"
          >
            Back to CabAvia
          </a>

          <h1 className="mt-8 text-4xl sm:text-5xl font-display font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-white/60 text-sm">Last updated: March 3, 2026</p>

          <div className="mt-10 space-y-8 text-white/75 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-semibold text-white">1. Controller and scope</h2>
              <p className="mt-3">
                CabAvia acts as the controller for personal data collected through this site. This policy explains how we process personal data
                when you visit our website, submit the waitlist form, or contact us directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">2. Information we collect</h2>
              <p className="mt-3">
                We collect information you provide directly, such as your name, email address, company, and any details you send when you
                contact us or request early access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">3. Processing purposes and legal bases</h2>
              <p className="mt-3">
                We process personal data for the following purposes and legal bases:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Waitlist and contact handling: consent and, where relevant, legitimate interest.</li>
                <li>Service reliability, abuse prevention, and security monitoring: legitimate interest.</li>
                <li>Compliance and legal record-keeping: legal obligation and legitimate interest.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">4. Retention periods</h2>
              <p className="mt-3">
                We retain personal data only as long as required for the purposes above. Typical periods are:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Waitlist and contact records: up to 24 months from last meaningful interaction.</li>
                <li>Operational security logs: generally 30 to 180 days unless needed longer for incident handling.</li>
                <li>Records needed for legal compliance: as required by applicable law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">5. Data sharing</h2>
              <p className="mt-3">
                We do not sell personal data. We may share limited data with trusted service providers that support infrastructure,
                communications, analytics, and security under appropriate contractual safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">6. Processors and subprocessors</h2>
              <p className="mt-3">
                We use third-party processors to operate CabAvia services. Current operational processors include Cloudflare (site hosting and
                delivery) and Formspree (waitlist form processing). We review processors for security and contractual data protection terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">7. International transfers</h2>
              <p className="mt-3">
                Depending on where providers process data, your information may be transferred outside the EEA. Where required, we use
                contractual and organizational safeguards, including standard contractual protections.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">8. Cookies and similar technologies</h2>
              <p className="mt-3">
                We use strictly necessary technical functionality for site operation. If optional analytics or marketing technologies are enabled
                later, we will request consent where required and update this policy accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">9. Security</h2>
              <p className="mt-3">
                We use technical and organizational measures designed to protect personal information. No method of transmission or storage is
                guaranteed to be fully secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">10. Your rights</h2>
              <p className="mt-3">
                Depending on applicable law, you may have rights to access, rectify, erase, restrict processing, object, and request portability
                of your personal data, and to withdraw consent where processing relies on consent. To exercise rights, contact us at
                <a className="text-cyber-blue hover:text-white transition-colors" href="mailto:hello@cabavia.com"> hello@cabavia.com</a>.
                You also have the right to lodge a complaint with your local supervisory authority. In Finland, this is the Office of the Data
                Protection Ombudsman (Tietosuojavaltuutetun toimisto).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">11. Contact</h2>
              <p className="mt-3">
                If you have questions about this policy, contact us at <a className="text-cyber-blue hover:text-white transition-colors" href="mailto:hello@cabavia.com">hello@cabavia.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
