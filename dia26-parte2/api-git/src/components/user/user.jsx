import axios from 'axios';
import { useState } from 'react';
import "./style/style.css"
function User() {
    let [username,setUsername]=useState("facu1995");
        const handleChange = (evt) => {
        setUsername(evt.target.value);  //actualizar email al valor del input
    }
    let [user, setUser] = useState({ login: "", name: "" });
    let { created_at, login, avatar_url, name } = user;
    const  cargarInfo= () => {
        axios
            .get("https://api.github.com/users/"+username)
            .then(function (response) {
                setUser(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <h1>Ingresar usuario de git</h1>
            <label>https://api.github.com/users/</label>
            <input value={username} onChange={handleChange} type="text" placeholder="Ingrese el usuario"></input>
            <button onClick={cargarInfo}>Cargar Datos</button>
            <p style={{fontWeight: 'bold'}}>{name}</p>
            <p>{login}</p>
            <p>{created_at}</p>
            <img src={avatar_url} alt="img"/>
            


        </div>
    )
}

export default User;
