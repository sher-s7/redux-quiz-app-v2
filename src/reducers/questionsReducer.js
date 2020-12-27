import {
  GET_QUESTIONS,
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_SUCCESS,
  SET_QUESTION_INDEX,
} from "../actions/questions_actions";

const initialState = {
  list: [],
  loading: false,
  error: null,
  currentQuestionIndex: 0,
};
const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, list: [], loading: true, error: null };
    case GET_QUESTIONS_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
        list: [],
        loading: false,
        error: action.payload,
      };
    case SET_QUESTION_INDEX:
      return { ...state, currentQuestionIndex: action.payload };
    default:
      return state;
  }
};

export default questionsReducer;
