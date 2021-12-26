import React, { useContext, useMemo } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

import { languageContext } from "../../config/language";

import CircleStateColors from "../Common/CircleStateColors";
import {
  SubTitle,
  Square,
  BorrowedBooksContainer,
  ChipWhiteText,
} from "./Dashboard.styles";

// types
import { Task } from "../../types/task";

interface Props {
  tasks: Task[];
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  const currentTasks = useMemo(() => {
    return {
      new: props.tasks.filter((t) => t.state.id === 1).length,
      inProcess: props.tasks.filter((t) => t.state.id === 2).length,
      finished: props.tasks.filter((t) => t.state.id === 3).length,
    };
  }, [props.tasks]);

  return (
    <Square>
      <SubTitle>{lang.currentTasks}</SubTitle>
      <BorrowedBooksContainer>
        <List>
          <ListItem>
            <CircleStateColors id={"1"} size={15} />
            <ListItemText>{lang.new}</ListItemText>
            <ChipWhiteText label={currentTasks.new} color="primary" />
          </ListItem>
          <ListItem>
            <CircleStateColors id={"2"} size={15} />
            <ListItemText>{lang.inProcess}</ListItemText>
            <ChipWhiteText label={currentTasks.inProcess} color="primary" />
          </ListItem>
          <ListItem>
            <CircleStateColors id={"3"} size={15} />
            <ListItemText>{lang.finished}</ListItemText>
            <ChipWhiteText label={currentTasks.finished} color="primary" />
          </ListItem>
        </List>
      </BorrowedBooksContainer>
    </Square>
  );
};
