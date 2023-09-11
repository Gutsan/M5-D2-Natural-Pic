import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>NATURAL PIC</header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Favoritos">Favoritos</Link>
      </nav>
    </>
  );
};
