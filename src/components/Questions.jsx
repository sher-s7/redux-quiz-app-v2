/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import QuestionContainer from "../containers/QuestionContainer";

const Questions = ({
  questionList,
  loading,
  error,
  currentQuestionIndex,
  fetchQuestions,
}) => {
  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error != null) return <p className="error">{error}</p>;
  return (
    <div className="question-list">
      <QuestionContainer
        key={currentQuestionIndex}
        question={
          questionList[currentQuestionIndex]
            ? questionList[currentQuestionIndex].question
            : ""
        }
        id={currentQuestionIndex}
      />
    </div>
  );
};

export default Questions;
