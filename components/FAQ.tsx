"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Where is Hero Homes Lucknow located?",
    answer: "Hero Homes Lucknow is located on Kanpur Road, one of the fastest-growing corridors in Lucknow.",
  },
  {
    question: "What property types are available?",
    answer: "The project offers premium apartments with modern amenities.",
  },
  {
    question: "Is the project RERA approved?",
    answer: "Official RERA details will be updated once available.",
  },
  {
    question: "How can I book a site visit?",
    answer: "Fill out the enquiry form or contact us directly to schedule your visit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 rounded-2xl border"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left font-semibold"
            >
              {faq.question}
              <span>{open === index ? "−" : "+"}</span>
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}