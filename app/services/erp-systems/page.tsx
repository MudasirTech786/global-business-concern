import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, HelpCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ERPSystemsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                ERP Systems
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Customized ERP Solutions for Your Business
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-[600px]">
                Streamline operations, improve efficiency, and gain valuable insights with our tailored Enterprise
                Resource Planning systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#288493] hover:bg-[#1e6b78]">
                  <Link href="#contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#benefits">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="ERP System Dashboard"
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

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Benefits
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Our ERP Solutions?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our customized ERP systems are designed to address your specific business challenges and drive measurable
              results.
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
                    <path d="M12 20v-6M6 20V10M18 20V4" />
                  </svg>
                </div>
                <CardTitle>Increased Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Streamline workflows, automate repetitive tasks, and eliminate data silos to boost productivity across
                  your organization.
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
                <CardTitle>Real-time Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Access real-time data and analytics to make informed decisions quickly and stay ahead of market
                  trends.
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
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <CardTitle>Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Minimize operational costs, reduce manual errors, and optimize resource allocation for improved
                  profitability.
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
                <CardTitle>Enhanced Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Facilitate seamless communication and collaboration across departments with integrated workflows and
                  shared data.
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <CardTitle>Scalable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Our ERP systems grow with your business, easily adapting to changing requirements and expanding
                  operations.
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
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <CardTitle>Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily integrate with your existing systems and third-party applications for a unified technology
                  ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ERP Modules Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Modules & Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comprehensive ERP Modules</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our modular ERP system allows you to select the components that best fit your business needs.
            </p>
          </div>

          <Tabs defaultValue="finance" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="grid min-w-max grid-cols-6">
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="hr">HR & Payroll</TabsTrigger>
                <TabsTrigger value="crm">CRM</TabsTrigger>
                <TabsTrigger value="production">Production</TabsTrigger>
                <TabsTrigger value="reporting">Reporting</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="finance" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Financial Management</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Comprehensive financial management tools to streamline accounting processes, manage cash flow, and
                    ensure compliance.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>General Ledger & Chart of Accounts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Accounts Payable & Receivable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Multi-currency Support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Budget Management & Forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Tax Management & Compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Financial Reporting & Analytics</span>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="Financial Management Dashboard"
                    width={700}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Inventory Management</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Optimize inventory levels, track stock movements, and streamline warehouse operations with our
                    comprehensive inventory module.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Real-time Inventory Tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Barcode & RFID Integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Multi-location Warehouse Management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Automated Reordering & Forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Batch & Serial Number Tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Inventory Valuation & Reporting</span>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="Inventory Management Dashboard"
                    width={700}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Other tab contents would follow the same pattern */}
          </Tabs>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Industries
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Industries We Serve</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our ERP solutions are tailored to meet the unique requirements of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard
              title="Manufacturing"
              description="Streamline production processes, manage inventory, and optimize supply chain operations."
              icon={
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
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M17 18h1" />
                  <path d="M12 18h1" />
                  <path d="M7 18h1" />
                </svg>
              }
            />
            <IndustryCard
              title="Retail & E-commerce"
              description="Manage inventory, streamline order processing, and enhance customer experience."
              icon={
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
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              }
            />
            <IndustryCard
              title="Healthcare"
              description="Ensure compliance, manage patient records, and optimize resource allocation."
              icon={
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              }
            />
            <IndustryCard
              title="Construction"
              description="Track projects, manage resources, and ensure timely completion within budget."
              icon={
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
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M17 14v-4" />
                  <path d="M7 14v-4" />
                  <path d="M12 14v-4" />
                  <path d="M2 14h20" />
                </svg>
              }
            />
            <IndustryCard
              title="Professional Services"
              description="Manage client relationships, track billable hours, and streamline project delivery."
              icon={
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
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              }
            />
            <IndustryCard
              title="Distribution & Logistics"
              description="Optimize supply chain, manage warehousing, and streamline distribution processes."
              icon={
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
                  <circle cx="16.5" cy="19.5" r="2.5" />
                  <circle cx="7.5" cy="19.5" r="2.5" />
                  <path d="M16 8h6" />
                  <path d="M19 11V5H2v14h3" />
                  <path d="M9 17h4" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Methodology
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Implementation Approach</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We follow a structured methodology to ensure successful ERP implementation and adoption.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#288493]/20"></div>

              <div className="grid grid-cols-2 gap-8">
                <TimelineItem
                  title="Discovery & Analysis"
                  description="We analyze your business processes, identify pain points, and define requirements for your ERP solution."
                  number="1"
                  align="right"
                />

                <div></div>

                <div></div>

                <TimelineItem
                  title="Solution Design"
                  description="Our team designs a customized ERP solution tailored to your specific business needs and objectives."
                  number="2"
                  align="left"
                />

                <TimelineItem
                  title="Development & Configuration"
                  description="We develop and configure the ERP system according to the approved design specifications."
                  number="3"
                  align="right"
                />

                <div></div>

                <div></div>

                <TimelineItem
                  title="Testing & Quality Assurance"
                  description="Rigorous testing ensures the system functions correctly and meets all requirements before deployment."
                  number="4"
                  align="left"
                />

                <TimelineItem
                  title="Training & Deployment"
                  description="We provide comprehensive training and support during the deployment phase to ensure smooth adoption."
                  number="5"
                  align="right"
                />

                <div></div>

                <div></div>

                <TimelineItem
                  title="Ongoing Support & Optimization"
                  description="Our relationship continues with ongoing support, maintenance, and continuous improvement of your ERP system."
                  number="6"
                  align="left"
                />
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              <TimelineItemMobile
                title="Discovery & Analysis"
                description="We analyze your business processes, identify pain points, and define requirements for your ERP solution."
                number="1"
              />

              <TimelineItemMobile
                title="Solution Design"
                description="Our team designs a customized ERP solution tailored to your specific business needs and objectives."
                number="2"
              />

              <TimelineItemMobile
                title="Development & Configuration"
                description="We develop and configure the ERP system according to the approved design specifications."
                number="3"
              />

              <TimelineItemMobile
                title="Testing & Quality Assurance"
                description="Rigorous testing ensures the system functions correctly and meets all requirements before deployment."
                number="4"
              />

              <TimelineItemMobile
                title="Training & Deployment"
                description="We provide comprehensive training and support during the deployment phase to ensure smooth adoption."
                number="5"
              />

              <TimelineItemMobile
                title="Ongoing Support & Optimization"
                description="Our relationship continues with ongoing support, maintenance, and continuous improvement of your ERP system."
                number="6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about our ERP solutions and implementation process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FaqItem
              question="How long does an ERP implementation typically take?"
              answer="Implementation timelines vary based on the complexity of your business and the scope of the ERP solution. A basic implementation can take 3-6 months, while more complex projects may take 9-12 months or longer. We provide a detailed timeline during the discovery phase."
            />

            <FaqItem
              question="Can your ERP system integrate with our existing software?"
              answer="Yes, our ERP solutions are designed with integration capabilities in mind. We can integrate with a wide range of third-party applications, including CRM systems, e-commerce platforms, payment gateways, and more. Our team will assess your current technology stack during the discovery phase."
            />

            <FaqItem
              question="How much does an ERP implementation cost?"
              answer="The cost varies depending on the size of your organization, the complexity of your requirements, and the modules you need. We offer flexible pricing models, including subscription-based and one-time licensing options. Contact us for a customized quote based on your specific needs."
            />

            <FaqItem
              question="What kind of support do you provide after implementation?"
              answer="We offer comprehensive post-implementation support, including technical assistance, user training, system maintenance, and regular updates. Our support packages can be tailored to your specific needs, from basic support to 24/7 premium support options."
            />

            <FaqItem
              question="How secure is your ERP system?"
              answer="Security is a top priority. Our ERP solutions include robust security features such as role-based access control, data encryption, audit trails, and compliance with industry standards. We also provide regular security updates to protect against emerging threats."
            />

            <FaqItem
              question="Can we customize the ERP system to match our specific business processes?"
              answer="Absolutely. Customization is one of our key strengths. We work closely with you to understand your unique business processes and configure the ERP system accordingly. Our solutions are flexible and can be adapted to your specific requirements without compromising system integrity."
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Success Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ERP Implementation Case Studies
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See how our ERP solutions have transformed businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CaseStudyCard
              title="Manufacturing Company Increases Efficiency by 35%"
              description="A medium-sized manufacturing company streamlined operations and reduced costs with our custom ERP solution."
              industry="Manufacturing"
              results={[
                "35% increase in operational efficiency",
                "28% reduction in inventory costs",
                "60% faster order processing",
              ]}
              link="/resources/case-studies/manufacturing-erp"
            />

            <CaseStudyCard
              title="Retail Chain Improves Inventory Management"
              description="A retail chain with multiple locations implemented our ERP system to optimize inventory and improve customer service."
              industry="Retail"
              results={["42% reduction in stockouts", "22% decrease in excess inventory", "15% increase in sales"]}
              link="/resources/case-studies/retail-erp"
            />

            <CaseStudyCard
              title="Professional Services Firm Streamlines Project Management"
              description="A consulting firm implemented our ERP solution to better manage projects, resources, and client relationships."
              industry="Professional Services"
              results={[
                "30% increase in billable hours",
                "25% improvement in project delivery time",
                "40% reduction in administrative tasks",
              ]}
              link="/resources/case-studies/professional-services-erp"
            />
          </div>

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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                Get Started
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Ready to Transform Your Business with ERP?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Contact us today to schedule a consultation and discover how our customized ERP solutions can help your
                business streamline operations, reduce costs, and drive growth.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Consultation</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We'll analyze your business needs and recommend the right ERP solution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Custom Implementation Plan</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Receive a detailed implementation roadmap tailored to your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Ongoing Support</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our team will be with you every step of the way, from implementation to optimization.
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

function IndustryCard({ title, description, icon }) {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function TimelineItem({ title, description, number, align }) {
  return (
    <div className={`relative ${align === "left" ? "text-left" : "text-right"}`}>
      <div
        className={`absolute top-0 ${align === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"} w-10 h-10 rounded-full bg-[#288493] text-white flex items-center justify-center z-10`}
      >
        {number}
      </div>
      <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${align === "left" ? "ml-6" : "mr-6"}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function TimelineItemMobile({ title, description, number }) {
  return (
    <div className="relative pl-12">
      <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#288493] text-white flex items-center justify-center z-10">
        {number}
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
      <div className="flex items-start">
        <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-lg font-semibold mb-2">{question}</h3>
          <p className="text-gray-500 dark:text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  )
}

function CaseStudyCard({ title, description, industry, results, link }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <Badge className="w-fit mb-2">{industry}</Badge>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-semibold mb-2">Results:</h4>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{result}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="p-0 h-auto text-[#288493] hover:text-[#1e6b78] hover:bg-transparent">
          <Link href={link} className="flex items-center">
            Read case study
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
