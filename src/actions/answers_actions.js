export const SET_ANSWER = "SET_ANSWER";

export const setAnswer = (answer, id) => {
  return {
    type: SET_ANSWER,
    payload: answer,
    id,
  };
};
