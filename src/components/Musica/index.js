import React from "react";
import "./index.css";

export default function Musica(props) {
  return(
    <div className="card-musica">
      <div className = "card-title">{props.children[0]}</div> 
      <div className = "card-content-musica">Album: {props.children[1]}</div>
      <div className = "card-content-musica">Artista: {props.children[3]}</div>
      <a className = "card-content-musica" href={props.children[2]}>Link</a>
      <button className = "btn_salvar" onClick={() => props.salva_musica(props.children[0], props.children[1], props.children[3])}>Save</button>
    </div>
    
  )
}
