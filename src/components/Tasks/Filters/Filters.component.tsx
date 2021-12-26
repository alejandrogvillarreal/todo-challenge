import React, { useState, useEffect } from "react";

import FiltersContent from "./Filters.content";

// types
import { Priority } from "../../../types/priority";
import { State } from "../../../types/state";
import { Task } from "../../../types/task";

// data
import priorities from "../../../data/priority.json";
import states from "../../../data/state.json";

interface Props {
  tasks: Task[];
  setFilteredTasks: (tasks: Task[]) => void;
}

export default (props: Props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority | null>(null);
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    props.setFilteredTasks(props.tasks);
  }, [props.setFilteredTasks, props.tasks]);

  useEffect(() => {
    let filteredTasks: Task[] = [...props.tasks];
    if (title !== "") {
      filteredTasks = filteredTasks.filter((t) => t.title.includes(title));
    }
    if (priority) {
      filteredTasks = filteredTasks.filter(
        (t) => t.priority.id === priority.id
      );
    }
    if (state) {
      filteredTasks = filteredTasks.filter((t) => t.state.id === state.id);
    }

    props.setFilteredTasks(filteredTasks);
  }, [props.tasks, title, priority, state]); // inputs change

  return (
    <FiltersContent
      title={title}
      setTitle={setTitle}
      priority={priority}
      setPriority={setPriority}
      state={state}
      setState={setState}
      priorities={priorities}
      states={states}
    />
  );
};
