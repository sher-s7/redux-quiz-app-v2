import { connect } from "react-redux";
import { setScore } from "../actions/score_actions";
import Submit from "../components/Submit";

const mapStateToProps = (state) => ({
  questionList: state.questions.list,
  currentQuestionIndex: state.questions.currentQuestionIndex,
  answers: state.answers,
  score: state.score,
});

const mapDispatchToProps = (dispatch) => ({
  setScore: (score) => dispatch(setScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
