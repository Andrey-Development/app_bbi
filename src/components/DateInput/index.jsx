import { NumberFormat } from "./styled";
import NumberFormat from "react-number-format";

export function DateInput(placeholder, onChange, value) {
  return (
    <NumberFormat
      displayType={"text"}
      format="##/##/####"
      placeholder={placeholder}
      mask={["D", "D", "M", "M", "A", "A", "A", "A"]}
      value={value}
      onChange={onChange}
    />
  );
}
