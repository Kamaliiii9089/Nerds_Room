import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4 bg-[#0a0f18]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-balance text-[#ffffff]">
            Battle <span className="text-[#f1c33a]">Questions</span>
          </h2>
          <p className="text-[#ffffff]/50 text-base">Everything you need to know</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#ffffff]/[0.02] border border-[#ffffff]/10 rounded-xl px-6 data-[state=open]:border-[#f1c33a]/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-[#ffffff] hover:text-[#f1c33a] py-5 text-sm hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#ffffff]/50 pb-5 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-[#ffffff]/40 text-sm mb-2">Still have questions?</p>
          <a href="mailto:support@nerdsaiclash.com" className="text-[#f1c33a] text-sm font-semibold hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
