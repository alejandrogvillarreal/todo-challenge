import React from "react";
import TextField from "@material-ui/core/TextField";

import { InputContainer } from "./inputs";

interface Props {
  autoFocus?: boolean;
  color?: "primary" | "secondary";
  disabled?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  id: string;
  label: string;
  name: string;
  onChange: (newValue: any) => void;
  value: string;
}

export default (props: Props) => {
  const handleChange = (event: any) => {
    const value = event.target.value;
    props.onChange(value);
  };

  return (
    <InputContainer>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth={props.fullWidth || true}
        id={props.id}
        label={props.label}
        name={props.name}
        multiline={props.multiline}
        rows={props.rows}
        autoFocus={props.autoFocus || false}
        color={props.color || "primary"}
        disabled={props.disabled || false}
        onChange={handleChange}
        value={props.value}
      />
    </InputContainer>
  );
};
