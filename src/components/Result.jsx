const Result = ({ question, answer }) => {
  return (
    <li>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
      <div id="compareAnswers">
        <div>
          <span>Your answer: </span>
          <span
            className={
              answer && answer.userAnswer === question.correct_answer
                ? "correct"
                : "incorrect"
            }
          >
            {answer ? answer.userAnswer : "N/A"}
          </span>
        </div>
        <div>
          <span>Correct answer: </span>
          <span className="correct">{question.correct_answer}</span>
        </div>
      </div>
    </li>
  );
};

export default Result;
