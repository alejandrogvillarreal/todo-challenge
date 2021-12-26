## Challenge - TODO list

Tasks must be created from a form and added to a TODO LIST.

## Installation

- Clone this repo and sub-modules with `git clone https://github.com/alejandrogvillarreal/todo-challenge.git`
- Run the command **npm install**.
- Run the command **npm start**.
- To access it go to http://localhost:3000

## Setup

### Folder Organization

```bash.
├── src
│   ├── /assets
│   ├── /components
│   ├── /config
│   ├── /data
│   ├── /routes
│   ├── /styles
│   ├── /types
│   ├── /view
│   └── index.tsx
└── package.json
```

- **src**: Folder where the source code of the front-end of the app will be.
- **assets**: Static files.
- **components**: REACT components.
- **config**: Configuration files.
- **data**: Information to fill out the ComboBox.
- **routes**: App routes.
- **styles**: Styles common to all.
- **types**: Typescript interfaces.
- **view**: Folder with the view of the application.
- **index**: Application entry.

## Scope

### It is expected to have

- A form to create tasks.
- A filter with the functionality of sorting by state.
- List containing the tasks created.

### Characteristics of a task

- Name
- Description
- Priority (high, medium and low)
- Status (new, in process, completed).
- Button to delete. 

### Functionality

- In each task it must be possible to change the status and priority.
- Tasks can be deleted.


## Technologies used

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/docs/getting-started.html)
- [React-router](https://github.com/ReactTraining/react-router)
- [MaterialUi](https://v4.mui.com/)

### Front-End Routes

- `/dashboard`: The home route has a list of all tasks.

## Ports

The frontend is raised on port 3000, therefore, to access it we enter http://localhost:3000/dashboard.