import styled from "styled-components";
const RoleDice = ({currentDice, roleDice}) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/Images/Dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>click me</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  align-items: center;
  flex-direction: column;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
