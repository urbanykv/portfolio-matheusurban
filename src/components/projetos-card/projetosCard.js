import React from "react";
import './projetosCard.css'

    export const projetosDev = [
        {id: '1', nome: 'Consultar CEP', tecnologias: 'HTML, CSS e JavaScript', image: 'assets/img/consulta-cep.png', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},

        {id: '2', nome: 'Tela de Login', tecnologias: 'HTML e CSS', image: 'assets/img/tela-de-login.png', github: 'https://github.com/urbanykv/projeto-tela-de-login', demo: 'https://urbanykv.github.io/projeto-tela-de-login/'},

        {id: '3', nome: 'Redes Sociais', tecnologias: 'HTML e CSS', image: 'assets/img/redes-sociais.png', github: 'https://github.com/urbanykv/projeto-redes-sociais', demo: 'https://urbanykv.github.io/projeto-redes-sociais/'}
    ]

export const CardProjetos = () => (
    <>
        {projetosDev.map( projeto => (
            <div style={{backgroundImage: `url(${projeto.image})`}} className="card" key={projeto.id}>
                <img src="assets/img/opacidade.png"/>
                <h1 id="tituloCard">{projeto.nome}</h1>
                <p className="tecnologiasProjetos">{projeto.tecnologias}</p>
                <a href={projeto.github} target="__blank" className="btn-projetos" id="repo">Repositório</a>
                <a href={projeto.demo} target="__blank" className="btn-projetos" id="demo">Acessar</a>
            </div>
        ))}
    </>
)