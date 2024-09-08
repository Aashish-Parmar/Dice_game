import React, { useState } from 'react'
import TotalScore from './TotalScore'
import Numberselecter from './Numberselecter'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'
const GamePlay = () => {
const [selectedNumber, setSelectedNumber] = useState();
const [currentDice, setCurrentDice] = useState(1);
const [scored, setScored] = useState(0);
const [error,seterror] = useState("");
const [showRules, setShowRules] = useState(false);

const generateRandomNumber = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min) + min));
  return Math.floor(Math.random() * (max - min) + min);
};

const roleDice = () => {
  if(!selectedNumber) 
  {
    seterror("Please select a number")
    return;
  }
  seterror("");
  const randomNumber = generateRandomNumber(1, 7);
  setCurrentDice((prev) => randomNumber);

  if(selectedNumber===randomNumber){
    setScored((prev) => prev + randomNumber);

  }
  else{
    setScored((prev) => prev-2);
  }

  setSelectedNumber(undefined);
};

const resetScore = () => {
  setScored(0);
  setCurrentDice(1);
  setSelectedNumber(undefined);
};


  return (
    
    <MainContainer>
      <div className='top_section'>
      <TotalScore scored={scored}/>
      <Numberselecter
      error={error}
      seterror={seterror}
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice
        currentDice={currentDice} roleDice={roleDice} />
        <div className="btns">
          <OutlineButton
          onClick={resetScore}
          >Reset Score</OutlineButton>
          <Button
          onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide rules" : "Show rules"}
            </Button>

        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}
`