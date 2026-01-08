import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="animate-fade-in-up mb-12">
            <SectionHeading
              title="Privacy Policy"
              subtitle="Last updated: January 2026"
            />
          </div>

          <div className="neu rounded-3xl p-8 md:p-12 space-y-8 animate-fade-in-up">
            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Introduction</h2>
              <p className="text-body leading-relaxed">
                At The Brilliant Ideas, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Information We Collect</h2>
              <p className="text-body leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Personal Data: Name, email address, phone number, and other contact information you provide</li>
                <li>Business Information: Company name, project details, and service requirements</li>
                <li>Technical Data: IP address, browser type, device information, and usage data</li>
                <li>Communication Data: Correspondence through our contact forms, emails, or messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">How We Use Your Information</h2>
              <p className="text-body leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Communicate with you about projects, updates, and promotional content</li>
                <li>Process your requests and respond to inquiries</li>
                <li>Send you technical notices, updates, and security alerts</li>
                <li>Analyze usage patterns to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Data Security</h2>
              <p className="text-body leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Sharing Your Information</h2>
              <p className="text-body leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>With your consent or at your direction</li>
                <li>With service providers who assist us in operating our business</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-body leading-relaxed">
                We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Your Rights</h2>
              <p className="text-body leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Third-Party Links</h2>
              <p className="text-body leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Children's Privacy</h2>
              <p className="text-body leading-relaxed">
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Changes to This Privacy Policy</h2>
              <p className="text-body leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Contact Us</h2>
              <p className="text-body leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="neu-inset rounded-2xl p-6 space-y-2">
                <p className="text-body"><strong>Email:</strong> info@thebrilliantideas.com</p>
                <p className="text-body"><strong>Locations:</strong> Biratnagar & Kathmandu, Nepal</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
