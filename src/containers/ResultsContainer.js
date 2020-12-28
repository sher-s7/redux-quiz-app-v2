import { connect } from "react-redux";
import Results from "../components/Results";

const mapStateToProps = (state) => ({
  questionList: state.questions.list,
  answers: state.answers,
});

export default connect(mapStateToProps)(Results);
