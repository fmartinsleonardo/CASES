import axios from "axios";
import React, {useState, useEffect} from "react";
import { BASE_URL } from "../../constants/data";
import styled from "styled-components";

const ContainerHeader = styled.div `
  padding: 2rem;
  `

const Select = styled.select `
  padding: 12px;
  border-radius:8px;
  border: 0px solid white;
  `

const Concursos = styled.h3 `
  padding: 80px 0px;
  margin: 40px 0px;
  border-radius:8px;
  border: 0px solid white;
  color: white;
  `

const Footer = styled.footer `

  color: white;
  `
const Header = (props) => {
  const [sorteios, setSorteios]=useState([])
  const [sortId, setSortId]=useState("mega-sena")
  const [idConcurso, setIdConcurso]=useState(2359)

  useEffect(()=>{
    getLoterias()
    getConcursos()
  },[])



  const getLoterias = () => {
    axios.get(`${BASE_URL}/loterias`)
    .then(response => {
      setSorteios(response.data)
    }).catch(error => {
      console.log(error);
    })
  };

  const getConcursos = () => {
    axios.get(`${BASE_URL}/concursos/${idConcurso}`)
    .then(response => {
      console.log(response.data);
      setIdConcurso(response.data);
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

    // const testeNumero = () => {
    //     if (sortId === "mega-sena"){
    //     return setIdConcurso === 2359
    //   } else if (sortId === "quina"){
    //     return setIdConcurso === 5534
    //   } else if (sortId === "lotofacil"){
    //     return setIdConcurso === 2200
    //   } else if (sortId === "lotomania"){
    //     return setIdConcurso === 2167
    //   } else if (sortId === "timemania"){
    //     return setIdConcurso === 1622
    //   } else if (sortId === "dia de sorte"){
    //     return setIdConcurso === 440
    //   }
    // }

    // console.log(idConcurso);

    console.log(sortId);

    return (
    <div>
      <ContainerHeader>
        <header>
          <Select value={sortId} onChange={selecionaSorteio}>
            <option>mega-sena</option>
            <option>quina</option>
            <option>lotofacil</option>
            <option>lotomania</option>
            <option>timemania</option>
            <option>dia de sorte</option>
          </Select>
        </header>
        <div>
        <Concursos>{sortId.toUpperCase()}</Concursos>
        </div>

        <Footer>
          <p>Concurso</p>
          <p><b>{idConcurso.id} - {idConcurso.data}</b></p>
        </Footer>

      </ContainerHeader>
    </div>
    )
}

export default Header;
