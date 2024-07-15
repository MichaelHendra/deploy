import { Link } from "react-router-dom";
import cssModule from "./Genre.module.css"
import { useEffect, useState } from "react";
function Genre (){
    const [genres,setGenre] = useState([]);
    
    useEffect(() =>{
        const fetchGenre = async () =>{
            try{
                const response = await fetch(`http://localhost:8000/api/jenis`);
                const data = await response.json();
                console.log("Fetched data:", data);
                if (Array.isArray(data)){
                    setGenre(data);
                }else{
                    console.error("Expected an array but got:", data);
                }
            } catch (error){
                console.error("Error fetching jenis:", error);
            }
        };
        fetchGenre();
    }, []);

return (
    <div className={cssModule.BG}>
        <div className={cssModule.linkList}>
            {genres.map((genre, index) => (
                <Link key={index} className={cssModule.linkGenre} to={`/genre/${genre.jenis_id}`}>{genre.jenis}</Link>
            ))}
        </div>
    </div>
);
}

export default Genre