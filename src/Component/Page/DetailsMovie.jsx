import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Nav, Footer } from '../Layout'

async function getMovie(movieId){
    const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
}

async function getClips(movieId){
    const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data.results;
}

const DetailsMovie = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState("Loading");
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.screen.availWidth);
    const [clips, setClips] = useState([]);

    let mt = width > 768 ? (width * 9)/16 -250:0

    window.addEventListener("resize", () => {
        setWidth(window.screen.availWidth)
    })

    useEffect(() => {
        const authToken = sessionStorage.getItem('Auth Token')

        if (!authToken) {
        navigate('/login')
        }
    }, [navigate])

    useEffect(() => {
        getMovie(movieId)
            .then((res) => {
                setMovie(res)
                getClips(movieId)
                    .then((res) => {
                        setClips(res)
                    })
            })
            .catch((err) => {
                alert(err);
                navigate("/home", {replace:true})
            })

            if(width > 768){
                window.scroll({top:mt - 100, behavior: 'smooth'})
            }
    }, [])

    if(movie === "loading" || !movie){
        <div className="bg-gray-700 h-screen flex flex-col items-center justify-center text-8xl font-bold">
          <div className="text-4xl text-white">Please Wait...</div>
      </div>
    }

    return(
        <div>
        <Nav />
        <div className="bg-gray-700 font-bold text-white text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl ">
            {
                width < 768 ? (
                    // <Navbar />
                    <p>Dimas</p>
                ) : (
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="backdrop" className="w-screen aspect-video absolute top-0"/>
                )
            }
            <div className="flex flex-col items-center justify-center md:flex-row md:ml-[50px]" style={{marginTop: `${mt}px`}}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" className="rounded-xl border-white border-4 max-w-[min(400px, 90%)] sm:max-w-[50%] md:h-[576px] z-10 "/>
                <h1 className="z-10 md:ml-10 text-center">{movie.title}</h1>
            </div>
            <div className="mt-5 md:mt-10 text-3xl md:text-4xl pb-[100px] mx-2 sm:mx-5 md:mx-[50px] lg:mx-[100px] ">
                <div className="mt-5 md:mt-10 text-lg md:text-xl mb-3">
                    <div>
                        Release Date :- <span className="font-normal">{movie.release_date}</span>
                    </div>
                    <div>
                        Duration :- <span className="font-normal">{parseInt(movie.runtime / 60)}:{(movie.runtime % 60)} hr</span>
                    </div>
                    <div>
                        Rating :- <span className="font-normal">{movie.vote_average}/10</span>
                    </div>
                </div>
                Clips And Trailers
                <div className="flex overflow-scroll scrollbar-hide snap-x mt-5 md:mt-10 ">
                    {
                        clips.map((clip) => (
                            <div className="ml-5 cursor-pointer" onClick={() => window.open(`https://youtube.com/watch?v=${clip.key}`)}>
                                <div className="relative flex-shrink-0 h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl">
                                    <img src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg`} className="absolute object-cover h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl" alt="" />
                                </div>
                                <p className="text-ld md:text-xl font-normal mt-1">
                                    {clip.name}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-5 md:mt-10">Overview</div>
                <div className="mt-5 md:mt-10 font-normal text-lg md:text-xl">
                    {movie.overview}
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default DetailsMovie;