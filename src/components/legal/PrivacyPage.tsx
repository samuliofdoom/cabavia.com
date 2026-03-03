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
              <h2 className="text-xl font-display font-semibold text-white">1. Information we collect</h2>
              <p className="mt-3">
                We collect information you provide directly, such as your name, email address, company, and any details you send when you
                contact us or request early access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">2. How we use information</h2>
              <p className="mt-3">
                We use collected information to operate and improve CabAvia, respond to requests, communicate product updates, and evaluate
                early customer fit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">3. Legal basis and retention</h2>
              <p className="mt-3">
                We process personal data under legitimate interest and consent, where applicable. We retain data only as long as needed for
                business operations, legal compliance, and security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">4. Data sharing</h2>
              <p className="mt-3">
                We do not sell personal data. We may share limited data with trusted service providers that support infrastructure,
                communications, analytics, and security under appropriate contractual safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">5. Security</h2>
              <p className="mt-3">
                We use technical and organizational measures designed to protect personal information. No method of transmission or storage is
                guaranteed to be fully secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">6. Your rights</h2>
              <p className="mt-3">
                Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. To
                exercise these rights, contact us at hello@cabavia.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">7. Contact</h2>
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
