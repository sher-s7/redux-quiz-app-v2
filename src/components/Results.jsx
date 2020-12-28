import Result from "./Result";

const Results = ({ questionList, answers }) => {
  return (
    <ul>
      {questionList.map((question, index) => (
        <Result key={index} question={question} answer={answers[index]} />
      ))}
    </ul>
  );
};

export default Results;
