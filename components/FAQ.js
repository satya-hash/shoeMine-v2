import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What types of shoes do you offer?",
    answer:
      "At Shoemine, we offer a wide variety of shoes, including sports shoes, casual sneakers, formal shoes, sandals, and more. We carry brands like Nike, Adidas, Puma, and Reebok.",
  },
  {
    question: "How can I determine the right shoe size?",
    answer:
      "We provide a detailed size chart on each product page. If you’re unsure, you can refer to our 'Size Guide' or reach out to our customer support for assistance.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes, we offer free shipping on orders above $50. For orders below $50, standard shipping charges apply.",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "You can return or exchange items within 30 days of purchase, provided they are unused and in their original packaging. Visit our 'Returns and Exchanges' page for more details.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we’ll send you a tracking link via email. You can also track your order directly from your account on Shoemine.",
  },
];

const FAQ = () => {
  return (
    <div className='mx-auto w-full max-w-xl '>
        <h1 className="text-3xl text-center my-3">Freqently Asked Questions</h1>
      {faqs.map((faq, _) => (
        <Accordion type='single' collapsible key={_}>
          <AccordionItem value='item-1'>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
