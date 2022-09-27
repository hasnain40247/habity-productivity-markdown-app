import createDataContext from "./createDataContext";
const markReducer = (state, action) => {
  switch (action.type) {
    case "markdown":
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
};






const setMarkDown = (dispatch) => {
  return async (markdown) => {
   
dispatch({type:"markdown", payload: markdown})
  };
};
export const { Context, Provider } = createDataContext(
  markReducer,
  {  setMarkDown},
  { title:"", markdown:"" }
);