import axios from "axios";
import React, {useState, useEffect} from "react";
import { BASE_URL } from "../../constants/data";
import styled from "styled-components";

const SorteioContainer = styled.div `
  padding: 2rem;
  background: blue;
  `

const Sorteado = () => {
  // const [numerosSorteados, setNumerosSorteados]=useState([])
  // const [idConcurso, setIdConcurso]=useState(2359)
  // const [idLoteria, setIdLoteria]=useState(1)

    useEffect(()=>{
    getIdConcurso();
    // getConcursos()
  },[])

  const getIdConcurso = () => {
    axios.get(`${BASE_URL}/loterias-concursos`)
    .then(response => {
      console.log(response.data);

    }).catch(error => {
      console.log(error.response.data);
    })
  };

  // const selecionaIdConcurso = (event) => {
  //     setIdConcurso(event.target.value)
  //   }
    // console.log(idConcurso);


  // const getConcursos = () => {
  //   axios.get(`${BASE_URL}/concursos/${idConcurso}`)
  //   .then(response => {
  //     console.log(response.data);

  //   }).catch(error => {
  //     console.log(error.response.data);
  //   })
  // };



    return (
      <SorteioContainer>
        <h1>Concursos</h1>
        {/* <p>{idConcurso}</p> */}
        {/* <p>{idConcursosLoteria}</p> */}
     </SorteioContainer>
    )

}
export default Sorteado;
