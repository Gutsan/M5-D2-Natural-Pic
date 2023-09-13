/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import "./cardImg.css";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
// import { ContextFAV } from "../context/contexFavorite";
import { ContextAPI } from "../context/ContextAPI";
export const CardImg = ({ datImg, index }) => {
  const [isLiked, setIsLiked] = useState(datImg.liked);
  // const { dataFav, SetDataFav } = useContext(ContextFAV);
  const { dataImg, SetDataImg } = useContext(ContextAPI);

  const handlerClick = (e) => {
    e.preventDefault();

    const modfLiked = dataImg;
    // setIsLiked(modfLiked);
    modfLiked[index].liked = !modfLiked[index].liked;
    setIsLiked(datImg.liked);
    SetDataImg(modfLiked);
    console.log(datImg.liked);
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
