import { CheckboxType } from "./form-builder";

type Props = {
  label: CheckboxType["label"];
};

const Checkbox = ({ label }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox"></input>
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;
