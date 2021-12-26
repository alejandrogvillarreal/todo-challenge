import React from "react";
import AddIcon from "@material-ui/icons/Add";

// components
import CommonTitle from "../Title";

// styled components
import { Header } from "./TableTitles.styles";
import { RoundButton50 } from "../buttons";

interface Props {
  title: string;
  buttonAction?: {
    buttonId: string;
    onClick: () => void;
    disabled?: boolean;
  };
}

export default (props: Props) => {
  const button = () => {
    const { buttonAction } = props;
    return (
      <RoundButton50
        variant="contained"
        id={buttonAction && buttonAction.buttonId}
        onClick={buttonAction && buttonAction.onClick}
        disabled={(buttonAction && buttonAction.disabled) || false}
      >
        <AddIcon />
      </RoundButton50>
    );
  };

  const { buttonAction, title } = props;
  return (
    <Header>
      <CommonTitle component="h1" variant="h4" text={title} />
      {buttonAction && button()}
    </Header>
  );
};
