import { useState } from "react";
import styled from "styled-components";
const Numberselecter = ({ seterror,error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorhandler = (value) => {
    setSelectedNumber(value)
    seterror("")

  };
  return (
    <NumberSelecterContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorhandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelecterContainer>
  );
};

export default Numberselecter;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "red" : "white")};
`;

const NumberSelecterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }

  .error{
    color: red;
  }
`;
