import Sorteado from "../../components/Sorteado/Sorteado"
import styled from "styled-components";
import Header from "../../components/Header/Header";


const HomeContainer = styled.div `
  display: flex;
  justify-content: center;

  `

const ConcursoContainer = styled.div `
  background-color: #6BEFA3;
  clip-path: polygon(91% 13%, 85% 31%, 83% 50%, 85% 68%, 91% 86%, 100% 100%, 0 100%, 0 0, 100% 0);

`

const SorteioContainer = styled.div `
  background-color: white;
  `


const Home = () => {

  return (
    <HomeContainer>
      <ConcursoContainer>
      <Header/>
      </ConcursoContainer>
      <SorteioContainer>
      <Sorteado/>
      </SorteioContainer>
    </HomeContainer>
  )
}

export default Home;
