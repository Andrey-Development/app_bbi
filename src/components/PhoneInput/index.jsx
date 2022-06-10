import { NumberFormat } from "./styled";
import NumberFormat from "react-number-format";

export function PhoneInput(placeholder, onChange, value) {
  return (
    <NumberFormat
      displayType={"text"}
      format="(__) _ ____-____"
      mask="_"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
