import Styled from "styled-components";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/Images/Dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button 
        onClick={toggle}
        type="button">Start Game</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = Styled.div`
max-width:1180px;
display:flex;
margin: 0 auto;
height : 100vh;
align-items: center;

.content{
    h1 {
        font-size :96px;
        white-space: nowrap;
    }
}
`;

const Button = Styled.button`

 
 padding: 10px 18px;

 background:#000000;
 color: white;
     border-radius: 5px;
     min-width: 220px;
     border: none;
     font-size : 16px;
     cursor: pointer;
     transition : 0.3s background ease-in;
     border : 1px solid transparent;



     &:hover{
        background-color: white;
        color: black;
        border : 1px solid black;
        transition : 0.3s background ease-in;
     }

 `;
