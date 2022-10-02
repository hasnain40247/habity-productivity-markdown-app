import createDataContext from "./createDataContext";
import { v4 as uuidv4 } from 'uuid';

const markReducer = (state, action) => {
  switch (action.type) {
    case "markdown":{
     return
     };

    case "title": {
      const index = state.findIndex(e => e.id ===  action.payload.id);                                                                   
      const newArray = [...state]; //making a new array
      newArray[index].title = action.payload.title//changing value in the new array
      return newArray
     };
      
      case "addPage":
        return [...state, action.payload]
    default:
      return state;
  }
};






const setMarkDown = (dispatch) => {
  return async (markdown,id) => {
    console.log("markdown");
    console.log(markdown)
    console.log("id",id);
   
  };
};

const setTitle = (dispatch) => {
  return async (title,id) => {
    console.log("TITITITITITI")
   console.log(title,id);
   dispatch({type:"title",payload: {id:id,title:title}})
  };
};


const addPage=(dispatch)=>{
  return async ()=>{
console.log(uuidv4())
let newPage={
  id: uuidv4(),
  title:"New Page",
  markdown: ""
}
dispatch({type:"addPage",payload: newPage})
  }
}
export const { Context, Provider } = createDataContext(
  markReducer,
  {setMarkDown, addPage, setTitle},
  []
);