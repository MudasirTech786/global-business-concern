import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, HelpCircle, Sun, FileCheck, Users, Zap, Award, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function SolarBPOPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                Solar BPO Services
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Specialized BPO Services for <span className="text-[#288493]">U.S. Solar Companies</span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-[600px]">
                Streamline your solar installation business with our comprehensive pre-installation and
                post-installation services, designed specifically for U.S. solar companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#288493] hover:bg-[#1e6b78]">
                  <Link href="#contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Solar Installation"
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive Solar BPO Services
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer end-to-end business process outsourcing services tailored specifically for solar installation
              companies in the United States.
            </p>
          </div>

          <Tabs defaultValue="pre-installation" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="pre-installation">Pre-Installation</TabsTrigger>
                <TabsTrigger value="post-installation">Post-Installation</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="pre-installation" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Pre-Installation Services</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Our pre-installation services help solar companies streamline the critical planning and approval
                    phases, reducing delays and increasing installation capacity.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Sun className="h-5 w-5 text-[#288493]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">System Design & Engineering</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Professional solar system designs, including panel layouts, electrical diagrams, and
                          structural analysis by certified engineers.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <FileCheck className="h-5 w-5 text-[#288493]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Permit Package Preparation</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Comprehensive permit packages tailored to local jurisdiction requirements, ensuring smooth
                          approval processes.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
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
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Utility Interconnection Applications</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Management of utility interconnection applications, including documentation preparation and
                          submission tracking.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#288493]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Users className="h-5 w-5 text-[#288493]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">HOA Approvals</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Assistance with Homeowners Association approval processes, including documentation preparation
                          and follow-up.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
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
                        <h4 className="font-semibold text-lg">Rebate & Incentive Paperwork</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Processing of rebate and incentive applications to maximize financial benefits for your
                          customers.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Pre-Installation Services"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="post-installation" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Post-Installation Services</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Our post-installation services ensure optimal system performance and customer satisfaction long
                    after the installation is complete.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start">
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
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">System Monitoring & Performance Analysis</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Continuous monitoring of system performance with detailed analysis and reporting to ensure
                          optimal energy production.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
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
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                          <path d="M8 14h.01" />
                          <path d="M12 14h.01" />
                          <path d="M16 14h.01" />
                          <path d="M8 18h.01" />
                          <path d="M12 18h.01" />
                          <path d="M16 18h.01" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Maintenance Scheduling</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Proactive scheduling and coordination of routine maintenance to prevent issues and extend
                          system lifespan.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
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
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Customer Support Services</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Dedicated customer support for system owners, handling inquiries and providing technical
                          assistance.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
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
                        <h4 className="font-semibold text-lg">Warranty Claims Processing</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Management of warranty claims with manufacturers and distributors, ensuring prompt resolution.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
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
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">RMA Handling</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Efficient management of Return Merchandise Authorization processes for defective equipment.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Post-Installation Services"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Benefits
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Outsource Your Solar Business Processes?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover how our specialized BPO services can transform your solar installation business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#288493]" />
                </div>
                <CardTitle>Increased Installation Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  By outsourcing time-consuming administrative and technical processes, your team can focus on core
                  activities, increasing installation capacity by up to 45%.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
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
                    className="h-6 w-6 text-[#288493]"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <CardTitle>Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Reduce operational costs by 30-40% compared to maintaining in-house teams for specialized functions
                  like system design and permit processing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#288493]" />
                </div>
                <CardTitle>Faster Project Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Accelerate project timelines with dedicated specialists handling paperwork and approvals, reducing
                  overall project duration by up to 35%.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#288493]/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#288493]" />
                </div>
                <CardTitle>Engineering Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Access specialized solar engineering expertise without the overhead of maintaining a full-time
                  engineering team, ensuring high-quality system designs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
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
                    className="h-6 w-6 text-[#288493]"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <CardTitle>Improved Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Enhance customer experience with faster approvals, professional documentation, and responsive
                  post-installation support, leading to higher satisfaction rates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
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
                    className="h-6 w-6 text-[#288493]"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                  </svg>
                </div>
                <CardTitle>Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily scale your operations up or down based on seasonal demand without the challenges of hiring and
                  training new staff or managing layoffs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Workflow Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Workflow
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A streamlined workflow designed to integrate seamlessly with your existing operations.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Workflow */}
            <div className="hidden md:block">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#288493]/20"></div>

              <div className="grid grid-cols-2 gap-8">
                <WorkflowItem
                  title="Project Intake"
                  description="We receive project details through our secure portal or API integration with your CRM system."
                  number="1"
                  align="right"
                />

                <div></div>

                <div></div>

                <WorkflowItem
                  title="Design & Engineering"
                  description="Our team of certified engineers creates system designs, electrical diagrams, and structural analyses."
                  number="2"
                  align="left"
                />

                <WorkflowItem
                  title="Permit Package Preparation"
                  description="We prepare comprehensive permit packages tailored to local jurisdiction requirements."
                  number="3"
                  align="right"
                />

                <div></div>

                <div></div>

                <WorkflowItem
                  title="Application Submission & Tracking"
                  description="We submit applications to relevant authorities and actively track their progress."
                  number="4"
                  align="left"
                />

                <WorkflowItem
                  title="Approval Management"
                  description="We manage the approval process, addressing any questions or requirements from authorities."
                  number="5"
                  align="right"
                />

                <div></div>

                <div></div>

                <WorkflowItem
                  title="Handover for Installation"
                  description="Once all approvals are secured, we provide a complete package for your installation team."
                  number="6"
                  align="left"
                />
              </div>
            </div>

            {/* Mobile Workflow */}
            <div className="md:hidden space-y-8">
              <WorkflowItemMobile
                title="Project Intake"
                description="We receive project details through our secure portal or API integration with your CRM system."
                number="1"
              />

              <WorkflowItemMobile
                title="Design & Engineering"
                description="Our team of certified engineers creates system designs, electrical diagrams, and structural analyses."
                number="2"
              />

              <WorkflowItemMobile
                title="Permit Package Preparation"
                description="We prepare comprehensive permit packages tailored to local jurisdiction requirements."
                number="3"
              />

              <WorkflowItemMobile
                title="Application Submission & Tracking"
                description="We submit applications to relevant authorities and actively track their progress."
                number="4"
              />

              <WorkflowItemMobile
                title="Approval Management"
                description="We manage the approval process, addressing any questions or requirements from authorities."
                number="5"
              />

              <WorkflowItemMobile
                title="Handover for Installation"
                description="Once all approvals are secured, we provide a complete package for your installation team."
                number="6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                Integration
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Seamless Integration with Your Systems
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Our BPO services are designed to integrate smoothly with your existing software and workflows, ensuring
                a frictionless experience.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">CRM Integration</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Seamless integration with popular CRM systems like Salesforce, HubSpot, and custom solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Solar Design Software</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Compatible with leading solar design platforms including Aurora, PVsyst, and HelioScope.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Project Management Tools</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Integration with project management software like Asana, Monday.com, and Trello.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">API Connectivity</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Robust API options for custom integrations with your proprietary systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Monitoring Platforms</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Compatible with major solar monitoring platforms for seamless post-installation services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="System Integration"
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

      {/* Case Studies Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Success Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Solar BPO Case Studies</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See how our BPO services have helped solar installation companies across the United States.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2">California</Badge>
                <CardTitle className="text-xl">SunPower Solutions</CardTitle>
                <CardDescription>
                  A leading solar installer in California looking to scale operations while maintaining quality.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">45% increase in installation capacity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">32% reduction in permit approval time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">28% cost savings on administrative processes</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-[#288493] hover:text-[#1e6b78] hover:bg-transparent"
                >
                  <Link href="/resources/case-studies/sunpower-solutions" className="flex items-center">
                    Read case study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2">Texas</Badge>
                <CardTitle className="text-xl">Lone Star Solar</CardTitle>
                <CardDescription>
                  A mid-sized solar company struggling with permit delays and administrative bottlenecks.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">53% reduction in permit processing time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">38% increase in monthly installations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">35% improvement in customer satisfaction scores</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-[#288493] hover:text-[#1e6b78] hover:bg-transparent"
                >
                  <Link href="/resources/case-studies/lone-star-solar" className="flex items-center">
                    Read case study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2">Florida</Badge>
                <CardTitle className="text-xl">Sunshine Solar Systems</CardTitle>
                <CardDescription>
                  A rapidly growing solar installer needing to scale operations without compromising quality.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">67% growth in business within 12 months</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">41% reduction in operational costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#288493] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">29% decrease in project timeline duration</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-[#288493] hover:text-[#1e6b78] hover:bg-transparent"
                >
                  <Link href="/resources/case-studies/sunshine-solar-systems" className="flex items-center">
                    Read case study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about our Solar BPO services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    How do you ensure quality and accuracy in system designs?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team includes certified solar engineers with extensive experience in the U.S. solar industry. We
                    follow a rigorous quality control process with multiple review stages. All designs are checked for
                    compliance with local codes, utility requirements, and industry best practices before delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    How do you handle different jurisdictional requirements across the U.S.?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We maintain a comprehensive database of requirements for thousands of jurisdictions across the
                    United States, which is continuously updated. Our team specializes in navigating the complex
                    landscape of local regulations, ensuring permit packages meet specific requirements for each
                    location.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">What is your typical turnaround time?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Turnaround times vary based on the service and complexity, but our standard timeframes are: System
                    designs within 24-48 hours, permit packages within 2-3 business days, and utility interconnection
                    applications within 1-2 business days. We also offer expedited services for urgent projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">How do you ensure data security and confidentiality?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We implement robust security measures including encrypted data transfer, secure cloud storage,
                    strict access controls, and regular security audits. All staff sign confidentiality agreements, and
                    we comply with relevant data protection regulations. We can also sign custom NDAs to address
                    specific concerns.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Can you handle both residential and commercial solar projects?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Yes, we have dedicated teams for both residential and commercial projects. Our commercial team has
                    expertise in larger systems, including complex roof layouts, ground mounts, carports, and
                    utility-scale projects. We understand the different requirements and processes for each project
                    type.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">How do you handle revisions or changes to projects?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We understand that changes are part of the process. Our service packages include a reasonable number
                    of revisions at no additional cost. For significant changes or redesigns, we offer flexible options
                    to accommodate your needs. Our goal is to ensure the final deliverables meet your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Solar Engineering Experts
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our team of certified engineers and solar specialists bring decades of combined experience to your
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Lead Solar Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  NABCEP certified with 12+ years of experience in solar system design and engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>Permit Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Expert in navigating complex permitting requirements across multiple jurisdictions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardTitle>David Rodriguez</CardTitle>
                <CardDescription>Electrical Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Licensed electrical engineer specializing in solar PV system integration and NEC compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardTitle>Emily Thompson</CardTitle>
                <CardDescription>Project Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  PMP certified with extensive experience managing solar projects from concept to completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="px-3 py-1 bg-[#288493]/10 text-[#288493] hover:bg-[#288493]/20 border-none mb-4">
                Get Started
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Ready to Streamline Your Solar Operations?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Contact us today to discuss how our specialized BPO services can help your solar installation business
                reduce costs, increase capacity, and improve customer satisfaction.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Free Consultation</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Schedule a no-obligation consultation to discuss your specific needs and challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Custom Solution</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Receive a tailored proposal based on your business requirements and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#288493] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Seamless Onboarding</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Experience a smooth transition with our structured onboarding process and dedicated support.
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

function WorkflowItem({ title, description, number, align }) {
  return (
    <div className={`relative ${align === "left" ? "text-left" : "text-right"}`}>
      <div
        className={`absolute top-0 ${
          align === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        } w-10 h-10 rounded-full bg-[#288493] text-white flex items-center justify-center z-10`}
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

function WorkflowItemMobile({ title, description, number }) {
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
