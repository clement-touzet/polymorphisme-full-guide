import { ButtonType } from "./form-builder";

type Props = {
  text: ButtonType["text"];
};

const Button = ({ text }: Props) => {
  return <input type="button" value={text}></input>;
};

export default Button;
