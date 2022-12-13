import styled from '@emotion/styled';

export const StyleButton = styled.button`
  margin: 20px;
  border: 1px solid black;
  background: none;
  padding: 10px;
  font-size: 18px;
  width: 100%;
  cursor: pointer;
  &:hover{
    background: #2d3068;
    color: white;
    transition: all 500ms;
  }
`

export const Tooltip = styled.div`
  position: absolute;
  top: -5px;
  background: #000000;
  color: #FFFFFF;
  font-size: 9pt;
  text-align: center;
  padding: 3px;
  transition: all 100ms;
`

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

export const Loader = styled.img`
  max-height: 50px;
  display: block;
  margin: 0 auto;
`