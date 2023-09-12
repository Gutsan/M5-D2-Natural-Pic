/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { createClient } from "pexels";
import { CardImg } from "../Components/CardImg";

export const Home = () => {
  const API_KEY = "ulIo70LyKuyLYFuV8YYlsKRQgfsg76JjEQpXyLOWTjpJmrHVdNYVaQEy";
  const { dataImg, SetDataImg } = useContext(ContextAPI);

  useEffect(() => {
    const client = createClient(API_KEY);
    const query = "Nature";

    client.photos
      .search({ query, per_page: 20 })
      .then((data) => {
        SetDataImg(data.photos);
      })
      .catch();
  }, [SetDataImg]);
  return (
    <>
      <h1>NATURAL PIC</h1>
      {dataImg.map((dat, index) => (
        <CardImg key={index} datImg={dat} />
      ))}
    </>
  );
};
