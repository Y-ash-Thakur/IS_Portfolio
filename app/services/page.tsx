"use client";

import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      icon: "🌐",
      title: "Web Solutions",
      description:
        "Build a strong online foundation with responsive, engaging, and high-performing websites designed for growth and visibility.",
      offerTitle: "We Offer:",
      items: [
        "Corporate & Business Websites",
        "Portfolio & Personal Sites",
        "E-Commerce Stores (B2B & B2C)",
        "Landing Pages & Product Microsites",
        "Educational / Institutional Websites",
        "Portfolio & Blogging Platforms",
      ],
      addOn: "Add-On Capabilities:",
      addOnItems:
        "UI/UX Design (Figma, Prototyping) · SEO Setup · Hosting & Domain · Content Writing · Website Maintenance",
    },
    {
      icon: "⚙️",
      title: "Web & SaaS Development",
      description:
        "We build scalable SaaS and enterprise-level web platforms tailored for functionality, performance, and automation.",
      offerTitle: "We Develop:",
      items: [
        "SaaS Platforms (CRM, ERP, HRM, LMS, etc.)",
        "Custom Web Portals & Admin Dashboards",
        "Business Management Tools",
        "Subscription-Based Web Applications",
        "Multi-Tenant Cloud Solutions",
      ],
      techStack:
        "Core Stack: React, Node.js, Next.js, Python, Firebase, MongoDB, AWS, and more.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Deliver seamless mobile experiences with custom Android, iOS, and cross-platform applications designed for user engagement and performance.",
      offerTitle: "We Build Apps For:",
      items: [
        "E-Commerce & Quick Commerce",
        "EdTech & E-Learning",
        "HealthTech & Fitness",
        "FinTech & Investment",
        "Travel & Booking Platforms",
        "Food Delivery & Restaurant Apps",
        "Social Media & Community Apps",
        "Productivity & Utility Tools",
      ],
      techStack:
        "Tech Stack: Flutter · React Native · Kotlin · Swift · Firebase · API Integration",
    },
    {
      icon: "🔗",
      title: "API & Backend Development",
      description:
        "Power your applications with fast, secure, and scalable backend systems. We specialize in designing robust APIs and cloud architectures that connect everything seamlessly.",
      offerTitle: "Our Expertise:",
      items: [
        "Custom API Development (REST, GraphQL)",
        "Microservices & Cloud Architecture",
        "Database Design & Management",
        "Authentication & Security Systems",
        "Third-Party API Integration (Payment, Maps, AI, etc.)",
        "Performance Optimization & Scalability",
      ],
      techStack:
        "Supported Environments: AWS · Google Cloud · Azure · Node.js · Django · Express · MySQL · MongoDB",
    },
    {
      icon: "🧩",
      title: "Add-On & Support Services",
      description:
        "We go beyond development to ensure your business stays online, updated, and optimized for performance.",
      offerTitle: "We Provide:",
      items: [
        "Hosting & Domain Management",
        "SEO Setup & On-Page Optimization",
        "Content Writing & Blogging",
        "Website Maintenance & Updates",
        "Performance Monitoring & Optimization",
        "Bug Fixing & Technical Support",
        "Version Upgrades & Security Patches",
      ],
    },
    {
      icon: "📣",
      title: "Digital Media & Marketing",
      description:
        "Accelerate your brand growth with result-oriented digital marketing campaigns and creative storytelling.",
      offerTitle: "Our Services Include:",
      items: [
        "Social Media Marketing (SMM)",
        "Digital Media Marketing (DMM)",
        "Search Engine Optimization (SEO)",
        "Paid Ads (Google, Meta, LinkedIn)",
        "Branding & Visual Design",
        "Creative Content Strategy",
        "Email & Performance Marketing",
        "Reputation Management",
      ],
      techStack:
        "Platforms We Manage: Instagram · LinkedIn · Google · X (Twitter) · YouTube · Facebook",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, x: -20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Enhance your digital presence and performance with our creative,
            strategic, and tech-driven solutions designed to meet diverse
            business needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              initial="hidden"
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 md:p-10"
            >
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{service.icon}</span>
                  {service.title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>

              {/* Items List */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-lg sm:text-xl font-semibold text-gray-800 mb-4"
                >
                  {service.offerTitle}
                </motion.h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: itemIndex * 0.08,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-3 group"
                    >
                      <span className="text-purple-600 mt-1.5 group-hover:text-purple-700 transition-colors flex-shrink-0">
                        •
                      </span>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors text-base sm:text-lg">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Add-On Capabilities */}
              {service.addOn && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-xl font-semibold text-gray-800 mb-3"
                  >
                    {service.addOn}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-gray-600 text-base sm:text-lg leading-relaxed"
                  >
                    {service.addOnItems}
                  </motion.p>
                </motion.div>
              )}

              {/* Tech Stack */}
              {service.techStack && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium"
                  >
                    {service.techStack}
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20 mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Let&apos;s build something amazing together 🚀
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
