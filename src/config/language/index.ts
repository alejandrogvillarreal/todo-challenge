import React from "react";

export const languages = {
  en: {
    task: "Task",
    tasks: "Tasks",
    title: "Title",
    priority: "Priority",
    state: "State",
    description: "Description",
    currentTasks: "Current tasks",
    new: "New",
    inProcess: "In process",
    finished: "Finished",
    newTask: "New task",
    editTask: "Edit task",
    save: "Save",
    cancel: "Cancel",
    none: "None",
    filterBy: "Filter by",
    oopsPageNotFound: "Oops page not found!"
  },
  es: {
    task: "Tarea",
    tasks: "Tareas",
    title: "Título",
    priority: "Prioridad",
    state: "Estado",
    description: "Descripción",
    currentTasks: "Tareas actuales",
    new: "Nueva",
    inProcess: "En proceso",
    finished: "Finalizada",
    newTask: "Nueva tarea",
    editTask: "Editar tarea",
    save: "Guardar",
    cancel: "Cancelar",
    none: "Ninguna",
    filterBy: "Filtrar por",
    oopsPageNotFound: "Oops página no encontrada!"
  }
};

export const languageContext = React.createContext(
  { languageContext: languages.es } // default value
);
