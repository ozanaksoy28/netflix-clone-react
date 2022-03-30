import {useEffect,useState} from 'react'
import axios from './axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original"
function Row({requests,title, isLargeRow}) {
  const[movies,setMovies] = useState([]);
  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(requests)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  },[requests])
  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row_posters'>
        {movies.map(movie =>(
          <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}

export default Row