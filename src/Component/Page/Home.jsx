import { Footer, MovieCard, Nav } from '../Layout';
import React, { useState, useEffect } from 'react';
import axios from "axios"

async function getMovies(pageNo) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNo}`
  )
  console.log(res.data.results)
  return res.data.results;
}

const Home = () => {
  const [movies, setMovies] = useState("Loading")
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    getMovies(pageNo)
      .then((res) => {
        setMovies(res)
      })
      .catch((err) => {
        alert(err)
      })
  }, [pageNo])

  if (movies === "Loading") {
    return (
      <div className="bg-gray-700 h-screen flex flex-col items-center justify-center text-8xl font-bold">
          <div className="text-4xl text-white">Please Wait...</div>
      </div>
    )
  } else {
    return (
      <div className='z-0'>
        <Nav />
        <div className='bg-gray-700 min-h-screen flex flex-col items-center h-full pt-20'>
          <div className='flex flex-wrap justify-evenly'>
            {
              movies.map((movie) => {
                return (
                  <MovieCard movie={movie} />
                )
              })
            }
          </div>
          <div className='w-[250px] mt-5 pb-10 flex flex-row justify-center'>
            <button className='bg-teal-500 rounded-full px-10 mr-3 py-2 hover:font-bold shadow-lg shadow-teal-500/60 hover:shadow-teal-500/40 text-white'
                    onClick={() => {
                      if(pageNo > 1){
                        setMovies("Loading");
                        setPageNo(pageNo - 1)
                      }
                    }}>Previous</button>
            <span className='text-white py-2'>{pageNo}</span>
            <button className='bg-teal-500 rounded-full px-10 ml-3 py-2 hover:font-bold shadow-lg shadow-teal-500/60 hover:shadow-teal-500/40 text-white'
                    onClick={() => {
                      if(pageNo < 20){
                        setMovies("Loading");
                        setPageNo(pageNo + 1)
                      }
                    }}>Next</button>
          </div>
        </div>      
        <Footer />
      </div>
    );
  }
}

export default Home;