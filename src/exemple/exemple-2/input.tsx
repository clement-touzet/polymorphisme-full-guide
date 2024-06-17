import { InputType } from "./form-builder";

type Props = {
  placeholder: InputType["placeholder"];
};

const Input = ({ placeholder }: Props) => {
  return <input type="text" placeholder={placeholder}></input>;
};

export default Input;
