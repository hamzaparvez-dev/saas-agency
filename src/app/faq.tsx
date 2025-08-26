import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Have questions ?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What kind of software do you develop?</AccordionTrigger>
      <AccordionContent>
        We specialize in custom software development, API development, MVP creation, enterprise websites, and AI automation solutions. From simple web applications to complex enterprise systems.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How long does it take to build an MVP?</AccordionTrigger>
      <AccordionContent>
        MVP development typically takes 4-8 weeks depending on complexity. We follow agile methodology to deliver working software quickly and iterate based on feedback.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
    Do you provide ongoing maintenance?
      </AccordionTrigger>
      <AccordionContent>
        Yes, we offer comprehensive maintenance and support packages including bug fixes, updates, feature enhancements, and 24/7 monitoring for enterprise clients.
        
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
    What technologies do you use?
        </AccordionTrigger>
      <AccordionContent>
        We work with modern tech stacks including React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, and various AI/ML frameworks to build scalable solutions.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;