import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > * {
    border: 3px solid black;
    width: 50%;
    margin: 10px;
    padding: 20px;
  }
`