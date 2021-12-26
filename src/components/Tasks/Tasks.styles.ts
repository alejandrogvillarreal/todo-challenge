import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const FiltersTitle = styled.div`
  padding-top: 20px;
  padding-left: 20px;
`;