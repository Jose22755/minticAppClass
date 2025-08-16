import React, { useState } from 'react';
import './LoginPage.css'
import Swal from "sweetalert2"

function LoginPage(){
    // codigo de js(

    const [username, setUsername] = useState('');


    function handLoginClick(){
        if(username.trim() === ''){
            Swal.fire("Por favor ingrese un nombre valido");
        }
        else{
            Swal.fire(username);
    }
    }
    // etiquetas de HTML
    return (
        <div className='login-container'>
            <h2>Ejercicio de prueba</h2>
            <input type="text" 
                placeholder='escribe tu nombre de usuario'
                value={username}
                onChange={(e) =>setUsername(e.target.value)}
            />
            <button onClick={handLoginClick}>Iniciar Sesion</button>
                
        </div>
    );
}

export default LoginPage;