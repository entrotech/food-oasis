import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as faqService from "../services/faq-service";

const Faq = () => {
  // Load in current FAQs
  // If FAQs need to be updated, go into admin portal
  // This will only display the current FAQs

  const [faqs, setFaqs] = useState([]);
  const { t, i18n } = useTranslation("faq");
  const [message, setMessage] = useState("FAQs are loading...");

  useEffect(() => {
    async function fetchFaqs() {
      try {
        let twoLetterLanguage = i18n.language.slice(0, 2);
        const fetchedFaqs = await faqService.getAll({
          language: twoLetterLanguage
        });
        if (fetchedFaqs.length > 0) {
          setFaqs(fetchedFaqs);
        } else {
          setMessage("There are currently no FAQs.");
        }
      } catch {
        setMessage("Cannot fetch FAQs...");
        throw new Error("Cannot fetch FAQs...");
      }
    }
    fetchFaqs();
  }, [i18n.language]);

  return (
    <>
      <p>{t("title")}</p>
      {faqs[0] ? (
        faqs.map(faq => (
          <div key={faq.question}>
            <p>Question: {faq.question}</p>
            <p>Answer: {faq.answer}</p>
          </div>
        ))
      ) : (
        <div>{message}</div>
      )}
    </>
  );
};

export default Faq;