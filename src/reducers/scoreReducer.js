import { SET_SCORE } from "../actions/score_actions";

const scoreReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SCORE:
      return action.score;
    default:
      return state;
  }
};

export default scoreReducer;
