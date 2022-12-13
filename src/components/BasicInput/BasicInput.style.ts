import styled from '@emotion/styled';

const Container = styled.fieldset`
  margin-top: 20px;
  padding: 20px;
  width: 150px;
  border: unset;

  > * {
    display: block;
  }

  label {
    margin-bottom: 10px;
    &::first-letter{
      text-transform: capitalize; 
    }
  }
`

export default Container