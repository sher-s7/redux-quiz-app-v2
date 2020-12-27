const Submit = ({
  questionList,
  currentQuestionIndex,
  answers,
  score,
  setScore,
}) => {
  const handleSubmit = () => {
    let scoreCounter = 0;
    questionList.forEach((question, index) => {
      if (
        answers[index] &&
        question.correct_answer === answers[index].userAnswer
      ) {
        scoreCounter++;
      }
    });
    setScore(scoreCounter);
  };
  return (
    <button
      style={{
        display:
          currentQuestionIndex !== questionList.length - 1 ? "none" : "initial",
      }}
      onClick={handleSubmit}
    >
      SUBMIT
    </button>
  );
};
export default Submit;
