import React, {useState, useEffect} from "react";
import axios from "axios";


const CardMovies = () => {
  const [idMovie, setIdMovie]=useState("")

    useEffect(()=>{
      getIdMovies()
      getMoviesImg()
  },[])

  const getIdMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/634649?api_key=a77dcd4e11f252c81694e064a8bde7e6`)
    .then((response) => {
      setIdMovie(response.data)
      console.log(response.data);

    }).catch((error) => {
      console.log(error.response.data);
    })
  };

  const getMoviesImg = () => {
    axios.get(`https://api.themoviedb.org/3/movie/634649/images?api_key=a77dcd4e11f252c81694e064a8bde7e6`)
    .then((response) => {
      console.log(response.data);

    }).catch((error) => {
      console.log(error.response.data);
    })
  };



    return (
      <div>
        <p>Synopsis</p>
        <h1>{idMovie.original_title} ({idMovie.release_date})</h1>
        <p>{idMovie.runtime}m</p>
        <h3>Sinopse</h3>
        <p>{idMovie.overview}</p>
      </div>
    )

}
export default CardMovies;
