import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="animate-fade-in-up mb-12">
            <SectionHeading
              title="Terms of Service"
              subtitle="Last updated: January 2026"
            />
          </div>

          <div className="neu rounded-3xl p-8 md:p-12 space-y-8 animate-fade-in-up">
            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Agreement to Terms</h2>
              <p className="text-body leading-relaxed">
                By accessing or using the services of The Brilliant Ideas, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Services</h2>
              <p className="text-body leading-relaxed mb-4">
                The Brilliant Ideas provides digital agency services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Web design and development</li>
                <li>Mobile application development</li>
                <li>Branding and graphic design</li>
                <li>Digital marketing and strategy</li>
                <li>UI/UX design services</li>
                <li>Software development and consultation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">User Responsibilities</h2>
              <p className="text-body leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Comply with all applicable local, state, national, and international laws</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Project Terms</h2>
              <p className="text-body leading-relaxed mb-4">
                For client projects:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Project scope, timeline, and deliverables will be defined in a separate agreement</li>
                <li>Payment terms will be outlined in the project proposal or contract</li>
                <li>Client must provide necessary materials and feedback in a timely manner</li>
                <li>Revisions are subject to the terms specified in the project agreement</li>
                <li>Final deliverables are provided upon full payment unless otherwise agreed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Intellectual Property</h2>
              <p className="text-body leading-relaxed mb-4">
                <strong>Our Work:</strong> All original designs, code, and materials created by The Brilliant Ideas remain our intellectual property until full payment is received. Upon payment, ownership rights transfer to the client as specified in the project agreement.
              </p>
              <p className="text-body leading-relaxed mb-4">
                <strong>Client Materials:</strong> Clients retain ownership of materials they provide. By providing materials, you grant us a license to use them for the purpose of completing your project.
              </p>
              <p className="text-body leading-relaxed">
                <strong>Portfolio Use:</strong> We reserve the right to display completed work in our portfolio and marketing materials unless otherwise specified in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Payment and Refunds</h2>
              <p className="text-body leading-relaxed mb-4">
                Payment terms:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Payment schedules are outlined in individual project agreements</li>
                <li>We typically require a deposit before starting work</li>
                <li>Invoices must be paid within the timeframe specified</li>
                <li>Late payments may result in project delays or suspension</li>
                <li>Refund policies are specified in individual project agreements</li>
                <li>Completed work or delivered milestones are generally non-refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Limitation of Liability</h2>
              <p className="text-body leading-relaxed">
                To the maximum extent permitted by law, The Brilliant Ideas shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Warranties and Disclaimers</h2>
              <p className="text-body leading-relaxed mb-4">
                We strive to deliver high-quality services, but:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Services are provided "as is" without warranties of any kind</li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>We are not responsible for third-party services or integrations</li>
                <li>Results may vary and are not guaranteed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Confidentiality</h2>
              <p className="text-body leading-relaxed">
                We respect the confidentiality of client information and will not disclose proprietary or confidential information to third parties without consent, except as required by law or as necessary to complete the project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Termination</h2>
              <p className="text-body leading-relaxed mb-4">
                Either party may terminate services under the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Written notice as specified in the project agreement</li>
                <li>Immediate termination for breach of terms</li>
                <li>Non-payment or violation of agreement terms</li>
                <li>Upon termination, client is responsible for payment of work completed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Dispute Resolution</h2>
              <p className="text-body leading-relaxed">
                Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through arbitration in Nepal in accordance with Nepalese law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Changes to Terms</h2>
              <p className="text-body leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Governing Law</h2>
              <p className="text-body leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Contact Information</h2>
              <p className="text-body leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="neu-inset rounded-2xl p-6 space-y-2">
                <p className="text-body"><strong>Email:</strong> info@thebrilliantideas.com</p>
                <p className="text-body"><strong>Locations:</strong> Biratnagar & Kathmandu, Nepal</p>
              </div>
            </section>

            <section className="pt-6 border-t border-gray-300">
              <p className="text-body text-sm text-gray-600 leading-relaxed">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
