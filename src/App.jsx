import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, ChevronDown, ChevronUp, CheckCircle2, BarChart2, Brain, Lightbulb, Workflow, LineChart, PieChart, Layers, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { useToast } from "./components/ui/use-toast";

const App = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("lean");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const leanServices = [
    {
      title: "Standardization",
      description: "Develop and implement standardized processes to ensure consistency and quality across operations.",
      icon: <Layers className="h-10 w-10 text-primary" />,
    },
    {
      title: "Problem Solving",
      description: "Systematic approaches to identify root causes and implement effective solutions for operational challenges.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
    {
      title: "Capacity Management",
      description: "Optimize resource allocation and workflow to maximize productivity and efficiency.",
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
    },
    {
      title: "Performance Management",
      description: "Track, analyze, and improve key performance indicators to drive continuous improvement.",
      icon: <LineChart className="h-10 w-10 text-primary" />,
    },
    {
      title: "Workflow Optimization",
      description: "Streamline processes to eliminate waste and improve throughput in your operations.",
      icon: <Workflow className="h-10 w-10 text-primary" />,
    },
    {
      title: "Coaching",
      description: "Personalized guidance to help your team develop lean thinking and implement continuous improvement practices.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Metrics & Analytics",
      description: "Develop meaningful metrics and analytics to drive data-based decision making.",
      icon: <PieChart className="h-10 w-10 text-primary" />,
    },
  ];

  const aiServices = [
    {
      title: "AI Strategy Consulting",
      description: "Develop a comprehensive AI strategy tailored to your business needs and objectives.",
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "Process Automation",
      description: "Implement AI-powered automation to streamline repetitive tasks and improve efficiency.",
      icon: <Zap className="h-10 w-10 text-primary" />,
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to forecast trends, anticipate challenges, and make data-driven decisions.",
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
    },
    {
      title: "Custom AI Solutions",
      description: "Develop bespoke AI applications designed to address your specific business challenges.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
    {
      title: "AI Coaching",
      description: "Personalized guidance to help your team understand and effectively implement AI technologies.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ];

  const specializations = [
    "Lean Office & Process Optimization – Improving business workflows and eliminating inefficiencies",
    "Digital Transformation & Smart Automation – Partnering with experts to implement AI-driven solutions",
    "AI Integration for Business – Supporting organizations in leveraging AI for better decision-making and operational improvements"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* WhatsApp Button */}
      <a 
        href="#contact" 
        className="whatsapp-button"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </motion.div>
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">FP</span>
            </div>
            <h1 className="text-xl font-bold">Lean Office & AI Solutions</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button className="md:hidden">Menu</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Business with Lean Principles & AI Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I help organizations optimize operations, solve complex problems, and leverage artificial intelligence to achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#services">
                <Button size="lg" className="text-lg">
                  Explore Services
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="text-lg">
                  Contact Me
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Optimize Your Business Operations?</h2>
              <p className="text-lg text-white/90">Schedule a free 30-minute consultation to discuss your challenges.</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact">
                <Button size="lg" variant="secondary" className="text-primary font-bold px-8 py-6 text-lg">
                  Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to optimize your operations and leverage cutting-edge technology.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeSection === "lean"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveSection("lean")}
              >
                Lean Office Services
              </button>
              <button
                type="button"
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeSection === "ai"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveSection("ai")}
              >
                AI Services
              </button>
            </div>
          </div>

          {/* Lean Office Services */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeSection === "lean" ? 1 : 0,
              display: activeSection === "lean" ? "block" : "none"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leanServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Services */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeSection === "ai" ? 1 : 0,
              display: activeSection === "ai" ? "block" : "none"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-xl text-gray-600">
                Dedicated to helping businesses achieve operational excellence and technological innovation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img 
                    src="https://storage.googleapis.com/hostinger-horizons-assets-prod/9b8cd594-31ba-4d47-818e-24a0faab1d26/58181ff883fedb0cbf38697ec481dd30.jpg" 
                    alt="Fikret Pehlivan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Fikret Pehlivan</h3>
                  <p className="text-gray-600 mb-4">
                    With over 12 years of experience in Lean Office, Process Optimization, and Business Efficiency, I have worked with global organizations such as Constellium and UBS Switzerland, helping them streamline operations and improve business performance.
                  </p>
                  <p className="text-gray-600">
                    While my core expertise lies in Lean methodologies and operational efficiency, I collaborate with specialized partners to deliver Automation and AI-driven solutions tailored to business needs. Together, we help organizations optimize workflows, reduce inefficiencies, and implement smart digital transformations.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">I specialize in:</h3>
              <ul className="space-y-3 mb-6">
                {specializations.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-gray-600">
                By combining my deep industry experience with the technical expertise of my business partners, I ensure companies get practical, impactful, and scalable solutions that drive measurable success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Why Choose Me</h3>
              <ul className="space-y-3">
                {[
                  "Experienced professional with expertise in both lean principles and AI technologies",
                  "Customized solutions tailored to your specific business needs",
                  "Proven track record of delivering measurable results",
                  "Holistic approach that addresses both operational and technological challenges",
                  "Ongoing support to ensure sustainable improvement"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Get in touch to discuss how I can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">contact@leanprocessai.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-xl font-bold mb-3">Book a Free Consultation</h4>
                <p className="text-gray-600 mb-4">
                  Not sure where to start? Schedule a free 30-minute consultation to discuss your business challenges and explore potential solutions.
                </p>
                <Button className="w-full">
                  Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about my services and approach.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is Lean Office methodology?",
                answer: "Lean Office methodology applies lean principles to administrative and office processes. It focuses on eliminating waste, standardizing workflows, and continuously improving operations to increase efficiency and productivity in non-manufacturing environments."
              },
              {
                question: "How can AI benefit my business operations?",
                answer: "AI can benefit your business by automating repetitive tasks, providing data-driven insights, optimizing resource allocation, improving decision-making, enhancing customer experiences, and identifying patterns and trends that humans might miss."
              },
              {
                question: "How long does it typically take to see results?",
                answer: "The timeline for seeing results varies depending on the scope and complexity of the project. Some improvements can be implemented and show results within weeks, while more comprehensive transformations may take several months to fully realize benefits."
              },
              {
                question: "Do you offer ongoing support after implementation?",
                answer: "Yes, I offer ongoing support and maintenance services to ensure the sustainability of improvements and help you adapt to changing business needs. I can provide training, monitoring, and continuous improvement support."
              }
            ].map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business Operations Today</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step toward optimizing your business processes and leveraging AI for sustainable growth.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a href="#contact">
              <Button size="lg" variant="secondary" className="text-primary font-bold px-8 py-6 text-lg">
                Start Your Transformation Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
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
                <h3 className="text-xl font-bold">Fikret Pehlivan</h3>
              </div>
              <p className="text-gray-400">
                Transforming businesses through lean principles and artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
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
            <p>&copy; {new Date().getFullYear()} Lean Office & AI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white px-4 pt-2 pb-4 rounded-b-lg shadow-sm"
        >
          <p className="text-gray-600">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default App;