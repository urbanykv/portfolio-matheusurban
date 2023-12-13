import React, { useState } from "react";
import './contatos.css'
import emailJS from "@emailjs/browser"

function Contatos({menu, setBotaoMenuHamburguer, setMenu, setBotaoMenuX, menuMobileOnOff}){

    const [nome, setNome] = useState('');
    const [email, setEmail]  = useState('');
    const [mensagem, setMensagem] = useState('');

    function mandarEmail(e){
        e.preventDefault();

        const templateParans = {
            from_name: nome,
            message: mensagem,
            email: email
        }

        emailJS.send('service_1pekhpj', 'template_snqhn73', templateParans, 'eTaAMTSJWTRQ1xArf')
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);
                alert('Email enviado com sucesso, clique para fechar a aba.')
                setNome('');
                setEmail('');
                setMensagem('');
            }, (error) =>{
                console.log('Erro: ', error);
            })
    }

    menuMobileOnOff = () => {
        if(menu === 'menuOn'){
            setMenu('menuOff')
            setBotaoMenuHamburguer('menuOn')
            setBotaoMenuX('menuOff')
        }
    }

    return(
        <div className="contatos" onClick={menuMobileOnOff}>
            <h1 id="tituloContatos">Contatos</h1>
            <span>Gostou do que viu e está afim de entrar em contato comigo? aqui está várias formas de fazer isso.</span>
            <div className="contatos-container">
                <nav className="nav-contatos">
                        <a href="https://www.linkedin.com/in/urbanykv" target="_blank" rel="noreferrer">
                            <img src={process.env.PUBLIC_URL + "assets/img/linkedin-logo-dark.png"} alt="Logo LinkedIn" /> 
                        </a>
                        <a href="https://github.com/urbanykv" target="_blank" rel="noreferrer">
                            <img src={process.env.PUBLIC_URL + "assets/img/github-logo-dark.png"}alt="Logo GitHub" />
                        </a>
                        <a href="https://wa.link/yu6hn9" target="_blank" rel="noreferrer">
                            <img src={process.env.PUBLIC_URL + "assets/img/whatsapp-logo-dark.png"}alt="Logo WhatsApp" />
                        </a>
                </nav>
                <hr/>
                <div>
                    <form onSubmit={mandarEmail} className="formEmail">
                        <label for="nome" id="label-nome">Nome</label>
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                            required
                        />
                        <label for="email" id="label-email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label for="mensagem" id="label-msg">Mensagem</label>
                        <textarea 
                            id="mensagem"
                            onChange={(e) => setMensagem(e.target.value)}
                            value={mensagem}
                            required
                        ></textarea>
                        <button type="submit" className="btn-enviar">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contatos