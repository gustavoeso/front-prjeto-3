import { useEffect, useState, TextField } from 'react';
import axios from 'axios';


export default function Cadastro() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function salva_musica(){
        axios
        .post("https://spotifinder.onrender.com/api/users/", {"username":username, "email":email, "password":password})
        .then((res) => {
            console.log(res)
        })
      }
    

    return(
        <div className="login-wrapper">
        <h1>Please create user</h1>
        <form onSubmit={salva_musica}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
                <p>Email</p>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            <div>
                Tem uma conta?
                <a href="/"> Login</a>
            </div>
        </form>
        </div>
    )
}