import "./App.css";
import { useContext, useEffect } from "react";
import { ContextAPI } from "./context/ContextAPI";
import { createClient } from "pexels";

function App() {
  const API_KEY = "ulIo70LyKuyLYFuV8YYlsKRQgfsg76JjEQpXyLOWTjpJmrHVdNYVaQEy";
  const { dataImg, SetDataImg } = useContext(ContextAPI);

  useEffect(() => {
    const client = createClient(API_KEY);
    const query = "Nature";

    client.photos
      .search({ query, per_page: 20 })
      .then((data) => SetDataImg(data.photos));
  }, [SetDataImg]);

  return (
    <>
      <h1>{dataImg}</h1>
    </>
  );
}

export default App;
