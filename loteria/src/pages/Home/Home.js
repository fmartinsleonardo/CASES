import Sorteado from "../../components/Sorteado/Sorteado"
import styled from "styled-components";
import Concurso from "../../components/Concurso/Concurso";


const HomeContainer = styled.div `
  display: flex;
  justify-content: center;

  `

const ConcursoContainer = styled.div `
  background-color: #6BEFA3;
  `

const SorteioContainer = styled.div `
  background-color: lightgray;
  `


const Home = () => {

  return (
    <HomeContainer>
      <ConcursoContainer>
      <Concurso/>
      </ConcursoContainer>
      <SorteioContainer>
      <Sorteado/>
      </SorteioContainer>
    </HomeContainer>
  )
}

export default Home;
