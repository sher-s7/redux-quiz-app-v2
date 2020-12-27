import { connect } from "react-redux";
import Score from "../components/Score";

const mapStateToProps = (state) => ({
  score: state.score,
  questionList: state.questions.list,
  answers: state.answers,
});

export default connect(mapStateToProps)(Score);
