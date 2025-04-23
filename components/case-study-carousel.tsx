"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Custom ERP Implementation for Manufacturing Company",
    description:
      "How we helped a manufacturing company streamline operations and increase efficiency by 35% with a custom ERP solution.",
    image: "/placeholder.svg?height=400&width=600",
    category: "ERP Systems",
    link: "/resources/case-studies/manufacturing-erp",
  },
  {
    id: 2,
    title: "AI-Powered Customer Service Automation",
    description:
      "Implementing AI chatbots and automation tools that reduced response times by 60% and improved customer satisfaction.",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI Automation",
    link: "/resources/case-studies/ai-customer-service",
  },
  {
    id: 3,
    title: "Solar Installation Process Optimization",
    description:
      "How our BPO services helped a solar company increase installation capacity by 45% through streamlined pre-installation processes.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Solar BPO",
    link: "/resources/case-studies/solar-process-optimization",
  },
  {
    id: 4,
    title: "E-commerce Platform Development",
    description: "Building a scalable e-commerce platform that increased online sales by 120% in the first year.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Full Stack Development",
    link: "/resources/case-studies/ecommerce-platform",
  },
]

export function CaseStudyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const activeCase = caseStudies[activeIndex]

  return (
    <div className="relative">
      <Card className="overflow-hidden bg-white dark:bg-gray-900 shadow-lg">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={activeCase.image || "/placeholder.svg"}
                alt={activeCase.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#288493]">{activeCase.category}</Badge>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{activeCase.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{activeCase.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        activeIndex === index ? "w-8 bg-[#288493]" : "w-2 bg-gray-300 dark:bg-gray-700"
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to case study ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-[#288493] hover:text-[#1e6b78] hover:bg-transparent"
                >
                  <Link href={activeCase.link} className="flex items-center">
                    Read case study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={handlePrev}
          aria-label="Previous case study"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={handleNext}
          aria-label="Next case study"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
