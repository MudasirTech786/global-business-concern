"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    id: 1,
    content:
      "Global Business Concern transformed our operations with their custom ERP solution. We've seen a 30% increase in efficiency and significant cost savings.",
    author: "Sarah Johnson",
    position: "CTO, TechSolutions Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The AI automation services provided by GBC have revolutionized our customer service. Response times are down by 60% and customer satisfaction is at an all-time high.",
    author: "Michael Chen",
    position: "Operations Director, Innovate Corp",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "As a solar installation company, partnering with GBC for our BPO needs was a game-changer. Their expertise in solar engineering has streamlined our pre-installation processes.",
    author: "David Rodriguez",
    position: "CEO, SunPower Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    content:
      "The digital marketing strategy implemented by GBC helped us increase our online presence and lead generation by over 45% in just three months.",
    author: "Emily Thompson",
    position: "Marketing Director, GrowthFirst",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const isMobile = useMobile()

  const itemsPerPage = isMobile ? 1 : 2
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPages)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, totalPages])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % totalPages)
  }

  const visibleTestimonials = testimonials.slice(activeIndex * itemsPerPage, activeIndex * itemsPerPage + itemsPerPage)

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {visibleTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="w-full flex-1 bg-white dark:bg-gray-900 shadow-md">
            <CardContent className="p-6">
              <Quote className="h-10 w-10 text-[#288493]/20 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center space-x-2">
        <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous testimonial">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex space-x-1 items-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-6 bg-[#288493]" : "w-2 bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => {
                setAutoplay(false)
                setActiveIndex(index)
              }}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
