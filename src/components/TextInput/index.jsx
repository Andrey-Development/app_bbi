import { Input } from "./styled";

export function TextInput(placeholder, onChange, value) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
