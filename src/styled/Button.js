import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;

  background: #000000;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s background ease-in;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
   &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
