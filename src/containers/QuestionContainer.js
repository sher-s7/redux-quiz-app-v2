import { connect } from "react-redux";
import { setAnswer } from "../actions/answers_actions";
import Question from "../components/Question";

const mapStateToProps = (state, ownProps) => ({
  currentAnswer: state.answers[ownProps.id] || null,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAnswer: (answer) => dispatch(setAnswer(answer, ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
