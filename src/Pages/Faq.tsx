import React, { useState } from "react"; // Make sure to import React like this
import "./pagesStyle/Faq.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import faqs from "./faqs";

const Faq = () => {
  const [openId, setOpenId] = useState(-1);

  const handleClick = (id: number) => {
    setOpenId(openId === id ? -1 : id);
  };

  return (
    <section className="faq-container">
      <h2>FAQ</h2>
      {faqs.map(({ id, question, answer }) => (
        <React.Fragment key={id}>
          <div
            className={`box-faq ${
              openId === id ? "box-faq-active" : "no-active-heading"
            }`}
            onClick={() => handleClick(id)}
          >
            <h5>
              <span className="info-question">{id}.</span> {question}
            </h5>
            {openId === id ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          <p
            className={`faq-answer ${openId === id ? "faq-answer-active" : ""}`}
          >
            {answer}
          </p>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Faq;
