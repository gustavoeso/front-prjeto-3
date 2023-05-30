import { useEffect, useState, TextField } from 'react';
import axios from 'axios';
import './Principal.css';
import Musica from './components/Musica';
import React from "react";

export default function Principal() {
  const [musicas, setMusicas] = useState([]);
  const [nome, setNome] = useState("");

  function busca_musicas(event){
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: nome,
        type: 'tracks',
        offset: '0',
        limit: '20',
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '1643b0a473msha4e434bc457963ap1ffa58jsnb141f6df32c6',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    event.preventDefault();
    axios.request(options)
    .then ((res) => {
      setMusicas(res.data.tracks.items)
      //setNome("")
      console.log(res.data.tracks.items)
    });
  }

  function salva_musica(nome, album, artista){
    var session_storage = sessionStorage.getItem('token')
    axios
    .post("https://spotifinder.onrender.com/musicas/", {nome:nome, album: album, artista: artista}, {headers: {Authorization: `Token ${JSON.parse(session_storage).token}`}})
    .then((res) => {
    })
  }


  return (
    <div className="App">
      <div className="header">
        <div className = "title"> Spotifinder</div>
        <img className="logo" src="spotify-logo.png" alt="logo" />
      </div>
      <div className="form_conteiner">
        <form className="form-card" onSubmit={busca_musicas}>
          <input
            className="form-card-title"
            type="text"
            name="nome"
            placeholder="nome do artista"
            onChange={(event) => {setNome(event.target.value)}}
            value={nome}
          />
          <button className="btn" type="submit">Search</button>
          <div className="placeholder_btn_favoritos">
            <a className="btn_favoritos" href="/favoritos">Favoritos</a>
          </div>
        </form>
      </div>
      <div className="card_conteiner">
        {musicas.map((musica) => (
          <Musica key={`musica__${musica.data.id}`}salva_musica={salva_musica} musica={musica}>
            {musica.data.name}
            {musica.data.albumOfTrack.name}
            {musica.data.albumOfTrack.sharingInfo.shareUrl}
            {musica.data.artists.items[0].profile.name}
          </Musica> 
        ))}
      </div>
    </div>
  );
}
