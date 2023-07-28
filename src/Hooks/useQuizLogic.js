import { useState, useEffect } from "react";
import QuizData from "../Data/QuizQuestions/QuizQuestions.json";
import { shuffleQuestionsAndAnswers } from "../Utilities/quizShuffle";

const useQuizLogic = (questionsToWin) => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizRestart, setQuizRestart] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isWin, setIsWin] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    setQuizQuestions(shuffleQuestionsAndAnswers(QuizData.questions));
    setShowInstructions(true);
  }, [quizRestart]);

  const handleAnswerSelect = (selectedOption) => {
    if (selectedOption !== null && selectedOption !== undefined && selectedOption !== "") {
      setUserAnswers([...userAnswers, selectedOption]);
      goToNextQuestion();
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateCorrectAnswers = () => {
    let correctCount = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
      if (userAnswers[i] === quizQuestions[i].correctAnswer) {
        correctCount++;
      }
    }
    return correctCount;
  };

  useEffect(() => {
    if (quizCompleted) {
      const correctCount = calculateCorrectAnswers();
      setCorrectAnswers(correctCount);
      setIsWin(correctCount >= questionsToWin);
    }
  }, [quizCompleted, questionsToWin]);

  const handleQuizRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setQuizRestart(!quizRestart);
    setIsWin(false);
  };

  const closeModalHandler = () => {
    setShowInstructions(false);
  };

  const gameOver = () => {
    setQuizCompleted(true);
    setIsWin(false);
  };

  return {
    quizQuestions,
    currentQuestion,
    userAnswers,
    quizCompleted,
    quizRestart,
    showInstructions,
    correctAnswers,
    isWin,
    handleAnswerSelect,
    handleQuizRestart,
    closeModalHandler,
    gameOver,
  };
};

export default useQuizLogic;
