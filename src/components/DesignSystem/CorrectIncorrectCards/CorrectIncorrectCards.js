import React from "react";
import { ExampleCard } from "../ExampleCard";
import "./CorrectIncorrectCards.scss";

const CorrectIncorrectCards = ({
  correctText,
  correctCaption,
  incorrectText,
  incorrectCaption
}) => (
  <div className="correctIncorrectCards">
    <div className="correctIncorrectCards__card correctIncorrectCards__card--correct">
      <ExampleCard isCorrect text={correctText} caption={correctCaption} />
    </div>

    <div className="correctIncorrectCards__card correctIncorrectCards__card--incorrect">
      <ExampleCard
        isCorrect={false}
        text={incorrectText}
        caption={incorrectCaption}
      />
    </div>
  </div>
);

export default CorrectIncorrectCards;
