/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import "./cardImg.css";
import { IconHeart, IconHeartFilled} from "@tabler/icons-react";
import { ContextFAV } from "../context/contexFavorite";
export const CardImg = ({ datImg }) => {
  const [isLiked, setIsLiked] = useState(datImg.liked);
  const { dataFav, SetDataFav } = useContext(ContextFAV);
  const handlerClick = () => {
    setIsLiked(!isLiked);
    console.log(datImg)
    SetDataFav(datImg)
    console.log(dataFav)
  };

  return (
    <>
      <div className="Card-Img" onDoubleClick={handlerClick}>
        <img src={datImg.src.medium} alt={datImg.alt} />
        <div className="pie-photo">
          <h4> 📸{datImg.photographer}</h4>
          {isLiked ? (
            <IconHeartFilled className="isLiked" onClick={handlerClick} />
          ) : (
            <IconHeart onClick={handlerClick} />
          )}
        </div>
      </div>
    </>
  );
};
