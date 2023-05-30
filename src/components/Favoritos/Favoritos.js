import { useEffect, useState, TextField } from 'react';
import React from "react";
import "./Favoritos.css";
import axios from "axios";
import MusicaFavorita from './musicaFavorita';

export default function Favoritos(props) {

    const [favoritos, setFavoritos] = useState([]);
    console.log(props.token)

    useEffect(() => {
        axios
        .get("https://spotifinder.onrender.com/musicas/", {headers: {Authorization: `Token ${props.token}`}})
        .then((res) => {
            setFavoritos(res.data)
        });
    }, []);
    console.log(favoritos)

    return (
        <div className="card_conteiner">
            {favoritos.map((favorito) => (
                <MusicaFavorita>{[favorito.nome, favorito.album, favorito.artista]}</MusicaFavorita>
            ))}
        </div>
    );
}
