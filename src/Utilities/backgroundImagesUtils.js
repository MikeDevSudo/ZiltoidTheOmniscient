// backgroundImagesUtils.js

// Import all the progress images using require
const Progress0 = require("../Assets/Images/Progress/Progress-0.png");
const Progress1 = require("../Assets/Images/Progress/Progress-1.png");
const Progress2 = require("../Assets/Images/Progress/Progress-2.png");
const Progress3 = require("../Assets/Images/Progress/Progress-3.png");
const Progress4 = require("../Assets/Images/Progress/Progress-4.png");
const Progress5 = require("../Assets/Images/Progress/Progress-5.png");
const Progress6 = require("../Assets/Images/Progress/Progress-6.png");
const Progress7 = require("../Assets/Images/Progress/Progress-7.png");
const Progress8 = require("../Assets/Images/Progress/Progress-8.png");
const ProgressLose = require("../Assets/Images/Progress/Progress-lose.png");
const ProgressWin = require("../Assets/Images/Progress/Progress-win.png");

const progressImages = [
  Progress0,
  Progress1,
  Progress2,
  Progress3,
  Progress4,
  Progress5,
  Progress6,
  Progress7,
  Progress8,
  ProgressLose,
  ProgressWin,
];

export const getBackgroundImageURL = (currentQuestion, isWin, quizCompleted, quizStarted) => {
  if (quizCompleted) {
    return isWin ? progressImages[10] : progressImages[9];
  } else if (!quizStarted) {
    return progressImages[0];
  } else if (currentQuestion < progressImages.length - 1) {
    return progressImages[currentQuestion + 1];
  }
};

export default progressImages;
