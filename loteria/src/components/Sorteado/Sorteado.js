import axios from "axios";
import React, {useState, useEffect} from "react";
import { BASE_URL } from "../../constants/data";
import styled from "styled-components";

const SorteioContainer = styled.div `
  padding: 2rem;
  `

const Numeros = styled.p `
  background: white;
  padding: 16px;
  margin: 8px;
  border: 1px solid white;
  border-radius: 32px;
  `
const Sorteio = styled.div `
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0px;
  margin: 40px 0px;
  `

const Sorteado = () => {
  const [idConcurso, setIdConcurso]=useState(2359)

    useEffect(()=>{
    getIdConcurso();
    getConcursos()
  },[])

  const getIdConcurso = () => {
    axios.get(`${BASE_URL}/loterias-concursos`)
    .then(response => {
      console.log(response.data);

    }).catch(error => {
      console.log(error.response.data);
    })
  };

  const selecionaIdConcurso = (event) => {
      setIdConcurso(event.target.value)
    }



  const getConcursos = () => {
    axios.get(`${BASE_URL}/concursos/2359`)
    .then(response => {
      setIdConcurso(response.data.numeros);

    }).catch(error => {
      alert(error.response.data);
    })
  };




    return (
      <SorteioContainer>
        <Sorteio>
          <Numeros><b>{idConcurso[0]}</b></Numeros>
          <Numeros><b>{idConcurso[1]}</b></Numeros>
          <Numeros><b>{idConcurso[2]}</b></Numeros>
          <Numeros><b>{idConcurso[3]}</b></Numeros>
          <Numeros><b>{idConcurso[4]}</b></Numeros>
          <Numeros><b>{idConcurso[5]}</b></Numeros>
        </Sorteio>
        <footer>
          <p>Esse sorteio é meramente ilustrativo e não possui
            nenhuma ligação com a CAIXA.</p>
        </footer>

     </SorteioContainer>
    )

}
export default Sorteado;
