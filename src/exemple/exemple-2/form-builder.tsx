import { useState } from "react";
import FormElement from "./form-element";

export type CheckboxType = {
  element: "checkbox";
  label: string;
};
export type InputType = {
  element: "input";
  placeholder: string;
};
export type ButtonType = {
  element: "button";
  text: string;
};

export type FormElementType = { id: number } & (
  | CheckboxType
  | InputType
  | ButtonType
);

const formElements: FormElementType[] = [
  { id: 0, element: "input", placeholder: "test" },
  { id: 1, element: "checkbox", label: "J'accepte les emails promotionnels" },
  { id: 2, element: "button", text: "CLIQUE ICI" },
];

const FormBuilder = () => {
  const [forms, setForms] = useState<FormElementType[]>(formElements);

  return (
    <div>
      {forms.map((formElement) => (
        <>
          <FormElement key={formElement.id} formElement={formElement} />
        </>
      ))}
    </div>
  );
};

export default FormBuilder;
