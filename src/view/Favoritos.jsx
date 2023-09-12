/* eslint-disable react-hooks/exhaustive-deps */
import { useContext} from "react";
import { ContextFAV } from "../context/contexFavorite";
import { CardImg } from "../Components/CardImg";
import "./Home.css"
export const Favorite = () => {
  const { dataFav, SetDataFAV } = useContext(ContextFAV);

  return (
    <main>
      {dataFav.map((dat, index) => (
        <CardImg key={index} datImg={dat} />
      ))}
    </main>
  );
};