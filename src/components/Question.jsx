const Question = ({ question, id, currentAnswer, setAnswer }) => {
  const formattedQuestionObj = {
    __html: question,
  };
  return (
    <div>
      <p dangerouslySetInnerHTML={formattedQuestionObj} />
      <label htmlFor="true">
        <input
          type="radio"
          name={`answer${id}`}
          id={`true${id}`}
          value="True"
          defaultChecked={
            currentAnswer ? currentAnswer.userAnswer === "True" : false
          }
          onClick={() => setAnswer("True")}
        />
        True
      </label>
      <label htmlFor="false">
        <input
          type="radio"
          name={`answer${id}`}
          id={`false${id}`}
          value="False"
          defaultChecked={
            currentAnswer ? currentAnswer.userAnswer === "False" : false
          }
          onClick={() => setAnswer("False")}
        />
        False
      </label>
    </div>
  );
};
export default Question;
