import React from "react";
import './contatos.css'

function Contatos(){
    return(
        <div className="contatos">
            <h1>Contatos</h1>
            <div className="contatos-container">
                <div className="redes">
                        <a href="https://www.linkedin.com/in/urbanykv" target="_blank">
                            <img src={process.env.PUBLIC_URL + "assets/img/linkedin-logo-dark.png"} alt="Logo LinkedIn" /> <p>LinkedIn</p>
                        </a>
                        <a href="https://github.com/urbanykv" target="_blank">
                            <img src={process.env.PUBLIC_URL + "assets/img/github-logo-dark.png"}alt="Logo GitHub" /> <p>GitHub</p>
                        </a>
                        <a href="https://wa.link/yu6hn9" target="_blank" id="whatsapp-btn">
                            <img src={process.env.PUBLIC_URL + "assets/img/whatsapp-logo-dark.png"}alt="Logo WhatsApp" />
                            <p>WhatsApp</p>
                        </a>
                </div>
                <div className="formEmail">
                    <input type="text" name="nome" id="nome"/>
                    <input type="text" name="email" id="email"/>
                    <input type="text" name="mensagem" id="mensagem"/>
                    <button type="submit">Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Contatos