import Button from "./button";
import Checkbox from "./checkbox";
import { FormElementType } from "./form-builder";
import Input from "./input";

type Props = {
  formElement: FormElementType;
};

const FormElement = ({ formElement }: Props) => {
  switch (formElement.element) {
    case "button":
      return <Button text={formElement.text} />;
    case "checkbox":
      return <Checkbox label={formElement.label} />;
    case "input":
      return <Input placeholder={formElement.placeholder} />;
    default:
      throw new Error("this element is not implemented");
  }
};

export default FormElement;
