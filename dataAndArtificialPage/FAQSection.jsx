import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are data and artificial intelligence services?",
    answer:
      "Data and artificial intelligence (AI) services encompass a wide range of solutions designed to help organizations leverage data and AI technologies to generate business value. The services typically include data management, analytics, machine learning, and AI-driven automation. RapidCode Data and AI Services can assist organizations in harnessing the potential of data and AI to drive innovation, improve efficiency, and achieve strategic objectives.",
  },
  {
    question: "How can AI-powered data services improve customer experiences?",
    answer:
      "AI-powered data services enhance customer experiences by personalizing interactions and increasing efficiency. They offer tailored marketing, modernized customer service, and predictive analytics, improving engagement and loyalty. AI can help direct customers to relevant solutions, reducing frustration and boosting satisfaction, leading to more personalized and efficient experiences.",
  },
  {
    question: "How does RapidCode support businesses in adopting generative AI?",
    answer:
      "RapidCode's AI-readiness program prepares businesses for generative AI integration, emphasizing innovation and data management, and is boosted by partnerships with leading cloud providers to provide advanced AI solutions. This initiative aims to drive AI innovation in enterprises, highlighting RapidCode's commitment to using AI for business growth.",
  },
];

function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          You have questions. We have answers.
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
