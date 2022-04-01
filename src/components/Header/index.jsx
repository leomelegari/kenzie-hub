import { HeaderDiv } from "./style";

const Header = ({ name, module }) => {
  return (
    <HeaderDiv>
      <h1>Olá, {name}!</h1>
      <span>{module}</span>
    </HeaderDiv>
  );
};

export default Header;
