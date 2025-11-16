"use client";

import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden" id="contact">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* CTA Top Section */}
      <div className="flex flex-col items-center pt-20 pb-10 text-center px-4">
        <h1 className="heading lg:max-w-[45vw] text-black">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-black-200 mt-4 md:mt-6 text-base max-w-[600px]">
          Reach out to us today and let's discuss how we can help you achieve your goals.
        </p>
      </div>

      {/* Main Footer Section */}
      <div
        className="relative backdrop-blur-sm py-14 px-6 md:px-20"
        style={{
          background: "linear-gradient(90deg, rgb(4, 7, 29) 0%, rgb(12, 14, 35) 100%)",
        }}
      >
        {/* Responsive Grid: 1 col → 2 col → 3 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-purple">SpecBadge</h2>
            <p className="leading-relaxed text-white/80">
              SpecBadge Services Pvt. Ltd. is a digital solutions company delivering high-performance
              web, mobile, and AI-powered applications. We combine strategy, design, and technology to
              build scalable digital products that empower businesses in the modern era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Contact Info</h3>

            <p className="text-white/70 mb-2">
              <span className="font-semibold">Address:</span> SpecBadge Services Pvt. Ltd.📍 Dewas, India
            </p>
            <p className="text-white/70 mb-2">
              <span className="font-semibold">Phone:</span> +91 8989138391
            </p>
            <p className="text-white/70 mb-4">
              <span className="font-semibold">Email:</span> info.specbadge@gmail.com
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/specbadge.exe"
                target="_blank"
                className="border p-2 rounded-full hover:bg-pink-600 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://wa.me/918989138391"
                target="_blank"
                className="border p-2 rounded-full hover:bg-green-500 transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/specbadge/"
                target="_blank"
                className="border p-2 rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 SpecBadge. All Rights Reserved.</p>

          <p className="mt-2 md:mt-0">
            <Link href="#" className="hover:text-white">Terms & Conditions</Link> |{" "}
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
