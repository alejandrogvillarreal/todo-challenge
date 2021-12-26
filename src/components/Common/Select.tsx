import React, { useMemo, useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { languageContext } from "../../config/language";

import { InputContainer } from "./inputs";

interface Props {
  autoFocus?: boolean;
  color?: "primary" | "secondary";
  disabled?: boolean;
  fullWidth?: boolean;
  id: string;
  label: string;
  name: string;
  onChange: (newValue: any) => void;
  value: any;
  options: any[];
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);
  
  const handleChange = (event: any) => {
    const value = event.target.value;
    const objectSelected = props.options.find((option) => option.id === value);
    props.onChange(objectSelected || null);
  };

  const value = useMemo(() => {
    return props.value?.id || "";
  }, [props.value]);

  return (
    <InputContainer>
      <FormControl variant="outlined" fullWidth={true}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          fullWidth={props.fullWidth || true}
          id={props.id}
          label={props.label}
          name={props.name}
          autoFocus={props.autoFocus || false}
          color={props.color || "primary"}
          disabled={props.disabled || false}
          onChange={handleChange}
          value={value}
        >
          <MenuItem value={""}>
            <em>{lang.none}</em>
          </MenuItem>
          {props.options.map((option, i) => (
            <MenuItem key={i} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </InputContainer>
  );
};
