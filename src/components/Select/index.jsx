import { SelectArea } from "./style";

const Select = ({ register, name, ...rest }) => {
  return <SelectArea {...rest} {...register(name)} />;
};

export default Select;