import React from "react";
import styles from "./Question.module.css";
import Card from "./Card";
import { v4 as uuid } from "uuid";

const Question = () => {
  const qnaData = [
    { id: uuid(), ques: "What is online doctor consultation?", ans: "Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet." },
    { id: uuid(), ques: "How do I start online consultation with doctors on Practo?", ans: "Starting an online doctor consultation is very simple on Practo. Follow these 4 simple steps:    • Choose your health concern • Connect with a doctor within 2 minutes• Ask your queries to the doctor via audio or video call• Get a valid online doctor prescription and a 3-day free online doctor consultation"},
    { id: uuid(), ques: "Are your online doctors qualified?", ans: "We follow a strict verification process for every doctor providing online medical services on Practo. Our team manually verifies necessary documents, registrations, and certifications for every doctor." },
    { id: uuid(), ques: "What happens if I don’t get a response from a doctor?", ans: "In the unlikely event that an online doctor does not respond, you will be entitled to a 100% refund." },
    { id: uuid(), ques: "Is online doctor consultation safe and secured on Practo?", ans: "The privacy of our patients is critical to us, and thus, we are compliant with industry standards like ISO 27001. Rest assured that your online consultation with a doctor is completely safe and secured with 256-bit encryption." },
    { id: uuid(), ques: "Can I do a free online doctor consultation on Practo?", ans: "Avail a free online consultation with top doctors in India during the India Health Hour.  Click here for more details. We have the free questions service available on our health app only. Ask a question and get free online medical advice within 24 to 48 hours." },


  ];
  return (
    <div className={styles.wraper}>
      <h2>FAQs</h2>
      <div className={styles.card_container}>
        {qnaData.map((item) => <Card key={item.id} qnaData={item}/>)}
      </div>
    </div>
  );
};

export default Question;
