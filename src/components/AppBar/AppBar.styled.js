import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 24px 10px;
  border-bottom: 2px solid black;
  @media screen and (min-width: 601px) {
    flex-direction: row;
  }
`;
