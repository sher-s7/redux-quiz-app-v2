import { connect } from "react-redux";
import { setQuestionIndex } from "../actions/questions_actions";
import QuestionNav from "../components/QuestionNav";

const mapStateToProps = (state) => ({
  currentQuestionIndex: state.questions.currentQuestionIndex,
  questionListLength: state.questions.list.length,
});

const mapDispatchToProps = (dispatch) => ({
  setQuestionIndex: (index) => dispatch(setQuestionIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNav);
