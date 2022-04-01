import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Button from "../Button";
import { NavBar } from "./style";

const Header = ({ setAuth }) => {
  const clear = () => {
    localStorage.clear();
    setAuth(false);
  };

  return (
    <NavBar>
      <img src={Logo} alt="" />
      <Link to="/">
        <Button onClick={clear}>Sair</Button>
      </Link>
    </NavBar>
  );
};

export default Header;
