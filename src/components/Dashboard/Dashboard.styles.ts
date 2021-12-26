import styled from "styled-components";
import { Chip } from "@material-ui/core";
import { DARK_GRAY } from "../../styles";

export const ExternalContainer = styled.div`
  width: 95%;
  margin: auto;
`;

export const SubTitle = styled.h3<any>`
  font-size: 22px;
  color: black;
  text-align: center;
  margin: 0;
`;

export const Square = styled.div<any>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : "1")};
  flex-direction: column;
  box-shadow: 0px 1px 5px 0px ${DARK_GRAY};
  border-radius: 4px;
  padding: 15px;
  margin: 20px;
`;

export const BoxContainer = styled.div<any>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : "1")};
  flex-direction: ${(props) => props.direction};
  height: 100%;
  justify-content: ${(props) => props.justify};
`;


export const ResponsiveCointainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const BorrowedBooksContainer = styled.div`
  height: 100%;
`;

export const ChipWhiteText = styled(Chip)`
  && {
    color: white;
  }
`;
