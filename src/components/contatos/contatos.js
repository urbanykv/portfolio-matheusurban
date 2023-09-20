import React from "react";
import './contatos.css'

function Contatos(){
    return(
        <div className="contatos">
            <h1 id="tituloContatos">Contatos</h1>
            <div className="alerta-contatos"></div>
            <div className="contatos-container">
                <nav className="nav-contatos">
                        <a href="https://www.linkedin.com/in/urbanykv" target="_blank">
                            <p>LinkedIn</p>
                            <img src={process.env.PUBLIC_URL + "assets/img/linkedin-logo-dark.png"} alt="Logo LinkedIn" /> 
                        </a>
                        <a href="https://github.com/urbanykv" target="_blank">
                            <p>GitHub</p>
                            <img src={process.env.PUBLIC_URL + "assets/img/github-logo-dark.png"}alt="Logo GitHub" />
                        </a>
                        <a href="https://wa.link/yu6hn9" target="_blank">
                            <p>WhatsApp</p>
                            <img src={process.env.PUBLIC_URL + "assets/img/whatsapp-logo-dark.png"}alt="Logo WhatsApp" />
                        </a>
                </nav>
                <div className="formEmail">
                    <label for="nome" id="label-nome">Nome</label>
                    <input type="text" name="nome" id="nome"/>
                    <label for="email" id="label-email">Email</label>
                    <input type="email" name="email" id="email"/>
                    <label for="mensagem" id="label-msg">Mensagem</label>
                    <textarea id="mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Contatos