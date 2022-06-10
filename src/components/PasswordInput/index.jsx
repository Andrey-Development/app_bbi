import { Input } from "./styled";

export function PasswordInput(placeholder, onChange, value) {
  return (
    <Input
      type="password"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
