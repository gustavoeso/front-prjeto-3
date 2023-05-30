import React from "react";
import "./musicaFavorita.css";

export default function MusicaFavorita(props) {
  return(
    <div className="card">
      <div className = "card-title">{props.children[0]}</div> 
      <div className = "card-content">Album: {props.children[1]}</div>
      <div className = "card-content">Artista: {props.children[2]}</div>
    </div>
  )
}