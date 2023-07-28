import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./QuizQuestion.module.css";

const QuizQuestion = ({ question, options, onAnswerSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = (selectedOption) => {
    onAnswerSelect(selectedOption);
    setSelectedOption(null);
  };

  return (
    <>
      <p className={classes.questions}>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Button
              className={`${selectedOption === option ? classes.selected : ""} ${
                classes.button
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {String.fromCharCode(65 + index)}. {option}
            </Button>
          </li>
        ))}
      </ul>
      {selectedOption && (
        <Button className={classes.next} onClick={() => handleSubmitAnswer(selectedOption)}>Next</Button>
      )}
      {!selectedOption && (
        <div className={classes.placeholder}></div>
      )}
    </>
  );
};

export default QuizQuestion;
