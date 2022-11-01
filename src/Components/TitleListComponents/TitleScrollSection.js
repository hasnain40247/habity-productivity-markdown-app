import { useSelector } from "react-redux";
import ListTile from "./ListTile";
import {TbMinusVertical} from"react-icons/tb"

const TitleScrollSection = ({ pages, selectedPage }) => {
  return (
    <div className="titleScroll">
      {pages.slice(0).reverse().map((e) => {
        return (
      
          <ListTile
            id={e.pageId}
            name={e.pageName}
            selectedPage={selectedPage}

            key={e.pageId}
          />
          
        );
      })}
    </div>
  );
};
export default TitleScrollSection;
