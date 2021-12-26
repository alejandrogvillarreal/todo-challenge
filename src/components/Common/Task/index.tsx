import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { languageContext } from "../../../config/language";

import {
  TaskContainer,
  HeaderContainer,
  Label,
  Title,
  Description,
} from "./Task.styles";

// types
import { Task } from "../../../types/task";

interface Props {
  task: Task;
  handleEdit: (task: Task) => void;
  handleDelete: (task: Task) => void;
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <TaskContainer>
      <Card>
        <CardContent>
          <HeaderContainer>
            <div>
              <Label>
                {lang.priority}: <span>{props.task.priority.name}</span>
              </Label>
              <Label>
                {lang.state}: <span>{props.task.state.name}</span>
              </Label>
            </div>
            <div>
              <EditIcon
                onClick={() => props.handleEdit(props.task)}
              />
              <DeleteIcon
                onClick={() => props.handleDelete(props.task)}
                color={"error"}
              />
            </div>
          </HeaderContainer>
          <Label>
            {lang.title}: <Title>{props.task.title}</Title>
          </Label>
          <Label>{lang.description}: </Label>
          <Description>{props.task.description}</Description>
        </CardContent>
      </Card>
    </TaskContainer>
  );
};
