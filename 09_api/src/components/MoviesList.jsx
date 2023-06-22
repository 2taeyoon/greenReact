import React from 'react'
import Movie from './Movie'

const MoviesList = (props) => {
    return (
        <ul>
            {props.movie.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    openingText={movie.openingText}
                />
            ))}
        </ul>
    )
}

export default MoviesList