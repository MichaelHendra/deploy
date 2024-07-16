import React, { useEffect, useState } from "react";
import cssModule from "./Movie.module.css";
// Image
import Gambar from "../assets/gambar1.png";
import { Link } from "react-router-dom";
import Genre from "../component/Genre";



function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://hantutakut.42web.io/api/movies'); 
                const data = await response.json();
                console.log("Fetched data:", data); // Log the fetched data to check its structure
                if (Array.isArray(data)) {
                    setMovies(data);
                } else {
                    console.error("Expected an array but got:", data);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className={cssModule.BG}>
            <div>
                <div>
                    <h1 className={cssModule.h1}>Movie</h1>
                </div>
                <div className={cssModule.h1}>
                    <Genre />
                </div>
                <div>
                    <div className={cssModule.cardContainer}>
                        {movies.map((movie, index) => (
                            <div key={index} className={cssModule.cardMovie}>
                                <Link className={cssModule.LinkCard} to={`/play/${movie.id}`}>
                                <img src={movie.image_url || Gambar} alt="Image" />
                                </Link>
                                <div className={cssModule.info}>
                                    <div className={cssModule.title}>{movie.judul_movie}</div>
                                    <div className={cssModule.details}>{movie.tanggal_rilis}</div>
                                </div>
                                <div className={cssModule.duration}>{movie.duration}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies;
