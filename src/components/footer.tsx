import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/[0.96] text-white mt-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Genuine Stack
              </span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              We are a SaaS development agency specializing in custom software, APIs, and AI automation. 
              From MVP to enterprise solutions, we power your digital transformation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/software-development" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/api-development" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  API Development
                </Link>
              </li>
              <li>
                <Link href="/services/mvp-development" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  MVP Development
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-websites" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  Enterprise Websites
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services/end-to-end-development" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  End-to-End Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Get In Touch
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-neutral-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                hello@genuinestack.com
              </div>
              <div className="flex items-center text-neutral-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                +91 7753818253
              </div>
              <div className="flex items-center text-neutral-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                Lucknow, India
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-sm text-neutral-300">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-l-md text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-r-md hover:from-blue-600 hover:to-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-neutral-400 text-sm">
              © 2024 Genuine Stack. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-neutral-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-neutral-400 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          {/* Tech Stack Badge */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-neutral-400 text-sm">Built with</span>
            <div className="flex items-center space-x-1">
              <span className="text-blue-400 text-sm font-medium">Next.js</span>
              <span className="text-neutral-400">•</span>
              <span className="text-purple-400 text-sm font-medium">TypeScript</span>
              <span className="text-neutral-400">•</span>
              <span className="text-teal-400 text-sm font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 