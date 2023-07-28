import React from "react";
import Button from "../UI/Button";
import classes from "./QuizSettings.module.css";

const QuizSettings = ({ selectedDifficulty, selectedAbilities, onSettingsSelected, handleDifficultyChange, handleAbilityToggle, difficultyOptions,abilitiesOptions  }) => {


const settingsHandeler =() =>{
  onSettingsSelected()
}


  return (
    <>
      <h2>Quiz Settings</h2>
      <div>
        <p>Select Difficulty:</p>
        {difficultyOptions.map((option) => (
          <Button
            key={option.level}
            onClick={() => handleDifficultyChange(option.level)}
            className={selectedDifficulty === option.level ? classes.selected : null}
          >
            {option.level}
          </Button>
        ))}
        <p>Difficulty affects Ziltoid's patience and tolerance</p>
        <p>Less time and less mistakes!</p>

      </div>

      <Button onClick={settingsHandeler} className={classes.button}>Apply Settings</Button>
    </>
  );
};

export default QuizSettings;
