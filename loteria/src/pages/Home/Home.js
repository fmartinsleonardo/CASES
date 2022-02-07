import Header from "../../components/Header/Header"
import Sorteado from "../../components/Sorteado/Sorteado"
import styled from "styled-components";

const HomeContainer = styled.div `
  display: flex;
  `

const Home = () => {

  return (
    <HomeContainer>
      <Header/>
      <Sorteado/>
    </HomeContainer>
  )
}

export default Home;
