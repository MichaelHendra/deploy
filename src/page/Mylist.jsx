import React, { useEffect, useState } from 'react'
import cssModule from './Movie.module.css'
import Gambar from "../assets/gambar1.png"
function Mylist(){
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try{
                const response = await fetch(`http://localhost:8000/api/movies`);
                const result = await response.json();
                console.log("Fetchaed data:", result);
                if (response.ok) {
                    setMovie(result);
                }else{
                    console.error("Failed to fetch movie:", response.statusText);
                }
            }catch (error){
                console.error("Error fetching movie:", error);
            }
        };
        fetchMovie();
    });
    return (
        <div className={cssModule.BG}>
        <div>
            <div>
                <h1 className={cssModule.h1}>Mylist Movie</h1>
            </div>
            <div>
                <div className={cssModule.cardContainer}>
                    <div className={cssModule.cardMovie}>
                        <img src={Gambar} alt="Image"/>
                        <div className={cssModule.info}>
                            <div className={cssModule.title}>Kirik</div>
                            <div className={cssModule.details}>Kirik Ireng</div>
                        </div>
                        <div className={cssModule.duration}>1:40:1</div>
                    </div>
                    <div className={cssModule.cardMovie}>
                        <img src={Gambar} alt="Image"/>
                        <div className={cssModule.info}>
                            <div className={cssModule.title}>Kirik</div>
                            <div className={cssModule.details}>Kirik Ireng</div>
                        </div>
                        <div className={cssModule.duration}>1:40:1</div>
                    </div>
                    <div className={cssModule.cardMovie}>
                        <img src={Gambar} alt="Image"/>
                        <div className={cssModule.info}>
                            <div className={cssModule.title}>Kirik</div>
                            <div className={cssModule.details}>Kirik Ireng</div>
                        </div>
                        <div className={cssModule.duration}>1:40:1</div>
                    </div>
                    <div className={cssModule.cardMovie}>
                        <img src={Gambar} alt="Image"/>
                        <div className={cssModule.info}>
                            <div className={cssModule.title}>Kirik</div>
                            <div className={cssModule.details}>Kirik Ireng</div>
                        </div>
                        <div className={cssModule.duration}>1:40:1</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Mylist