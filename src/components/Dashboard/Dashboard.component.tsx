import React, { useState } from "react";

import DashboardContent from "./Dashboard.content";

// types
import { Task } from "../../types/task";

interface Props {}

export default (props: Props) => {
  const [openTask, setOpenTask] = useState<any>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskSelected, setTaskSelected] = useState<Task | null>(null);

  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  // use this to create tasks with != ids
  const [ids, setIds] = useState<number>(0);

  const editTask = (task: Task) => {
    const foundIndex = tasks.findIndex((t) => t.id === task.id);
    const duplicatedTasks = [...tasks];
    duplicatedTasks[foundIndex] = task;
    setTasks(duplicatedTasks);
  };

  const addNewTask = (task: Task) => {
    const newTasks = [...tasks, task];
    setIds(ids + 1);
    setTasks(newTasks);
  };

  const deleteTask = (task: Task) => {
    const tasksWithoutDeleted = tasks.filter((t) => t.id !== task.id);
    setTasks(tasksWithoutDeleted);
  };

  const handleOpenNewTask = () => {
    setOpenTask(true);
  };

  const handleOpenEditTask = (task: Task) => {
    setOpenTask(true);
    setTaskSelected(task);
  };

  const handleCloseTask = (refresh = false, task?: Task) => {
    setOpenTask(false);
    if (refresh && task) {
      taskSelected && editTask(task);
      !taskSelected && addNewTask(task);
    }
    setTaskSelected(null);
  };

  return (
    <DashboardContent
      tasks={tasks}
      filteredTasks={filteredTasks}
      setFilteredTasks={setFilteredTasks}
      deleteTask={deleteTask}
      openTask={openTask}
      handleOpenNewTask={handleOpenNewTask}
      handleOpenEditTask={handleOpenEditTask}
      handleCloseTask={handleCloseTask}
      taskSelected={taskSelected}
      ids={ids}
    />
  );
};
