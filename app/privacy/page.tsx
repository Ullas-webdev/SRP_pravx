"use client";

import PageShell from "@/components/PageShell";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <PageShell>
      <Nav />
      <main className="min-h-screen bg-matte text-pearl pt-32 pb-24 relative z-10 selection:bg-gold/30 selection:text-pearl">
        <div className="container-x max-w-4xl">
          <p className="eyebrow text-gold mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-10 text-white">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-pearl/70 text-sm md:text-base leading-relaxed font-light">
            <p>
              Last Updated: January 2026
            </p>
            <p>
              Space Right Projects (\"SRP\", \"we\", \"us\", or \"our\") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
              including any other media form, media channel, mobile website, or mobile application related or connected thereto.
            </p>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">1. Information We Collect</h2>
              <p className="mb-3">
                We may collect information about you in a variety of ways. The information we may collect on the website includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, 
                  and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily 
                  give to us when you contact us on our website.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP 
                  address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after 
                  accessing the website.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">2. Use of Your Information</h2>
              <p className="mb-3">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, 
                we may use information collected about you via the website to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to customer service requests and consultation inquiries.</li>
                <li>Deliver quotation updates and milestone project tracking.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
                <li>Prevent fraudulent transactions and monitor against theft.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">3. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed to comply with 
                legal obligations, to protect our rights, or in connection with third-party service providers executing project management tools 
                or estimation software on our behalf. We never sell your personal information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">4. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have 
                taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no 
                security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception 
                or other type of misuse.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">5. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at: 
                <a href="mailto:info@spacerightprojects.com" className="text-gold ml-1 hover:underline">info@spacerightprojects.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageShell>
  );
}
