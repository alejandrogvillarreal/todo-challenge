import React, { Fragment } from "react";

import TaskComponent from "../Common/Task";
import FiltersComponent from "./Filters/Filters.component";

// types
import { Task } from "../../types/task";

interface Props {
  tasks: Task[];
  filteredTasks: Task[];
  setFilteredTasks: (tasks: Task[]) => void;
  handleEdit: (task: Task) => void;
  handleDelete: (task: Task) => void;
}

export default (props: Props) => {
  return (
    <Fragment>
      <FiltersComponent
        tasks={props.tasks}
        setFilteredTasks={props.setFilteredTasks}
      />
      {props.filteredTasks.map((task, i) => (
        <TaskComponent
          key={i}
          task={task}
          handleEdit={props.handleEdit}
          handleDelete={props.handleDelete}
        />
      ))}
    </Fragment>
  );
};
