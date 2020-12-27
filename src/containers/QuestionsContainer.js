import { connect } from "react-redux";
import { getQuestions } from "../actions/questions_actions";
import Questions from "../components/Questions";

const mapStateToProps = (state) => ({
  questionList: state.questions.list,
  loading: state.questions.loading,
  error: state.questions.error,
  currentQuestionIndex: state.questions.currentQuestionIndex,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(getQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
