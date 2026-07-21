"use client";

import PageShell from "@/components/PageShell";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <PageShell>
      <Nav />
      <main className="min-h-screen bg-matte text-pearl pt-32 pb-24 relative z-10 selection:bg-gold/30 selection:text-pearl">
        <div className="container-x max-w-4xl">
          <p className="eyebrow text-gold mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-10 text-white">
            Terms of Service
          </h1>

          <div className="space-y-8 text-pearl/70 text-sm md:text-base leading-relaxed font-light">
            <p>
              Last Updated: January 2026
            </p>
            <p>
              Welcome to Space Right Projects (\"SRP\"). These Terms of Service (\"Terms\") govern your use of our website 
              and our turnkey infrastructure services. By accessing or using our website, you agree to be bound by these 
              Terms and all applicable laws and regulations.
            </p>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">1. Use of the Site</h2>
              <p>
                You may use our site and submit contact information solely for legitimate business inquiries, scheduling 
                consultations, or reviewing our portfolio. You must not use the website to distribute spam, upload viruses, 
                or engage in unauthorized scanning, probing, or scraping of our intellectual assets.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">2. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, architectural drawings, graphics, logos, 
                case study descriptions, and code symbols, is the property of Space Right Projects and is protected by copyright, 
                trademark, and other intellectual property laws. You may not copy, reproduce, distribute, or modify any content 
                without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">3. Turnkey Services & Estimates</h2>
              <p>
                Any project estimates, quotations, or timelines provided via the website or consultation forms are non-binding. 
                Full commercial agreements are subject to separate physical contracts outlining clear scopes of work, billing milestones, 
                material specifications, and defect liability terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall Space Right Projects, its directors, employees, or contractors be liable for any direct, 
                indirect, incidental, special, or consequential damages arising out of your use or inability to use the site 
                or our turnkey infrastructure services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">5. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its 
                conflict of law principles. Any dispute arising under these terms shall be subject to the exclusive jurisdiction 
                of the courts located in Mumbai, India.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">6. Modification of Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your 
                responsibility to check this page periodically for changes. Your continued use of the website following the 
                posting of any changes constitutes acceptance of those modifications.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageShell>
  );
}
