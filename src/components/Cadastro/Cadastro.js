import { useEffect, useState, TextField } from 'react';
import axios from 'axios';
import './Cadastro.css';


export default function Cadastro() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function salva_musica(){
        axios
        .post("http://localhost:8000/api/users/", {"username":username, "email":email, "password":password})
        .then((res) => {
            console.log(res)
        })
      }
    

    return(
        <div className="body-login">
            <form className="form" onSubmit={salva_musica}>
              <div className="title-container">
                <div className="title">Please Create User</div>
              </div>
              <div className="input-container ic1">
                <input  className="input" type="text" placeholder=" " onChange = {e => setUserName(e.target.value)}/>
                <div className="cut"></div>
                <label className="placeholder">Username</label>
              </div>
              <div className="input-container ic2">
                <input  className="input" type="text" placeholder=" " onChange = {e => setUserName(e.target.value)}/>
                <div className="cut"></div>
                <label className="placeholder">Email</label>
              </div>
              <div className="input-container ic2">
                <input className="input" type="password" placeholder=" " onChange = {e => setPassword(e.target.value)} />
                <div className="cut"></div>
                <label className="placeholder">Password</label>
              </div>
              <div>
                  <button className="submit" type="submit">Submit</button>
              </div>
              <div className="texto-cadastro">Já tem uma conta?
                <a className="link-cadastro" href="/"> Faça o Login</a>      
              </div> 
            </form>
        </div>
    )
}