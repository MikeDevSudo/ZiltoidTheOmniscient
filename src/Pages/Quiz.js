import React, { useEffect, useState } from "react";
import Button from "../Components/UI/Button";
import Card from "../Components/UI/Card";
import classes from "./Quiz.module.css";
import { getBackgroundImageURL } from "../Utilities/backgroundImagesUtils";
import QuizSettings from "../Components/Quiz/QuizSettings";
import Timer from "../Components/UI/Timer";
import QuizQuestion from "../Components/Quiz/QuizQuestion";
import Instructions from "../Components/Quiz/Instructions";
import EndScreen from "../Components/Quiz/EndScreen";
import useQuizLogic from "../Hooks/useQuizLogic";
import useQuizSettings from "../Hooks/useQuizSettings";

const Quiz = ({ isMobile }) => {
  const {
    selectedDifficulty,
    selectedAbilities,
    settingsSelected,
    questionsToWin,
    handleDifficultyChange,
    handleAbilityToggle,
    handleApplySettings,
  } = useQuizSettings();

  const difficultyOptions = [
    { level: "easy", questionsToWin: 5 },
    { level: "medium", questionsToWin: 6 },
    { level: "hard", questionsToWin: 7 },
  ];

  const abilitiesOptions = ["Ability 1", "Ability 2", "Ability 3", "Ability 4"];

  const {
    quizQuestions,
    currentQuestion,
    quizCompleted,
    correctAnswers,
    isWin,
    handleAnswerSelect,
    handleQuizRestart,
    closeModalHandler,
    gameOver,
  } = useQuizLogic(questionsToWin);

  const [instructionsShown, setInstructionsShown] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const backgroundImage = getBackgroundImageURL(
    currentQuestion,
    isWin,
    quizCompleted,
    quizStarted
  );

  useEffect(() => {
    const nextImage = new Image();
    nextImage.src = getBackgroundImageURL(
      currentQuestion + 1,
      isWin,
      quizCompleted,
      quizStarted
    );
  }, [currentQuestion, isWin, quizCompleted, quizStarted]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const resetQuiz = () => {
    setInstructionsShown(false);
    setQuizStarted(false);
  };

  const handleTimerEnd = () => {
    gameOver();
  };

  const showInstructionsOrSettings = () => {
    if (quizStarted) return null;

    if (!instructionsShown) {
      return <Instructions onClose={() => setInstructionsShown(true)} />;
    }

    if (!settingsSelected) {
      return (
        <QuizSettings
          selectedDifficulty={selectedDifficulty}
          selectedAbilities={selectedAbilities}
          questionsToWin={questionsToWin}
          onSettingsSelected={handleApplySettings}
          handleDifficultyChange={handleDifficultyChange}
          handleAbilityToggle={handleAbilityToggle}
          difficultyOptions={difficultyOptions}
          abilitiesOptions={abilitiesOptions}
        />
      );
    }

    return null;
  };
  console.log("isMobile", isMobile);
  return (
    <React.Fragment>
      {!isMobile && (
        <div
          className={classes.progressContainer}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Card className={`${classes.content}`}>
            {showInstructionsOrSettings()}

            {settingsSelected && quizStarted && (
              <>
                <h2>Question {currentQuestion + 1}</h2>
                <Timer
                  selectedDifficulty={selectedDifficulty}
                  onTimerEnd={handleTimerEnd}
                />
                {quizQuestions[currentQuestion] && (
                  <QuizQuestion
                    question={quizQuestions[currentQuestion].question}
                    options={quizQuestions[currentQuestion].options}
                    onAnswerSelect={handleAnswerSelect}
                  />
                )}
              </>
            )}

            {quizCompleted && (
              <EndScreen
                onClose={closeModalHandler}
                onRestart={() => {
                  handleQuizRestart();
                  resetQuiz();
                }}
                correctAnswers={correctAnswers}
                isWin={isWin}
              />
            )}
          </Card>
          {!quizStarted && settingsSelected && (
            <Button onClick={handleStartQuiz}>Start Quiz</Button>
          )}
        </div>
      )}

      {isMobile && (
        <div className={`${classes.content}`}>
          {showInstructionsOrSettings()}

          {settingsSelected && quizStarted && (
            <>
              <h2>Question {currentQuestion + 1}</h2>
              <Timer
                selectedDifficulty={selectedDifficulty}
                onTimerEnd={handleTimerEnd}
              />
              {quizQuestions[currentQuestion] && (
                <>
                  <QuizQuestion
                    question={quizQuestions[currentQuestion].question}
                    options={quizQuestions[currentQuestion].options}
                    onAnswerSelect={handleAnswerSelect}
                  />
                    <img
                      src={backgroundImage}
                      alt="Background"
                      className={classes.backgroundImageMobile}
                    />
                
                </>
              )}
            </>
          )}

          {!quizStarted && settingsSelected && (
            <Button onClick={handleStartQuiz}>Start Quiz</Button>
          )}

          {quizCompleted && (
            <EndScreen
              onClose={closeModalHandler}
              onRestart={() => {
                handleQuizRestart();
                resetQuiz();
              }}
              correctAnswers={correctAnswers}
              isWin={isWin}
            />
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Quiz;
