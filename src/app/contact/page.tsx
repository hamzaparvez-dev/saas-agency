"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { Check, Smile } from "lucide-react";
import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Get a Quote",
    "Schedule Consultation",
    "Learn More",
    "Technical Discussion",
    "Project Estimate",
    "Other",
  ]),
  services: z.enum([
    "Web Application Development",
    "Mobile App Development", 
    "AI Agents & Automation",
    "Backend Development",
    "Cloud Solutions",
    "API Development",
    "MVP Development",
    "Enterprise Websites",
    "End-to-End Development",
    "Custom Software Solutions",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Get a Quote" | "Schedule Consultation" | "Learn More" | "Technical Discussion" | "Project Estimate" | "Other";
  services:
    | "Web Application Development"
    | "Mobile App Development"
    | "AI Agents & Automation" 
    | "Backend Development"
    | "Cloud Solutions"
    | "API Development"
    | "MVP Development"
    | "Enterprise Websites"
    | "End-to-End Development"
    | "Custom Software Solutions";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Get a Quote",
      services: "Web Application Development",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" w-full   md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <PricingNavbar />
      <div className="md:flex items-start justify-center gap-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="md:w-1/2 md:max-w-2xl">
          <div className="text-4xl md:text-5xl lg:text-6xl font-medium pb-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Let&apos;s Build Your Vision
          </div>
          <div className="py-4 text-gray-300 text-lg leading-relaxed">
            Ready to transform your ideas into powerful software solutions? Let&apos;s discuss your project and create something extraordinary together.
          </div>

          <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 border border-neutral-700 space-y-6 p-6 rounded-2xl my-8 hidden md:block">
            <div className="flex gap-4 border-b border-neutral-600 pb-4">
              <div className="text-neutral-200 font-normal">
                <strong className="text-white">Custom Software Development:</strong> From web applications to mobile apps, we build scalable solutions tailored to your business needs.
              </div>
            </div>

            <div className="flex gap-4 border-b border-neutral-600 pb-4">
              <div className="text-neutral-200 font-normal">
                <strong className="text-white">AI & Cloud Solutions:</strong> Leverage cutting-edge AI agents, automation, and cloud infrastructure to stay ahead of the competition.
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-neutral-200 font-normal">
                <strong className="text-white">End-to-End Support:</strong> From MVP to enterprise solutions, we provide comprehensive development services with dedicated support throughout your journey.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-white py-4 px-3"></div> */}

        <Form {...form}>
          {!submitted ? (
             <form
             onSubmit={form.handleSubmit(onSubmit)}
             className="space-y-6 bg-gradient-to-b from-neutral-900/50 to-neutral-800/50 border border-neutral-700 rounded-3xl p-8 md:p-10 md:w-1/2 md:max-w-lg backdrop-blur-sm shadow-2xl shadow-black/20"
           >
             {/* Form Header */}
             <div className="text-center border-b border-neutral-700 pb-6 mb-8">
               <h2 className="text-2xl font-bold text-white mb-2">Start Your Project</h2>
               <p className="text-neutral-400 text-sm">Tell us about your vision and let&apos;s build something amazing together</p>
             </div>

             <div className="grid md:grid-cols-2 gap-4">
               <FormField
                 control={form.control}
                 name="first_name"
                 render={({ field }) => (
                   <FormItem className="w-full">
                     <FormLabel className="text-sm text-white">First name *</FormLabel>
                     <FormControl>
                       <Input {...field} required placeholder="John" className="bg-neutral-800 border-neutral-600 text-white" />
                     </FormControl>
                   </FormItem>
                 )}
               />
           
               <FormField
                 control={form.control}
                 name="last_name"
                 render={({ field }) => (
                   <FormItem className="w-full">
                     <FormLabel className="text-sm text-white">Last name *</FormLabel>
                     <FormControl>
                       <Input {...field} required placeholder="Doe" className="bg-neutral-800 border-neutral-600 text-white" />
                     </FormControl>
                   </FormItem>
                 )}
               />
             </div>
           
             <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                 <FormItem className="w-full">
                   <FormLabel className="text-sm text-white">Email address *</FormLabel>
                   <FormControl>
                     <Input {...field} type="email" required placeholder="john@company.com" className="bg-neutral-800 border-neutral-600 text-white" />
                   </FormControl>
                 </FormItem>
               )}
             />
           
             <FormField
               control={form.control}
               name="company_name"
               render={({ field }) => (
                 <FormItem className="w-full">
                   <FormLabel className="text-sm text-white">Company name *</FormLabel>
                   <FormControl>
                     <Input {...field} required placeholder="Acme Inc." className="bg-neutral-800 border-neutral-600 text-white" />
                   </FormControl>
                 </FormItem>
               )}
             />
           
             <FormField
               control={form.control}
               name="job_title"
               render={({ field }) => (
                 <FormItem className="w-full">
                   <FormLabel className="text-sm text-white">Job title</FormLabel>
                   <FormControl>
                     <Input {...field} placeholder="e.g. CTO, Founder, Product Manager" className="bg-neutral-800 border-neutral-600 text-white" />
                   </FormControl>
                 </FormItem>
               )}
             />
           
             <FormField
               control={form.control}
               name="services"
               render={({ field }) => (
                 <FormItem className="w-full">
                   <FormLabel className="text-sm text-white">Services you are interested in *</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                     <FormControl>
                       <SelectTrigger>
                         <SelectValue placeholder="Select a service" />
                       </SelectTrigger>
                     </FormControl>
                     <SelectContent className="max-h-60">
                       <SelectItem value="Web Application Development">
                         <div className="flex flex-col">
                           <span className="font-medium">Web Application Development</span>
                           <span className="text-xs text-neutral-500">React, Next.js, Full-stack solutions</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="Mobile App Development">
                         <div className="flex flex-col">
                           <span className="font-medium">Mobile App Development</span>
                           <span className="text-xs text-neutral-500">iOS, Android, React Native, Flutter</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="AI Agents & Automation">
                         <div className="flex flex-col">
                           <span className="font-medium">AI Agents & Automation</span>
                           <span className="text-xs text-neutral-500">ChatGPT, Custom AI, Process automation</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="Backend Development">
                         <div className="flex flex-col">
                           <span className="font-medium">Backend Development</span>
                           <span className="text-xs text-neutral-500">APIs, Databases, Server architecture</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="Cloud Solutions">
                         <div className="flex flex-col">
                           <span className="font-medium">Cloud Solutions</span>
                           <span className="text-xs text-neutral-500">AWS, Azure, DevOps, Infrastructure</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="API Development">
                         <div className="flex flex-col">
                           <span className="font-medium">API Development</span>
                           <span className="text-xs text-neutral-500">RESTful, GraphQL, Microservices</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="MVP Development">
                         <div className="flex flex-col">
                           <span className="font-medium">MVP Development</span>
                           <span className="text-xs text-neutral-500">Rapid prototyping, Startup solutions</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="Enterprise Websites">
                         <div className="flex flex-col">
                           <span className="font-medium">Enterprise Websites</span>
                           <span className="text-xs text-neutral-500">Corporate sites, High-performance</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="End-to-End Development">
                         <div className="flex flex-col">
                           <span className="font-medium">End-to-End Development</span>
                           <span className="text-xs text-neutral-500">Complete project lifecycle</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="Custom Software Solutions">
                         <div className="flex flex-col">
                           <span className="font-medium">Custom Software Solutions</span>
                           <span className="text-xs text-neutral-500">Tailored business software</span>
                       </div>
                       </SelectItem>
                     </SelectContent>
                   </Select>
                 </FormItem>
               )}
             />
           
             <FormField
               control={form.control}
               name="help"
               render={({ field }) => (
                 <FormItem className="w-full">
                   <FormLabel className="text-sm text-white">
                     How can we help you? *
                   </FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value} required>
                     <FormControl>
                       <SelectTrigger>
                         <SelectValue placeholder="Select an option" />
                       </SelectTrigger>
                     </FormControl>
                     <SelectContent>
                       <SelectItem value="Get a Quote">
                         <div className="flex flex-col">
                           <span className="font-medium">Get a Quote</span>
                           <span className="text-xs text-neutral-500">Project pricing and timeline</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="Schedule Consultation">
                         <div className="flex flex-col">
                           <span className="font-medium">Schedule Consultation</span>
                           <span className="text-xs text-neutral-500">Discuss your project requirements</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="Technical Discussion">
                         <div className="flex flex-col">
                           <span className="font-medium">Technical Discussion</span>
                           <span className="text-xs text-neutral-500">Architecture and technology choices</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="Project Estimate">
                         <div className="flex flex-col">
                           <span className="font-medium">Project Estimate</span>
                           <span className="text-xs text-neutral-500">Detailed scope and cost analysis</span>
                         </div>
                       </SelectItem>
                       <SelectItem value="Learn More">
                         <div className="flex flex-col">
                           <span className="font-medium">Learn More</span>
                           <span className="text-xs text-neutral-500">General information about our services</span>
                         </div>
                         </SelectItem>
                       <SelectItem value="Other">
                         <div className="flex flex-col">
                           <span className="font-medium">Other</span>
                           <span className="text-xs text-neutral-500">Something else - please specify</span>
                       </div>
                       </SelectItem>
                     </SelectContent>
                   </Select>
                 </FormItem>
               )}
             />
           
             <FormField
               control={form.control}
               name="info"
               render={({ field }) => (
                 <FormItem className="w-full">
                   <FormLabel className="text-sm text-white">
                     Tell us about your project
                   </FormLabel>
                   <FormControl>
                     <Textarea 
                       style={{ height: "120px" }} 
                       placeholder="Describe your project, timeline, budget, or any specific requirements..."
                       className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400 resize-none"
                       {...field}
                     />
                   </FormControl>
                 </FormItem>
               )}
             />
           
             <div className="flex gap-3 items-start">
               <div className="mt-1">
                 <Checkbox className="border-white text-white data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" required />
               </div>
               <div className="text-white font-light text-sm">
                 I agree to receive project updates and relevant communication about software development services.
               </div>
             </div>
           
             <div className="flex items-center justify-center pt-4">
               <Button
                 type="submit"
                 className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-3 text-sm transition-all duration-200 w-full"
                 disabled={loading}
                 onClick={() => form.handleSubmit(onSubmit)}
               >
                 {loading ? (
                   <div className="flex items-center gap-2">
                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                     Sending...
                   </div>
                 ) : (
                   "Send Message"
                 )}
               </Button>
             </div>
           </form>
           
          ) : (
            <>
              <div className="text-xl  md:text-2xl  flex  items-center justify-center flex-col px-8">
                <div className="w-80 py-20 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="text-3xl text-white" />
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h2>
                  
                  <div className="text-gray-300 font-light text-center justify-center mx-auto py-4">
                    Thank you for reaching out! We&apos;ve received your project inquiry and our team will review your requirements.
                  </div>
                  
                  <div className="text-gray-400 text-sm text-center">
                    <strong className="text-blue-400">What happens next?</strong>
                    <br />
                    • We&apos;ll review your project details within 24 hours
                    <br />
                    • Our team will contact you via email to schedule a consultation
                    <br />
                    • We&apos;ll discuss your requirements and provide a detailed proposal
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">Urgent project?</strong> Email us directly at{" "}
                      <a href="mailto:hello@youragency.com" className="text-blue-400 hover:text-blue-300">
                        hello@youragency.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </Form>

        
      </div>
      <Footer />
    </div>
  );
}
