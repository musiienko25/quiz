import React, { useState } from "react";
import "./quiz.scss";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import logo from "./images/logo.png";

const questions = [
  {
    question: "Select your baby’s gender",
    options: ["a)BOY", "b) GIRL"],
  },
  {
    question: "How old is your baby?",
    options: [
      "a) Under 6 months",
      "b) 6-8 months",
      "c) 8-10 months",
      "d) Over 10 months",
    ],
  },
  {
    question: "What is your baby's current weight?",
    options: [
      "a) Under 10 pounds",
      "b) 10-15 pounds",
      "c) 15-20 pounds",
      "d) Over 20 pounds",
    ],
  },
  {
    question: "Your baby's overall health and development?",
    options: [
      "a) Healthy and thriving",
      "b) Some health concerns",
      "c) Developmental delays or concerns",
    ],
  },
  {
    question: "Your baby's current feeding routine",
    options: [
      "a) Exclusively breastfed",
      "b) Exclusively formula-fed",
      "c) A combination of breast milk and formula",
    ],
  },
];

const images = [image1, image2, image1, image2, image1];

const Modal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion === images.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setBackgroundImage(images[currentQuestion + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setBackgroundImage(images[currentQuestion - 1]);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setBackgroundImage(images[0]);
  };

  if (currentQuestion === questions.length) {
    return (
      <div>
        <h2>Quiz Results</h2>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>
              Question {index + 1}: {answer}
            </li>
          ))}
        </ul>
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="modal">
      <div className="modal__header">
        <div className="modal__previous">
          {" "}
          {currentQuestion > 0 && (
            <button
              className="modal__previous__button"
              onClick={handlePrevious}
            >
              <svg
                className="custom-button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15.699 8.707"
              >
                <polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854" />
              </svg>
            </button>
          )}
        </div>
        <div>
          {" "}
          <img src={logo} alt="logo" className="modal__logo" />
        </div>
        <div className="modal__counter">
          <div className="modal__counter__curent-step">
            {currentQuestion + 1}
          </div>{" "}
          / <div className="modal__counter__all-steps">{questions.length}</div>
        </div>
      </div>
      <div
        className="modal__background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="modal__title">
          <h2>{currentQuestionData.question}</h2>
        </div>
      </div>
      <div className="modal__item-choice">
        {currentQuestionData.options.map((option, index) => (
          <div key={index} onClick={() => handleAnswer(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
