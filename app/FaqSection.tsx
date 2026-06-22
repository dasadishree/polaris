"use client";

import { useState } from "react";
import { faqItems } from "./faq-data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-section__title">FAQ</h2>

      <div className="faq-list">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <details
              key={item.question}
              className="faq-bubble"
              open={isOpen}
            >
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setOpenIndex(isOpen ? null : index);
                }}
              >
                {item.question}
              </summary>
              <p>{item.answer}</p>
            </details>
          );
        })}
      </div>
    </section>
  );
}
