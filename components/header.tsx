"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const mainNavItems = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "About", href: "/about" },
  { title: "Resources", href: "/resources" },
  { title: "Contact", href: "/contact" },
]

const serviceDropdownItems = [
  { title: "Full Stack Development", href: "/services/full-stack-development" },
  { title: "Mobile App Development", href: "/services/mobile-app-development" },
  { title: "WordPress Development", href: "/services/wordpress-development" },
  { title: "Digital Marketing", href: "/services/digital-marketing" },
  { title: "AI Systems Development", href: "/services/ai-systems" },
  { title: "Business Process Outsourcing", href: "/services/bpo" },
  { title: "IT Services", href: "/services/it-services" },
  { title: "ERP Systems", href: "/services/erp-systems" },
  { title: "AI-Based Automation", href: "/services/ai-automation" },
  { title: "Solar BPO Services", href: "/services/solar-bpo" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServiceDropdown, setShowServiceDropdown] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
  className={cn(
    "sticky top-0 z-50 w-full transition-all duration-200",
    isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white dark:bg-gray-950",
  )}
>
  <div className="container flex h-16 items-center justify-between py-4 mt-2">
    
    {/* Logo */}
    <div className="sm:ml-44">
    <Link href="/" className="flex items-center space-x-2">
  {/* Logo Image */}
  <Image
    src="/assets/GBC logo.png"
    alt="GBC Logo"
    width={180}
    height={180}
    className="h-24 w-24 sm:h-32 sm:w-32" // Adjust for mobile and desktop sizes
  />
  
  {/* Text shown only on mobile */}
  <span className="font-bold sm:hidden text-xl w-24 text-center"></span>
</Link>

    </div>

    {/* Nav */}
    <nav className="hidden md:flex items-center space-x-6 ml-44">
      {mainNavItems.map((item, index) => {
        if (item.title === "Services") {
          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setShowServiceDropdown(true)}
              onMouseLeave={() => setShowServiceDropdown(false)}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
              {showServiceDropdown && (
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-gray-950 ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {serviceDropdownItems.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        }
        return (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href ? "text-primary" : "text-muted-foreground",
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>

    {/* Buttons */}
    <div className="flex items-center space-x-4 ml-44">
      <Button asChild className="hidden md:flex bg-[#288493] hover:bg-[#1e6b78]">
        <Link href="/contact">Get in Touch</Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-4 mt-8">
            {mainNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <p className="text-sm font-semibold mb-2">Our Services</p>
              {serviceDropdownItems.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <Button asChild className="mt-4 bg-[#288493] hover:bg-[#1e6b78]">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>

  )
}
