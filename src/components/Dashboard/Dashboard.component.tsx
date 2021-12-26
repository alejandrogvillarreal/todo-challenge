import React, { useState } from "react";

import DashboardContent from "./Dashboard.content";

// types
import { Task } from "../../types/task";

const mock: Task[] = [
  {
    id: 0,
    priority: { id: 1, name: "alta" },
    state: { id: 1, name: "nueva" },
    title: "Diseñar banner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reiciendis inventore dignissimos nemo laborum doloremque ratione laudantium atque quisquam earum esse excepturi eaque illo quas harum, omnis ipsum repellendus deserunt.",
  },
  {
    id: 1,
    priority: { id: 2, name: "media" },
    state: { id: 1, name: "nueva" },
    title: "Diseñar landig",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reiciendis inventore dignissimos nemo laborum doloremque ratione laudantium atque quisquam earum esse excepturi eaque illo quas harum, omnis ipsum repellendus deserunt.",
  },
  {
    id: 2,
    priority: { id: 1, name: "alta" },
    state: { id: 3, name: "finalizada" },
    title: "Diseñar formulario",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reiciendis inventore dignissimos nemo laborum doloremque ratione laudantium atque quisquam earum esse excepturi eaque illo quas harum, omnis ipsum repellendus deserunt.",
  },
];

interface Props {}

export default (props: Props) => {
  const [openTask, setOpenTask] = useState<any>(false);
  const [tasks, setTasks] = useState<Task[]>(mock);
  const [taskSelected, setTaskSelected] = useState<Task | null>(null);

  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  // esto lo uso para crear las tareas con != ids
  const [ids, setIds] = useState<number>(2);

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
