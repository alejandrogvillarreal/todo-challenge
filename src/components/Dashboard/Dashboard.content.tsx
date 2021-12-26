import React, { useContext } from "react";

import { languageContext } from "../../config/language";
import TableTitles from "../Common/DashboardTitle";
import RightDrawer from "../Common/RightDrawer";
import NewTask from "../NewTask/NewTask.component";

//styles
import {
  ExternalContainer,
  BoxContainer,
  ResponsiveCointainer,
} from "./Dashboard.styles";

import Tasks from "../Tasks/Tasks.content";
import CurrentTasks from "./CurrentTasks";

// types
import { Task } from "../../types/task";

interface Props {
  tasks: Task[];
  filteredTasks: Task[];
  setFilteredTasks: (task: Task[]) => void;
  handleOpenNewTask: () => void;
  handleOpenEditTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  openTask: boolean;
  handleCloseTask: (refresh?: boolean, task?: Task) => void;
  taskSelected: Task | null;
  ids: number;
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  const buttonCreate = {
    buttonId: "create",
    onClick: props.handleOpenNewTask,
  };

  return (
    <ExternalContainer>
      <BoxContainer direction="row" justify={"space-between"}>
        <TableTitles title={lang.tasks} buttonAction={buttonCreate} />
      </BoxContainer>
      <ResponsiveCointainer>
        <BoxContainer direction="column" flex={2}>
          <Tasks
            tasks={props.tasks}
            filteredTasks={props.filteredTasks}
            setFilteredTasks={props.setFilteredTasks}
            handleEdit={props.handleOpenEditTask}
            handleDelete={props.deleteTask}
          />
        </BoxContainer>
        <BoxContainer direction="column" flex={1}>
          <CurrentTasks tasks={props.tasks} />
        </BoxContainer>
      </ResponsiveCointainer>

      <RightDrawer open={props.openTask} title={props.taskSelected ? lang.editTask : lang.newTask}>
        {props.openTask && (
          <NewTask
            handleClose={props.handleCloseTask}
            taskSelected={props.taskSelected}
            newTaskId={props.ids + 1}
          />
        )}
      </RightDrawer>
    </ExternalContainer>
  );
};
