import React from "react";
import './projetosCard.css'

    export const projetosDev = [
        {id: 2, nome: 'Detone o Ralph', tecnologias: 'HTML, CSS e JavaScript', image: 'assets/img/ralph-background.jpg', github: 'https://github.com/urbanykv/jogo-detona-ralph', demo: 'https://jogo-detona-ralph-one.vercel.app/'},

        {id: 3, nome: "Urban's Ristorante", tecnologias: 'HTML(JSX), CSS, JavaScript e React.js', image: 'assets/img/cardapio-digital-background.jpg',
        imageDestaque: 'assets/img/urban-ristorante.png',
         github: 'https://github.com/urbanykv/urban-ristorante', demo: 'https://urban-ristorante.vercel.app/'},

        {id: 4, nome: 'Consultar CEP', tecnologias: 'HTML, CSS e JavaScript', image: 'assets/img/cep-background.jpg', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
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