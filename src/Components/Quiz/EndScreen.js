import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Launch from "../../Assets/Images/Outcome/Launch.png";
import Coffee from "../../Assets/Images/Outcome/CoffeeMug.png";
import classes from "./EndScreen.module.css"

const EndScreen = ({ onClose, onRestart, correctAnswers, isWin }) => {
  console.log("correctAnswers",correctAnswers)
  console.log("isWin",isWin)

  const handleRestart = () => {
    onRestart();
    onClose(); 
  };

  const imgSrc = isWin ? Coffee : Launch;
  const winMessage = isWin ? "Behold a cup of celestial coffee" : "Feeble attempt puny human. Better luck next time! If you survive";

  return (
    <Modal onClose={onClose}>
      <h2>You finished the Quiz!</h2>
      <p>{correctAnswers} out of 8</p>
      <img className= {classes.endImg} src={imgSrc} alt={winMessage} />
      <p>{winMessage}</p>
      <Button onClick={handleRestart}>Restart Quiz</Button>
    </Modal>
  );
};

export default EndScreen;
