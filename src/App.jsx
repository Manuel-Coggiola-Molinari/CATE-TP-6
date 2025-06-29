import { useState } from "react";
import Peliculas from "./Peliculas";
import "./App.css";

const llaveAPI = "9da5b47a5e0a301429ef383190d66981";

function App() {
    const [query, setQuery] = useState("");
    const [peli, setPeli] = useState([]);

    const buscarPelis = async () => {
        if(!query) return;
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${llaveAPI}&query=${query}`);
        const data = await res.json();
        setPeli(data.results || []);
    };

    return (
        <div className="container">
            <h1>Busque su pelicula preferida</h1>
            <div className="barra-busq">
                <input type="text" 
                placeholder="Busque su pelicula"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={buscarPelis}>Buscar</button>
            </div>
            <div className="peliculas">
                {peli.map((movie) => (
                    <Peliculas key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default App;