import { InputArea } from "./style";

const Input = ({ label, register, name, ...rest }) => {
  return <InputArea {...rest} {...register(name)} />;
};

export default Input;
