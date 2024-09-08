import styled from "styled-components"
const TotalScore = ({scored}) => {
  return (
    <ScoredContainer>
      <h1>{scored}</h1>
      <p>Total score</p>
    </ScoredContainer>
  )
}

export default TotalScore

const ScoredContainer = styled.div`
text-align: center;
max-width: 200px;
h1{
  font-size: 100px;
  line-height: 100px;
}
p{
  font-size: 24px;
  font-weight: 500px;
}
`

