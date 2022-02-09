import axios from "axios";
import React, {useState, useEffect} from "react";
import { BASE_URL } from "../../constants/data";
import styled from "styled-components";

const ContainerHeader = styled.div `
  padding: 2rem;
  background-color:#6BEFA3;

  `
const Select = styled.select `
  padding: 12px;
  border-radius:8px;
  border: 0px solid black;
  `
const Header = () => {
  const [sorteios, setSorteios]=useState([])
  const [sortId, setSortId]=useState("mega-sena")
  const [idConcurso, setIdConcurso]=useState(2359)

  useEffect(()=>{
    getLoterias()
  },[])



  const getLoterias = () => {
    axios.get(`${BASE_URL}/loterias`)
    .then(response => {
      setSorteios(response.data)
      // console.log(response.data)
    }).catch(error => {
      console.log(error);
    })
  };

  const getConcursos = () => {
    axios.get(`${BASE_URL}/concursos/${idConcurso}`)
    .then(response => {
      console.log(response.data);

    }).catch(error => {
      console.log(error.response.data);
    })
  };



    // const sorteiosLoteria = sorteios.map((sorteio) => {
    //   return (
    //   <div>
    //     <h2>{sorteio.nome}</h2>
    //   </div>

    //   )
    // })

  const selecionaSorteio = (event) => {
    setSortId(event.target.value)
  }

    // const selecionaSorteio = (event) => {
    //   setSortId(event.target.value)

    //   if (sortId === "mega-sena"){
    //     return setIdConcurso ===2359
    //   } else if (sortId === "quina"){
    //     return setIdConcurso ===5534
    //   } else if (sortId === "lotofacil"){
    //     return setIdConcurso ===2200
    //   } else if (sortId === "lotomania"){
    //     return setIdConcurso ===2167
    //   } else if (sortId === "timemania"){
    //     return setIdConcurso ===1622
    //   } else if (sortId === "dia de sorte"){
    //     return setIdConcurso ===440
    //   }
    // }

    console.log(idConcurso);

    console.log(sortId);

    return (
    <div>
      <ContainerHeader>
        <Select value={sortId} onChange={selecionaSorteio}>
          <option>mega-sena</option>
          <option>quina</option>
          <option>lotofacil</option>
          <option>lotomania</option>
          <option>timemania</option>
          <option>dia de sorte</option>
        </Select>
        <h3>{sortId.toUpperCase()}</h3>

      </ContainerHeader>
    </div>
    )
}

export default Header;
