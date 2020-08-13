import * as React from "react";
import { Label, Input, Indicator } from "../styles/RadioButton.style";

interface RadioButtonProps {
  value?: any,
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
  name?: any,
  id: any,
  checked: boolean
}

const RadioButton: React.FC<RadioButtonProps> = ({ value, onChange, name, id, checked }) => {
  return (
    <Label htmlFor={id}>
      <Input
        id={id}
        type="radio"
        role="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <Indicator />
    </Label>
  );
};

export default RadioButton;
