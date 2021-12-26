import React, { useContext } from "react";

import { languageContext } from "../../../config/language";

import TextField from "../../Common/TextField";
import Select from "../../Common/Select";
import { FiltersContainer, FiltersTitle } from "../Tasks.styles";

// types
import { Priority } from "../../../types/priority";
import { State } from "../../../types/state";

interface Props {
  title: string;
  setTitle: (value: string) => void;
  priority: Priority | null;
  setPriority: (value: Priority | null) => void;
  state: State | null;
  setState: (value: State | null) => void;
  priorities: Priority[];
  states: Priority[];
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);
  return (
    <div>
      <FiltersTitle>{lang.filterBy}: </FiltersTitle>
      <FiltersContainer>
        <TextField
          id={"new_task_title"}
          label={lang.title}
          name={"title"}
          value={props.title}
          onChange={props.setTitle}
        />
        <Select
          id={"new_task_priority"}
          label={lang.priority}
          name={"priority"}
          value={props.priority}
          options={props.priorities}
          onChange={props.setPriority}
        />
        <Select
          id={"new_task_state"}
          label={lang.state}
          name={"state"}
          value={props.state}
          options={props.states}
          onChange={props.setState}
        />
      </FiltersContainer>
    </div>
  );
};
