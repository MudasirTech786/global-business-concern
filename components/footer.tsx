import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.svg" alt="GBC Logo" width={40} height={40} className="h-10 w-10" />
              <span className="font-bold text-xl text-white">GBC</span>
            </div>
            <p className="text-gray-400 mb-4">
              Comprehensive technology solutions provider specializing in customized ERP business software, AI-based
              automation services, and industry-specific BPO services.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#288493]">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#288493]">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#288493]">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#288493]">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/erp-systems" className="text-gray-400 hover:text-[#288493]">
                  ERP Systems
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-gray-400 hover:text-[#288493]">
                  AI-Based Automation
                </Link>
              </li>
              <li>
                <Link href="/services/solar-bpo" className="text-gray-400 hover:text-[#288493]">
                  Solar BPO Services
                </Link>
              </li>
              <li>
                <Link href="/services/full-stack-development" className="text-gray-400 hover:text-[#288493]">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-gray-400 hover:text-[#288493]">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#288493]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-[#288493]">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-gray-400 hover:text-[#288493]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="text-gray-400 hover:text-[#288493]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#288493]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#288493] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Los Angeles, California(CA), 90001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#288493]" />
                <span className="text-gray-400">(213) 974-3211</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#288493]" />
                <span className="text-gray-400">info@globalbusinessconcern.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Global Business Concern. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-[#288493] text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-[#288493] text-sm">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-[#288493] text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
