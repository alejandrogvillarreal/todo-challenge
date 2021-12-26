import React, { useContext } from "react";
import { languageContext } from "../../config/language";
import ModalActions from "../Common/ModalActions";
import TextField from "../Common/TextField";
import Select from "../Common/Select";

import { FiltersContainer } from "./NewTask.styles";

// types
import { Priority } from "../../types/priority";
import { State } from "../../types/state";

interface Props {
  title: string;
  setTitle: (value: string) => void;
  priority: Priority | null;
  setPriority: (value: Priority | null) => void;
  state: State | null;
  setState: (value: State | null) => void;
  description: string;
  setDescription: (value: string) => void;
  priorities: Priority[];
  states: State[];
  isEdit: boolean;
  saveAndClose: () => void;
  handleClose: () => void;
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <div>
      <FiltersContainer>
        <TextField
          id={"new_task_title"}
          label={lang.title}
          name={"title"}
          value={props.title}
          onChange={props.setTitle}
          disabled={props.isEdit}
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
      <FiltersContainer>
        <TextField
          id={"new_task_description"}
          label={lang.description}
          name={"description"}
          value={props.description}
          onChange={props.setDescription}
          disabled={props.isEdit}
          multiline
          rows={4}
        />
      </FiltersContainer>
      <ModalActions
        handleClose={props.handleClose}
        handleSave={props.saveAndClose}
        disabled={false}
      />
    </div>
  );
};
