import ListTile from "./ListTile";
import { Context as MarkContext } from "../Context/MarkDownContext";
import { useContext } from "react";


const TitleScrollSection=({handleID})=>{
  const { state } = useContext(MarkContext);

return (
    <div className="titleScroll">
    {state.map((e) => {
      return (
        <ListTile id={e.id} name={e.title} handleID={handleID} key={e.id} />
      );
    })}
  </div>
)
}
export default TitleScrollSection