import Footer from '../Footer';

export default function TermsPage() {
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

          <h1 className="mt-8 text-4xl sm:text-5xl font-display font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-white/60 text-sm">Last updated: March 3, 2026</p>

          <div className="mt-10 space-y-8 text-white/75 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-semibold text-white">1. Use of the site</h2>
              <p className="mt-3">
                By accessing CabAvia materials, you agree to use the site lawfully and not interfere with service availability, security, or
                normal operation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">2. Informational content</h2>
              <p className="mt-3">
                Product descriptions and roadmap items on this site are for informational purposes and may change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">3. Intellectual property</h2>
              <p className="mt-3">
                All trademarks, branding, text, and design elements on this site are owned by CabAvia or its licensors and may not be used
                without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">4. Disclaimer</h2>
              <p className="mt-3">
                This site is provided "as is" and "as available" without warranties of any kind, express or implied, to the fullest extent
                permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">5. Limitation of liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, CabAvia is not liable for indirect, incidental, special, consequential, or punitive
                damages arising from use of this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">6. Changes</h2>
              <p className="mt-3">
                We may update these Terms from time to time. Continued use of the site after updates means you accept the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white">7. Contact</h2>
              <p className="mt-3">
                Questions about these terms can be sent to <a className="text-cyber-blue hover:text-white transition-colors" href="mailto:hello@cabavia.com">hello@cabavia.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
