import { charStyles } from "../../Utilities/Helpers/EditorStyles";
import ToolBarButton from "./ToolBarButton";

const StyleButtons=({editor})=>{
    return(
        <div className="characterstyles">
        {charStyles.map((style) => {
          return (
            <ToolBarButton
              key={style}
              icon={style}
              editor={editor}
            />
          );
        })}
      </div> 
    )
}

export default StyleButtons