import axios from "axios";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";

export const SET_QUESTION_INDEX = "SET_QUESTION_INDEX";

const API = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean";

export const getQuestions = () => {
  return (dispatch) => {
    dispatch({ type: GET_QUESTIONS });
    axios
      .get(API)
      .then((res) =>
        dispatch({ type: GET_QUESTIONS_SUCCESS, payload: res.data.results })
      )
      .catch((err) =>
        dispatch({
          type: GET_QUESTIONS_FAILURE,
          payload: "Oops... There was an error while fetching the questions",
        })
      );
  };
};

export const setQuestionIndex = (index) => {
  return {
    type: SET_QUESTION_INDEX,
    payload: index,
  };
};
