import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of ERP Systems: AI Integration and Automation",
    excerpt:
      "Explore how artificial intelligence is transforming traditional ERP systems and what it means for businesses.",
    image: "/placeholder.svg?height=300&width=500",
    category: "ERP Systems",
    author: "John Smith",
    date: "Apr 15, 2023",
    readTime: "5 min read",
    link: "/resources/blog/future-of-erp-systems",
  },
  {
    id: 2,
    title: "Streamlining Solar Installation Processes with BPO Services",
    excerpt:
      "Learn how specialized BPO services can help solar installation companies reduce costs and increase efficiency.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Solar BPO",
    author: "Emily Johnson",
    date: "Mar 22, 2023",
    readTime: "4 min read",
    link: "/resources/blog/solar-installation-bpo",
  },
  {
    id: 3,
    title: "Implementing AI Chatbots: Best Practices and Common Pitfalls",
    excerpt:
      "A comprehensive guide to implementing AI chatbots in your business, including best practices and pitfalls to avoid.",
    image: "/placeholder.svg?height=300&width=500",
    category: "AI Automation",
    author: "Michael Chen",
    date: "Feb 10, 2023",
    readTime: "7 min read",
    link: "/resources/blog/ai-chatbot-implementation",
  },
]

export function BlogPostList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden h-full flex flex-col">
          <div className="relative h-48">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            <div className="absolute top-4 left-4">
              <Badge className="bg-[#288493]">{post.category}</Badge>
            </div>
          </div>
          <CardContent className="pt-6 flex-grow">
            <Link href={post.link} className="hover:underline">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="border-t pt-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
