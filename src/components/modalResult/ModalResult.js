import "./modalresult.scss";

function ModalResult({ answers, handleRestart }) {
  return (
    <div className="modal-result">
      {" "}
      <div>
        <h2>Quiz Results</h2>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>
              Question {index + 1}: {answer}
            </li>
          ))}
        </ul>
        <button className="custom-button" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default ModalResult;
