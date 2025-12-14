import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Pehlivan Lean Process AI</title>
        <meta name="description" content="Privacy policy for Pehlivan Lean Process AI." />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">FP</span>
            </div>
            <h1 className="text-xl font-bold">Pehlivan Lean Process AI</h1>
          </div>
          <a href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </a>
        </div>
      </header>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-12 text-center">Privacy Policy</h1>

            <div className="bg-white rounded-lg shadow-md p-8 space-y-8 text-gray-700">
              {/* 1. Controller */}
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Controller</h2>
                <p className="mb-2">The controller responsible for data processing on this website is:</p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold">Fikret Pehlivan</p>
                  <p>LeanProcessAI – Lean Office & AI Solutions</p>
                  <p>Gussstrasse 50</p>
                  <p>8180 Bülach</p>
                  <p>Switzerland</p>
                  <p className="mt-2">Email: contact@leanprocessai.com</p>
                  <p>Phone: +41 79 535 41 23</p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* 2. Scope and Applicable Law */}
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Scope and Applicable Law</h2>
                <p className="mb-3">
                  This Privacy Policy informs you about the processing of personal data when you visit my website and when you use my services.
                </p>
                <p>
                  I process personal data in accordance with the requirements of the <strong>Swiss Federal Act on Data Protection (FADP)</strong> and, where applicable, the <strong>EU General Data Protection Regulation (GDPR)</strong> – in particular if I offer services to individuals in the EU/EEA or otherwise fall within the territorial scope of the GDPR.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* 3. Collection and Processing */}
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Collection and Processing of Personal Data</h2>

                {/* 3.1 */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">3.1 Website Visit (Server Log Files)</h3>
                  <p className="mb-3">
                    When you visit this website, the hosting provider (e.g. Hostinger or its subcontractors) automatically collects and stores certain information in so‑called server log files that your browser automatically transmits. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
                    <li>IP address of the requesting device (in anonymised or shortened form where possible)</li>
                    <li>Date and time of access</li>
                    <li>Visited page / file name / URL</li>
                    <li>Referrer URL (website from which you visited)</li>
                    <li>Browser type and version</li>
                    <li>Operating system used</li>
                    <li>Host name of the accessing device</li>
                  </ul>
                  <p className="font-semibold mb-2">Purpose:</p>
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
                    <li>Ensuring a stable and secure connection to the website</li>
                    <li>Ensuring comfortable use of the website</li>
                    <li>Evaluation of system security and stability</li>
                    <li>Error analysis</li>
                  </ul>
                  <p className="font-semibold mb-2">Legal basis (FADP):</p>
                  <p className="mb-4">Processing is based on my <strong>overriding private interest</strong> in providing a secure and stable website.</p>
                  <p className="font-semibold mb-2">Legal basis (GDPR, where applicable):</p>
                  <p className="mb-4">Art. 6(1)(f) GDPR (legitimate interest). My legitimate interest derives from the purposes listed above.</p>
                  <p className="text-sm">Log data is ordinarily stored for a limited period by the hosting provider and then automatically deleted, unless longer storage is necessary (e.g. for evidence in case of misuse).</p>
                </div>

                {/* 3.2 */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">3.2 Contact Form and Email Contact</h3>
                  <p className="mb-3">
                    If you contact me via contact form on the website or by email, I process the data you provide:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Your message</li>
                    <li>Optional: company name, phone number or other information you provide voluntarily</li>
                  </ul>
                  <p className="font-semibold mb-2">Purpose:</p>
                  <p className="mb-4">Processing and responding to your inquiry as well as possible follow-up questions.</p>
                  <p className="font-semibold mb-2">Legal basis (FADP):</p>
                  <p className="mb-4">Processing is based on my private interest in communicating with (potential) clients and interested parties.</p>
                  <p className="font-semibold mb-2">Legal basis (GDPR, where applicable):</p>
                  <p className="mb-4">Art. 6(1)(b) GDPR (pre‑contractual measures or performance of a contract), if your request relates to my services; Art. 6(1)(f) GDPR (legitimate interest) for general inquiries.</p>
                  <p className="text-sm">The data will be stored only as long as necessary to process your request or as required by statutory retention obligations.</p>
                </div>

                {/* 3.3 */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">3.3 Booking a Free Consultation</h3>
                  <p className="mb-3">
                    If you book a free consultation (e.g. via contact form or email), I process:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Preferred date/time</li>
                    <li>Information about your company or project (if provided)</li>
                  </ul>
                  <p className="font-semibold mb-2">Purpose:</p>
                  <p className="mb-4">Scheduling and conducting the consultation and preparing it.</p>
                  <p className="font-semibold mb-2">Legal basis (FADP):</p>
                  <p className="mb-4">Processing is necessary for pre‑contractual measures and based on my private interest in acquiring and supporting clients.</p>
                  <p className="font-semibold mb-2">Legal basis (GDPR, where applicable):</p>
                  <p className="mb-4">Art. 6(1)(b) GDPR (pre‑contractual measures).</p>
                  <p className="text-sm">If I use an external scheduling or video-conferencing provider (e.g. Microsoft Teams, Zoom, Calendly, etc.), that provider may process personal data as an independent controller or as a processor. In such cases, the provider's own privacy policy also applies.</p>
                </div>

                {/* 3.4 */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">3.4 Performance of Services and Business Relationship</h3>
                  <p className="mb-3">
                    If you engage me for consulting services, I process personal data of you and your organization's contact persons. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
                    <li>Name, position, and role</li>
                    <li>Business contact details (email, phone, address)</li>
                    <li>Contract data (offers, contracts, billing information, VAT number)</li>
                    <li>Project‑related information and communication content</li>
                  </ul>
                  <p className="font-semibold mb-2">Purpose:</p>
                  <p className="mb-4">Planning, performing, documenting, and billing consulting services, as well as maintaining the client relationship and fulfilling legal obligations (e.g. accounting and tax requirements).</p>
                  <p className="font-semibold mb-2">Legal basis (FADP):</p>
                  <p className="mb-4">Processing is necessary for the performance of a contract or pre‑contractual measures and based on my overriding private interest in professional client and business management.</p>
                  <p className="font-semibold mb-2">Legal basis (GDPR, where applicable):</p>
                  <p className="mb-4">Art. 6(1)(b) GDPR (performance of a contract), Art. 6(1)(c) GDPR (fulfilment of legal obligations), Art. 6(1)(f) GDPR (legitimate interest in proper business administration).</p>
                  <p className="text-sm">Personal data is generally stored for the duration of the contractual relationship and thereafter only as long as statutory retention periods (e.g. tax law) require.</p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* 4. Cookies */}
              <div>
                <h2 className="text-2xl font-bold mb-4">4. Use of Cookies and Similar Technologies</h2>
                <p className="mb-3">
                  At present, this website is a simple informational site. It does not intentionally use non‑essential cookies or tracking technologies beyond what is technically necessary for hosting and security.
                </p>
                <p>
                  If in the future I use additional tools (e.g. web analytics such as Google Analytics or Matomo, marketing tools, or social media plugins), I will:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mt-3">
                  <li>Update this Privacy Policy accordingly</li>
                  <li>Inform you transparently about the type, scope, and purpose of data processing</li>
                  <li>Obtain consent where legally required (e.g. via cookie banner / consent management)</li>
                </ul>
              </div>

              <hr className="border-gray-200" />

              {/* 5. Service Providers */}
              <div>
                <h2 className="text-2xl font-bold mb-4">5. Cooperation with Service Providers and Partners</h2>
                <p className="mb-3">
                  For hosting and operation of this website, and for the implementation of automation and AI‑related projects, I may cooperate with external service providers and specialized partners.
                </p>
                <p className="mb-3">These may include, for example:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
                  <li>Hosting providers and IT service providers</li>
                  <li>Providers of collaboration or communication tools (e.g. email, video conferencing)</li>
                  <li>Providers of AI or automation platforms and software</li>
                </ul>
                <p className="mb-3">
                  Where such partners process personal data on my behalf, they act as <strong>data processors</strong> and are contractually obliged to process data only in accordance with my instructions and to ensure appropriate data security.
                </p>
                <p>
                  Data will only be disclosed to third parties if:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mt-3">
                  <li>You have given your explicit consent, or</li>
                  <li>It is necessary for the performance of a contract or for pre‑contractual measures, or</li>
                  <li>There is a legal obligation, or</li>
                  <li>I have an overriding private or legitimate interest and no overriding conflicting interests are apparent.</li>
                </ul>
              </div>

              <hr className="border-gray-200" />

              {/* 6. Data Transfers */}
              <div>
                <h2 className="text-2xl font-bold mb-4">6. Data Transfers Abroad</h2>
                <p>
                  In principle, I process personal data in Switzerland and the EU/EEA. If, in individual cases, data is transferred to a country <strong>without an adequate level of data protection</strong> (according to the Swiss Federal Council or the European Commission), I ensure that appropriate safeguards exist (e.g. standard contractual clauses, additional contractual and technical measures), or that an official exemption applies (e.g. your explicit consent or necessity for contract performance).
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* 7. Data Security */}
              <div>
                <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
                <p className="mb-3">
                  I take appropriate technical and organisational measures to protect personal data against unauthorised access, misuse, loss, or destruction. These measures are adapted and improved in line with technological development and risk.
                </p>
                <p>
                  However, please note that data transmission via the internet (e.g. email communication) may be subject to security gaps. Complete protection of data against access by third parties cannot be guaranteed.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* 8. Retention Periods */}
              <div>
                <h2 className="text-2xl font-bold mb-4">8. Retention Periods</h2>
                <p>
                  I process and store personal data only for as long as necessary for the purpose of processing or for as long as there is a legal basis (e.g. statutory retention periods under commercial or tax law). When the purpose no longer applies and there is no legal obligation to retain the data, the data will be deleted or anonymised in accordance with the applicable regulations.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* 9. Your Rights */}
              <div>
                <h2 className="text-2xl font-bold mb-4">9. Your Rights (Switzerland & GDPR)</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">9.1 Rights under Swiss law</h3>
                  <p className="mb-3">Under the FADP, you have in particular the right to:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Request information on whether personal data about you is being processed and which data (right of access)</li>
                    <li>Request correction of inaccurate personal data</li>
                    <li>Request deletion or anonymisation of personal data, provided there is no legal obligation or overriding interest in its retention</li>
                    <li>Object to data processing in justified cases</li>
                    <li>Request the handing over or transfer of certain personal data (data portability), where applicable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">9.2 Additional rights under the GDPR (if applicable)</h3>
                  <p className="mb-3">If the GDPR applies to you, you also have the following rights:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                    <li>Right to restriction of processing (Art. 18 GDPR)</li>
                    <li>Right to data portability (Art. 20 GDPR)</li>
                    <li>Right to object to processing based on legitimate interests (Art. 21 GDPR)</li>
                    <li>Right to withdraw consent at any time with effect for the future (Art. 7(3) GDPR), if processing is based on consent</li>
                  </ul>
                  <p className="mb-3">
                    To exercise your rights, you can contact me at any time using the contact details above. To prevent misuse, I may require proof of identity.
                  </p>
                  <p>
                    You also have the right to lodge a complaint with a competent data protection authority. In Switzerland, this is in particular the <strong>Federal Data Protection and Information Commissioner (FDPIC)</strong>. For the EU/EEA area, the competent data protection authority is usually that of your place of residence or workplace.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* 10. Obligation to Provide Data */}
              <div>
                <h2 className="text-2xl font-bold mb-4">10. Obligation to Provide Data</h2>
                <p className="mb-3">
                  When you use this website purely for information, you are not obliged to actively provide personal data. However, some technical data is automatically processed (see server log files) in order to display the website.
                </p>
                <p>
                  If you wish to contact me or use my services, certain data (e.g. contact details, billing information) is necessary. Without this data, I may not be able to answer your inquiry or enter into/perform a contract.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* 11. Changes */}
              <div>
                <h2 className="text-2xl font-bold mb-4">11. Changes to this Privacy Policy</h2>
                <p className="mb-4">
                  I reserve the right to adapt this Privacy Policy at any time in order to ensure that it always complies with current legal requirements or to reflect changes to my data processing (e.g. the introduction of new tools or services).
                </p>
                <p className="text-sm italic">
                  The current version of the Privacy Policy is published on this website.
                </p>
                <p className="text-sm mt-4">
                  <strong>Last updated: 14 December 2025</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">FP</span>
                </div>
                <h3 className="text-xl font-bold">Pehlivan Lean Process AI</h3>
              </div>
              <p className="text-gray-400">
                Transforming businesses through lean principles and artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/legal-notice" className="text-gray-400 hover:text-white transition-colors">Legal Notice</a></li>
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pehlivan Lean Process AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;