import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container } from "../../components/details"


function Details() {

    const { id } = useParams()
    const image_path = 'https://image.tmdb.org/t/p/w500/'
    const [movie, setMovie] = useState({})

    useEffect(() => {
        //detalhes atraves do id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-br`)
            .then(response => response.json())
            .then(data => {

                const { title, poster_path, overview, release_date } = data

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date
                }
                setMovie(movie)
            })
    }, [id])

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span> Sinopse: {movie.sinopse} </span>
                    <span className="release-date">Data de lançamento: {movie.releaseDate} </span>
                    <Link to="/"><button>Voltar</button></Link>
                </div>
            </div>
        </Container>
    )
}
export default Details;