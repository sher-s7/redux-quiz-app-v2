import { connect } from "react-redux";
import { resetQuiz } from "./actions/quiz_actions";
import QuestionNavContainer from "./containers/QuestionNavContainer";
import QuestionsContainer from "./containers/QuestionsContainer";
import ScoreContainer from "./containers/ScoreContainer";
import SubmitContainer from "./containers/SubmitContainer";

function App({ score, reset }) {
  if (score === null) {
    return (
      <div className="App">
        <QuestionsContainer />
        <div>
          <QuestionNavContainer />
          <SubmitContainer />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <ScoreContainer />
        <button onClick={() => reset()}>Play again</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  score: state.score,
});
const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetQuiz()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
