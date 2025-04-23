"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#288493 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Transforming Businesses with <span className="text-[#288493]">Innovative Technology</span> Solutions
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-[600px]">
                Comprehensive technology solutions provider specializing in customized ERP software, AI-based
                automation, and industry-specific BPO services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#288493] hover:bg-[#1e6b78] text-white"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link href="/contact">
                    Get Started
                    <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#288493] mr-2" />
                  <span className="text-sm font-medium">Customized ERP Systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#288493] mr-2" />
                  <span className="text-sm font-medium">AI-Based Automation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#288493] mr-2" />
                  <span className="text-sm font-medium">Solar BPO Services</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Technology Solutions"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#288493]/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#288493]/10 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
