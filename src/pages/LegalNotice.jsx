import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Legal Notice | Pehlivan Lean Process AI</title>
        <meta name="description" content="Legal notice for Pehlivan Lean Process AI." />
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
            <h1 className="text-4xl font-bold mb-12 text-center">Legal Notice</h1>

            <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Site Operator</h2>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Name / Company:</p>
                  <p>Fikret Pehlivan</p>
                  <p>Pehlivan Lean Process AI – Lean Office & AI Solutions</p>

                  <p className="font-semibold mt-4">Address:</p>
                  <p>Gussstrasse 50</p>
                  <p>8180 Bülach</p>
                  <p>Switzerland</p>

                  <p className="font-semibold mt-4">Contact:</p>
                  <p>Email: contact@leanprocessai.com</p>
                  <p>Phone: +41 79 535 41 23</p>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div>
                <h2 className="text-2xl font-bold mb-4">Purpose of this Website</h2>
                <p className="text-gray-700">
                  This website provides information about consulting services in the areas of Lean Office, Process Optimization, Digital Transformation and AI-related advisory.
                </p>
              </div>

              <hr className="border-gray-200" />

              <div>
                <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The content of this website has been created with the greatest possible care. However, I do not assume any liability for the correctness, completeness, or up-to-dateness of the content.
                  </p>
                  <p>
                    This website contains links to external third-party websites, over whose contents I have no influence. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. At the time of linking, the linked pages were checked for possible legal violations. Illegal content was not recognisable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of an infringement. If I become aware of any legal infringements, I will remove such links immediately.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div>
                <h2 className="text-2xl font-bold mb-4">Copyright</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The content and works on these pages created by the site operator are subject to copyright law. Reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.
                  </p>
                  <p>
                    Insofar as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular, content of third parties is marked as such. Should you nevertheless become aware of a copyright infringement, please inform me accordingly. Upon becoming aware of any legal infringements, I will remove such content immediately.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div>
                <h2 className="text-2xl font-bold mb-4">Place of Jurisdiction</h2>
                <p className="text-gray-700">
                  Unless mandatory statutory provisions apply, the exclusive place of jurisdiction is Bülach, Switzerland.
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

export default LegalNotice;