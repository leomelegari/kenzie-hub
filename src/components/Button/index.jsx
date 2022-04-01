import { ButtonModel } from "./style";

const Button = ({ children, ...rest }) => {
  return <ButtonModel {...rest}>{children}</ButtonModel>;
};

export default Button;