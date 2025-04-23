import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  LineChart,
  Lightbulb,
  Server,
  Smartphone,
  Sun,
  Zap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { ContactForm } from "@/components/contact-form"
import { BlogPostList } from "@/components/blog-post-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <HeroSection />

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive Technology Solutions
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We deliver end-to-end technology solutions spanning software development, AI automation, and specialized
              business process outsourcing.
            </p>
          </div>

          <Tabs defaultValue="core" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="core">Core Services</TabsTrigger>
                <TabsTrigger value="specialized">Specialized</TabsTrigger>
                <TabsTrigger value="industry">Industry Solutions</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="core" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                  icon={<Code className="h-10 w-10 text-[#288493]" />}
                  title="Full Stack Development"
                  description="End-to-end web application development with modern frameworks and technologies."
                  link="/services/full-stack-development"
                />
                <ServiceCard
                  icon={<Smartphone className="h-10 w-10 text-[#288493]" />}
                  title="Mobile App Development"
                  description="Native and cross-platform mobile applications for iOS and Android."
                  link="/services/mobile-app-development"
                />
                <ServiceCard
                  icon={<LineChart className="h-10 w-10 text-[#288493]" />}
                  title="Digital Marketing"
                  description="Data-driven marketing strategies to grow your online presence and customer base."
                  link="/services/digital-marketing"
                />
                <ServiceCard
                  icon={<Server className="h-10 w-10 text-[#288493]" />}
                  title="IT Services"
                  description="Comprehensive IT support, infrastructure management, and cloud solutions."
                  link="/services/it-services"
                />
                <ServiceCard
                  icon={<Database className="h-10 w-10 text-[#288493]" />}
                  title="WordPress Development"
                  description="Custom WordPress websites and plugins tailored to your business needs."
                  link="/services/wordpress-development"
                />
                <ServiceCard
                  icon={<Zap className="h-10 w-10 text-[#288493]" />}
                  title="Business Process Outsourcing"
                  description="Streamline operations and reduce costs with our specialized BPO services."
                  link="/services/bpo"
                />
              </div>
            </TabsContent>

            <TabsContent value="specialized" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                  icon={<Database className="h-10 w-10 text-[#288493]" />}
                  title="ERP Systems"
                  description="Customized Enterprise Resource Planning solutions to streamline your business operations."
                  link="/services/erp-systems"
                  featured={true}
                />
                <ServiceCard
                  icon={<Lightbulb className="h-10 w-10 text-[#288493]" />}
                  title="AI-Based Automation"
                  description="Intelligent automation solutions powered by artificial intelligence and machine learning."
                  link="/services/ai-automation"
                  featured={true}
                />
                <ServiceCard
                  icon={<Sun className="h-10 w-10 text-[#288493]" />}
                  title="Solar BPO Services"
                  description="Specialized business process outsourcing for the solar industry with engineering expertise."
                  link="/services/solar-bpo"
                  featured={true}
                />
              </div>
            </TabsContent>

            <TabsContent value="industry" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                  icon={<Sun className="h-10 w-10 text-[#288493]" />}
                  title="Solar Industry"
                  description="Specialized solutions for solar installation companies including system design and permit processing."
                  link="/industries/solar"
                />
                <ServiceCard
                  icon={<Database className="h-10 w-10 text-[#288493]" />}
                  title="Manufacturing"
                  description="ERP and automation solutions tailored for manufacturing businesses."
                  link="/industries/manufacturing"
                />
                <ServiceCard
                  icon={<LineChart className="h-10 w-10 text-[#288493]" />}
                  title="Finance & Banking"
                  description="Secure and compliant technology solutions for financial institutions."
                  link="/industries/finance"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Success Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Case Studies</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See how we've helped businesses transform their operations and achieve measurable results.
            </p>
          </div>

          <CaseStudyCarousel />

          <div className="flex justify-center mt-10">
            <Button asChild className="bg-[#288493] hover:bg-[#1e6b78]">
              <Link href="/resources/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Your Partner for Technology Excellence
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                At Global Business Concern, we combine technical expertise with industry knowledge to deliver solutions
                that drive real business value. Our approach is collaborative, transparent, and focused on your success.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Expertise Across Technologies</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our team brings deep expertise across a wide range of technologies and industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Customized Solutions</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We don't believe in one-size-fits-all. Every solution is tailored to your specific needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Proven Track Record</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      With a history of successful implementations, we have the experience to deliver results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Ongoing Support</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our relationship doesn't end at deployment. We provide continuous support and optimization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-[#288493] hover:bg-[#1e6b78]">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Team collaboration"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#288493]/10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#288493]/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Insights
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest from Our Blog</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Stay updated with the latest insights, trends, and best practices in technology and business.
            </p>
          </div>

          <BlogPostList />

          <div className="flex justify-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-[#288493] text-[#288493] hover:bg-[#288493] hover:text-white"
            >
              <Link href="/resources/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                Get in Touch
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Contact us today to discuss how our technology solutions can help your business grow, optimize
                operations, and stay ahead of the competition.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">Los Angeles, California(CA), 90001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">(213) 974-3211</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">info@globalbusinessconcern.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description, link, featured = false }) {
  return (
    <Card className={`h-full transition-all hover:shadow-lg ${featured ? "border-[#288493]" : ""}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          {icon}
          {featured && <Badge className="bg-[#288493]">Featured</Badge>}
        </div>
        <CardTitle className="text-xl mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="ghost" className="p-0 h-auto text-[#288493] hover:text-[#1e6b78] hover:bg-transparent">
          <Link href={link} className="flex items-center">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
