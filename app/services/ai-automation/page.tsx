import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, HelpCircle, Lightbulb, Zap } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function AIAutomationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                AI-Based Automation
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Transform Your Business with <span className="text-[#288493]">Intelligent Automation</span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-[600px]">
                Leverage the power of artificial intelligence to automate processes, reduce costs, and drive innovation
                across your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#288493] hover:bg-[#1e6b78]">
                  <Link href="#contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#capabilities">Explore Capabilities</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="AI Automation"
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

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Capabilities
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Automation Capabilities</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our AI-based automation solutions can transform various aspects of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#288493]"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                    <path d="M12 13v8" />
                    <path d="M12 3v3" />
                  </svg>
                </div>
                <CardTitle>Intelligent Document Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Automatically extract, classify, and process data from various document types using AI-powered OCR and
                  natural language processing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#288493]"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="10" cy="13" r="2" />
                    <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22" />
                  </svg>
                </div>
                <CardTitle>Conversational AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Deploy intelligent chatbots and virtual assistants that understand natural language and provide
                  personalized customer support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#288493]"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <CardTitle>Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Leverage machine learning to analyze data patterns, forecast trends, and make data-driven decisions
                  for your business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#288493]"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <CardTitle>Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Automate repetitive business processes with intelligent workflows that adapt and improve over time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#288493]"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                    <path d="M11 17v.01" />
                    <path d="M7 14v.01" />
                  </svg>
                </div>
                <CardTitle>Computer Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Implement image and video analysis for quality control, security monitoring, and automated visual
                  inspections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#288493]"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <CardTitle>Personalization Engines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Deliver personalized experiences to customers based on their behavior, preferences, and interaction
                  history.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="AI Benefits"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#288493]/10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#288493]/10 rounded-lg -z-10"></div>
            </div>

            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                Benefits
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Why Implement AI Automation?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                AI-based automation delivers tangible benefits that can transform your business operations and drive
                competitive advantage.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-5 w-5 text-[#288493]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Increased Efficiency</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Automate repetitive tasks and workflows to free up human resources for higher-value activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#288493]"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Cost Reduction</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Reduce operational costs through automation of manual processes and improved resource allocation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#288493]"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Error Reduction</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Minimize human errors in data entry, processing, and decision-making with precise AI algorithms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Lightbulb className="h-5 w-5 text-[#288493]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Enhanced Decision Making</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Leverage data-driven insights and predictive analytics to make more informed business decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#288493]"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Improved Customer Experience</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Deliver personalized, responsive service through AI-powered chatbots and recommendation engines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Use Cases
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Automation in Action</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore how businesses across various industries are leveraging our AI automation solutions.
            </p>
          </div>

          <Tabs defaultValue="customer-service" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="grid min-w-max grid-cols-4">
                <TabsTrigger value="customer-service">Customer Service</TabsTrigger>
                <TabsTrigger value="finance">Finance & Accounting</TabsTrigger>
                <TabsTrigger value="hr">Human Resources</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="customer-service" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">AI-Powered Customer Service</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Transform your customer support with intelligent chatbots, automated ticket routing, and
                    personalized service recommendations.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>24/7 customer support through AI chatbots</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Automated ticket classification and routing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Sentiment analysis for customer feedback</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Personalized product recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Proactive issue resolution based on predictive analytics</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button asChild className="bg-[#288493] hover:bg-[#1e6b78]">
                      <Link href="/resources/case-studies/ai-customer-service">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="AI Customer Service"
                    width={700}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="finance" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Finance & Accounting Automation</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Streamline financial processes with intelligent document processing, automated reconciliation, and
                    fraud detection.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Automated invoice processing and approval</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Intelligent expense management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Predictive cash flow forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Anomaly detection for fraud prevention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Automated financial reporting and compliance</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button asChild className="bg-[#288493] hover:bg-[#1e6b78]">
                      <Link href="/resources/case-studies/finance-automation">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="Finance Automation"
                    width={700}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hr" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">HR Process Automation</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Streamline recruitment, onboarding, and employee management with AI-powered HR automation.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>AI-powered resume screening and candidate matching</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Automated employee onboarding workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Intelligent performance evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Predictive employee retention analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Automated benefits administration and compliance</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button asChild className="bg-[#288493] hover:bg-[#1e6b78]">
                      <Link href="/resources/case-studies/hr-automation">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="HR Automation"
                    width={700}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="operations" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Operations & Supply Chain</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Optimize operations and supply chain management with predictive analytics and intelligent
                    automation.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Predictive maintenance for equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Demand forecasting and inventory optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Automated quality control with computer vision</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Route optimization for logistics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Supplier risk assessment and management</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button asChild className="bg-[#288493] hover:bg-[#1e6b78]">
                      <Link href="/resources/case-studies/operations-automation">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="Operations Automation"
                    width={700}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our AI Implementation Approach
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We follow a structured methodology to ensure successful AI automation implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#288493] text-white flex items-center justify-center mb-4">
                  1
                </div>
                <CardTitle>Assessment & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Business process analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Automation opportunity identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">ROI assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Strategic roadmap development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#288493] text-white flex items-center justify-center mb-4">
                  2
                </div>
                <CardTitle>Design & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Solution architecture design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">AI model selection and training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Integration planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Prototype development and testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#288493] text-white flex items-center justify-center mb-4">
                  3
                </div>
                <CardTitle>Implementation & Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Phased deployment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">User training and adoption</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Continuous improvement and optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Responsible AI Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                Responsible AI
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Our Commitment to Ethical AI
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                We believe in developing and implementing AI solutions that are transparent, fair, and respect privacy
                and security concerns.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#288493]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Transparency</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We ensure our AI systems are explainable and that decisions can be understood by users.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#288493]"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M12 8v8" />
                      <path d="M8 12h8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fairness</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our AI solutions are designed to be unbiased and treat all users equitably.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#288493]"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Privacy & Security</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We implement robust data protection measures and comply with relevant regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#288493]"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Human-Centered</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our AI solutions are designed to augment human capabilities, not replace them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Ethical AI"
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about our AI automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">How quickly can we see results from AI automation?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The timeline for seeing results varies based on the complexity of the implementation. Simple
                    automations can show results within weeks, while more complex AI systems may take a few months to
                    fully optimize. We work with you to establish realistic timelines and often implement in phases to
                    deliver value incrementally.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Do we need to have technical expertise to implement AI automation?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    No, you don't need technical expertise. Our team handles the technical aspects of implementation. We
                    work closely with your business stakeholders to understand your processes and requirements, and we
                    provide training to ensure your team can effectively use and manage the AI solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">How do you ensure the security of our data?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Data security is a top priority. We implement robust security measures including encryption, access
                    controls, and regular security audits. We comply with industry standards and regulations such as
                    GDPR, HIPAA, and SOC 2. All data processing is transparent, and we provide detailed documentation of
                    our security practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can AI automation integrate with our existing systems?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Yes, our AI solutions are designed to integrate with your existing systems and workflows. We support
                    integration with major enterprise systems, databases, and APIs. During the assessment phase, we
                    evaluate your current technology stack and design the integration approach to ensure seamless
                    operation with minimal disruption.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    How do you measure the success of AI automation implementations?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We establish clear KPIs and success metrics at the beginning of each project, tailored to your
                    business objectives. These might include efficiency gains, cost reductions, error rates, customer
                    satisfaction scores, or other relevant metrics. We implement monitoring tools to track these metrics
                    and provide regular reports on performance and ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    What ongoing support do you provide after implementation?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We offer comprehensive post-implementation support, including system monitoring, maintenance, and
                    optimization. Our support packages can be tailored to your needs, from basic technical support to
                    full managed services. We also provide ongoing training for your team as the system evolves and new
                    features are added.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                Get Started
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Contact us today to schedule a demo and discover how our AI automation solutions can help your business
                increase efficiency, reduce costs, and drive innovation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Free Consultation</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Schedule a no-obligation consultation to discuss your business needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Custom Demo</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      See a personalized demonstration of our AI solutions tailored to your industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">ROI Assessment</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Receive a detailed analysis of the potential return on investment for your business.
                    </p>
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
