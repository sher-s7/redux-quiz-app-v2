const QuestionNav = ({
  currentQuestionIndex,
  questionListLength,
  setQuestionIndex,
}) => {
  const incrementQuestion = (n) => {
    if (n === 1 && currentQuestionIndex < questionListLength - 1) {
      setQuestionIndex(currentQuestionIndex + n);
    }
    if (n === -1 && currentQuestionIndex > 0) {
      setQuestionIndex(currentQuestionIndex + n);
    }
  };
  return (
    <div className="question-list--navBtns">
      <button
        id="prev"
        disabled={currentQuestionIndex <= 0}
        style={{ display: currentQuestionIndex <= 0 ? "none" : "initial" }}
        onClick={() => incrementQuestion(-1)}
      >
        Previous
      </button>
      <button
        id="next"
        disabled={currentQuestionIndex >= questionListLength - 1}
        style={{
          display:
            currentQuestionIndex >= questionListLength - 1 ? "none" : "initial",
        }}
        onClick={() => incrementQuestion(1)}
      >
        Next
      </button>
    </div>
  );
};

export default QuestionNav;
