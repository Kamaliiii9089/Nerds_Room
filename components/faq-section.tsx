"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { WoodenBoardTitle } from "./wooden-board-title"

const faqs = [
  {
    question: "Who can participate in Nerds AI Clash?",
    answer:
      "Anyone with a passion for AI and technology can join! Whether you're a student, professional, or hobbyist, if you're excited about building with AI, you're welcome to participate.",
  },
  {
    question: "How do I register for the hackathon?",
    answer:
      "Click the 'Join the Battle' button which will redirect you to our Devfolio page. Create or login to your Devfolio account and register for Nerds AI Clash. It's free!",
  },
  {
    question: "What are the three tracks about?",
    answer:
      "We have three tracks: 1) AI Agent Making - Build autonomous AI agents, 2) MVP Development - Create products using AI prompting, 3) AI Film Making - Produce AI-generated films.",
  },
  {
    question: "How does the three-round structure work?",
    answer:
      "Round 1 happens at 30+ venues across India. Top teams advance to Round 2 for mentorship. Finally, the best teams compete in Round 3 - the Grand Finale at IIT Jodhpur!",
  },
  {
    question: "Do I need a team to participate?",
    answer:
      "You can participate solo or form a team of up to 4 members. We'll have team formation activities at each venue to help you find teammates.",
  },
  {
    question: "Are there any prizes?",
    answer:
      "Yes! Prize pool of ₹10L+ including cash prizes, swag, cloud credits, mentorship, and special prizes for each track.",
  },
]

function AnimatedFAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only animate once, the first time it becomes visible
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          // After animation completes, mark as animated and stop observing
          setTimeout(() => {
            setHasAnimated(true)
          }, 700 + (index * 100)) // Wait for animation to complete
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current && !hasAnimated) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasAnimated, index])

  return (
    <div
      ref={ref}
      className={hasAnimated 
        ? "" 
        : `transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`
      }
      style={hasAnimated ? {} : { transitionDelay: `${index * 100}ms` }}
    >
      <AccordionItem
        value={`item-${index}`}
        className="bg-white backdrop-blur-sm border-[3px] border-black rounded-2xl px-6 md:px-10 py-3 shadow-xl hover:shadow-2xl transition-all data-[state=open]:border-[#f1c33a] !border-b-[3px]"
      >
        <AccordionTrigger className="text-left text-black hover:text-[#c648d7] py-4 md:py-5 text-lg md:text-xl font-bold hover:no-underline">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className="text-black/70 pb-4 md:pb-5 text-base md:text-lg leading-relaxed">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="relative bg-gradient-to-b from-[#c648d7] to-[#a038b7]">
      {/* Thick black separator */}
      <div className="h-3 bg-black w-full absolute top-0 left-0"></div>
      
      {/* Curved white section */}
      <div className="bg-[#c648d7] rounded-t-[150px] md:rounded-t-[250px] pt-24 pb-24 px-4">
        {/* Inner curved content area */}
        <div className="bg-gradient-to-b from-[#e8d5f0] to-[#f0e0f5] rounded-[100px] md:rounded-[150px] p-8 md:p-16">
          <div className="max-w-5xl mx-auto">
            {/* Wooden Board Header */}
            <WoodenBoardTitle>
              Battle <span className="text-[#fff]">Questions</span>
            </WoodenBoardTitle>
            
            <p className="text-[#8a5831] text-lg text-center mb-16 font-semibold">Everything you need to know</p>

            <Accordion type="single" collapsible className="space-y-6 px-1">
              {faqs.map((faq, index) => (
                <AnimatedFAQItem key={index} faq={faq} index={index} />
              ))}
            </Accordion>

            <div className="mt-16 text-center">
              <p className="text-[#073f90] text-base md:text-lg mb-3 font-semibold">Still have questions?</p>
              <a href="mailto:support@nerdsaiclash.com" className="text-[#f1c33a] text-lg md:text-xl font-black hover:underline">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
