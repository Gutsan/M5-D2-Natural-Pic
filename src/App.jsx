import "./App.css";

import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./view/Home";
import { Favorite } from "./view/Favoritos";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Favoritos" element={<Favorite />}/>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;
