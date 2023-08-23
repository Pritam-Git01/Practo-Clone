import React, { useState } from "react";
import styles from "./review.module.css";
import Card from "../../atoms/ReviewCards/Card";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      id: 1001,
      text: "Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone. Thanks Practo for making it simple.",
    },
    {
      id: 1002,
      text: "Very good app. Well thought about booking/rescheduling/cancelling. Also doctor feedback management is good and describes all the basics in a good way.",
    },
    {
      id: 1003,
      text: "Very helpful. Far easier things doing on computer. Allow quick and easy search with speedy booking. Even maintains the history of doctor's visited.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };
  const carousel = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition:"all ease-in-out 0.3s"
  };
  return (
    <div className={styles.wraper}>
      <h1>What our users have to say</h1>

      <div className={styles.container}>
        {cardData.map((item) => (
          <Card slideStyle={carousel} key={item.id} data={item} />
        ))}
        <AiOutlineLeft onClick={prevSlide} className={styles.leftIcons} />
        <AiOutlineRight onClick={nextSlide} className={styles.rightIcons} />
      </div>
    </div>
  );
};

export default Review;
