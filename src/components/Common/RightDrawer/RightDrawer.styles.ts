import styled from 'styled-components';

import { YELLOW } from '../../../styles';

export const DrawerContainer = styled.div`
  width: 50vw;
  @media (max-width: 900px) {
    width: 90vw;
  }
`;

export const TitleContainer = styled.div`
  background-color: ${YELLOW};
  display: flex;
  align-items: center;
  color: white;
  padding-left: 20px;
  @media (min-width: 600px){
    height: 64px;
  }
  height: 56px;
`;

