import { Link } from "react-router-dom"

const MovieCard = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="w-[21rem] max-w-[100%] bg-gray-900 rounded-xl text-white border-2 border-gray-900 p-3 m-5 flex flex-col cursor-pointer text-xl hover:scale-105 duration-200 z-0" >
                <img
                    className="w-full self-center rounded-lg h-[476px]"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                    alt="" />
                <h3 className="my-1">
                    {movie.title}
                </h3>
                <h3 className="my-1">
                    <span className="mr-2 align-middle">
                        <ion-icon name="star"></ion-icon>
                    </span>
                    {movie.vote_average}/10
                </h3>
            </div>
        </Link>
    )
}

export default MovieCard