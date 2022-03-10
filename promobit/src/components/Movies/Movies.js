import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components"

const Header = styled.header`
  background-color: purple;
  color: white;
  text-align: center;
`;


const Movies = () => {
  const [collection, setCollection]=useState([])

    useEffect(()=>{
      getMovies()
  },[])


  const getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a77dcd4e11f252c81694e064a8bde7e6`)
    .then((response) => {
      setCollection(response.data.results)
      console.log(response.data.results);

    }).catch((error) => {
      console.log(error.response.data);
    })
  };


    return (
      <div>
        <Header>
          <h4>Milhões de filmes, séries e pessoas para descobrir.
             Explore já.</h4>
          <p>Filtre por:</p>
        </Header>
      </div>
    )

}
export default Movies;
