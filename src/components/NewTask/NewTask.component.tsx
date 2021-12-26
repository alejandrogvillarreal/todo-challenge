import React, { useState, useEffect } from "react";

import NewTaskContent from "./NewTask.content";

// types
import { Priority } from "../../types/priority";
import { State } from "../../types/state";
import { Task } from "../../types/task";

// data
import priorities from "../../data/priority.json";
import states from "../../data/state.json";

interface Props {
  handleClose: (refresh?: boolean, task?: Task) => void;
  taskSelected: Task | null;
  newTaskId: number;
}

export default (props: Props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority | null>(null);
  const [state, setState] = useState<State | null>(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (props.taskSelected) {
      setTitle(props.taskSelected.title);
      setPriority(props.taskSelected.priority);
      setState(props.taskSelected.state);
      setDescription(props.taskSelected.description);
    }
  }, [props.taskSelected]);

  const saveAndClose = () => {
    if (title && priority && state) {
      const newTask: Task = {
        id: props.taskSelected ? props.taskSelected.id : props.newTaskId,
        title: title,
        priority: priority,
        state: state,
        description: description,
      };

      props.handleClose(true, newTask);
    }
  };

  const handleClose = () => {
    props.handleClose();
  };

  return (
    <NewTaskContent
      title={title}
      setTitle={setTitle}
      priority={priority}
      setPriority={setPriority}
      state={state}
      setState={setState}
      description={description}
      setDescription={setDescription}
      priorities={priorities}
      states={states}
      isEdit={Boolean(props.taskSelected)}
      saveAndClose={saveAndClose}
      handleClose={handleClose}
    />
  );
};
