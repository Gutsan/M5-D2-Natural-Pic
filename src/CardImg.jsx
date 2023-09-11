import { useState } from "react"
import "./cardImg.css"
import { dataImg } from "./dataImg"
import { IconHeart,
    IconHeartFilled} from '@tabler/icons-react';

export const CardImg=({datImg})=>{
const [isLiked,setIsLiked]=useState(datImg.liked)

const handlerClick=()=>{
    setIsLiked(!isLiked)
}

return (<>
<div className="Card-Img" onDoubleClick={handlerClick}>
<img src={datImg.src.original} alt={datImg.alt} />
<div className="pie-photo">
<h4>{datImg.photographer}</h4>
{isLiked?<IconHeartFilled className="isLiked" onClick={handlerClick}/>:<IconHeart onClick={handlerClick}/>}
</div>
</div>

</>)

}