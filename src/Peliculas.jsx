import React from "react";
import { useState, useEffect } from "react";


function Peliculas({ movie }) {
    const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/200x300?text=Sin+imagen";

    const year = movie.release_date?.split("-")[0] || "N/A";
    const localStorageKey = `rating-${movie.id}`;

     const [rating, setRating] = useState(0);

    useEffect(() => {
        const guardarRating = localStorage.getItem(localStorageKey);
        if(guardarRating) {
            setRating(Number(guardarRating));
        }}, [localStorageKey]);
        
    const handleRating = (value) => {
        setRating(value);
        localStorage.setItem(localStorageKey, value.toString());
    };

    return (
        <div style={{
            backgroundColor:"white",
            borderRadius:"12px",
            boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",
            padding:"16px",
            maxWidth:"200px",
            textAlign:"center"}}>
            <img src={poster} alt={movie.title} style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "8px"}}/>
            <h2 style={{fontSize: "18px", fontWeight: "600"}}>{movie.title}</h2>
            <p style={{color: "gray"}}>{year}</p>
            <div style={{ marginTop: "8px" }}>
            {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRating(value)}
            style={{ fontSize: "24px" }}
          >
            {value <= rating ? "★" : "☆"}
          </button>
        ))}
      </div>
      </div>
    );
}
export default Peliculas;