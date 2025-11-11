"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
})

const Footer = () => {
  return (
    <footer
      className="relative w-full text-white overflow-hidden"
      id="contact"
    >
      {/* Background grid from first footer */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Top section - Call to action */}
      <div className="flex flex-col items-center pt-20 pb-10 text-center px-4 md:px-0">
        <h1 className="heading lg:max-w-[45vw] text-black">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-black-200 md:mt-6 mt-4 text-base max-w-[600px]">
          Reach out to us today and let&apos;s discuss how we can help you achieve
          your goals.
        </p>
      </div>

      {/* Middle section - Brand, Hours, Links, Contact */}
        <div
          className="relative backdrop-blur-sm py-10 px-6 md:px-20"
          style={{
            background: "linear-gradient(90deg, rgb(4, 7, 29) 0%, rgb(12, 14, 35) 100%)",
          }}
        >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-purple">
              SpecBadge
            </h2>
            <p className="leading-relaxed text-white/80">
              Zussioberry brings you the finest range of natural juices,
              milkshakes, and more — made fresh with love and quality ingredients.
              Taste the difference in every sip!
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Working Hours
            </h3>
            <ul className="space-y-1 text-white/70">
              <li>Mon: 08:00 AM - 10:00 PM</li>
              <li>Tue: 08:00 AM - 10:00 PM</li>
              <li>Wed: 08:00 AM - 10:00 PM</li>
              <li>Thu: 08:00 AM - 10:00 PM</li>
              <li>Fri: 08:00 AM - 10:00 PM</li>
              <li>Sat: 09:00 AM - 09:00 PM</li>
              <li className="text-purple">Sun: Closed</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-1 text-white/70">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#about">About Us</Link>
              </li>
              <li>
                <Link href="#Services">Services</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="_blank">Career</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Contact Info
            </h3>
            <p className="mb-1 text-white/70">Address: Mumbai, India</p>
            <p className="mb-1 text-white/70">Phone No.: +91 98765 43210</p>
            <p className="text-white/70">Email: contact@zussioberry.com</p>

            <div className="flex space-x-4 mt-5">
              <a
                href="#"
                className="border p-2 rounded-full hover:bg-green-500 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="border p-2 rounded-full hover:bg-green-500 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="border p-2 rounded-full hover:bg-green-500 transition-all duration-300"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 Zussioberry. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            <Link href="#">Terms &amp; Conditions</Link> |{" "}
            <Link href="#">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
