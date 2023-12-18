import React from "react";
import './projetosCard.css'

export const tecnologias = [
    {id: 1,nome: 'HTML', icon: 'assets/icons/html.png'},
    {id: 2,nome: 'CSS', icon: 'assets/icons/css.png'},
    {id: 3,nome: 'JavaScript', icon: 'assets/icons/javascript.png'},
    {id: 4,nome: 'React.js', icon: 'assets/icons/react.png'},
    {id: 5,nome: 'Styled Components', icon: 'assets/icons/styled-components.svg'},
    {id: 6,nome: '.NET(C#)', icon: 'assets/icons/csharp.png'},
]

const [html, css, javascript, react, styledComponents, csharp] = tecnologias;

export const projetosDev = [

    {id: 1, nome: 'Urban Store', descricao: 'Simulação de um e-commerce de tênis raros e luxuosos.', tecnologias: [css, javascript, react], image: 'assets/img/urban-store-bg.jpg', github: 'https://github.com/urbanykv/urban-store', demo: 'https://urban-store-coral.vercel.app/'},

    {id: 2, nome: 'Detone o Ralph', descricao: 'Jogo do Detona Ralph estilo "Whac-A-Mole".', tecnologias: [html, css, javascript], image: 'assets/img/detona-ralph-bg.jpg', github: 'https://github.com/urbanykv/jogo-detona-ralph', demo: 'https://jogo-detona-ralph-one.vercel.app/'},

    {id: 3, nome: "Urban's Ristorante", descricao: 'Cardápio Digital', tecnologias: [css, javascript, react], image: 'assets/img/urban-ristorante-bg.jpg',
    imageDestaque: 'assets/img/urban-ristorante.png',
    github: 'https://github.com/urbanykv/urban-ristorante', demo: 'https://urban-ristorante.vercel.app/'},

    {id: 4, nome: 'Consultar CEP', descricao: 'Aplicação que procura informações do CEP desejado.', tecnologias: [html, css, javascript], image: 'assets/img/consultar-cep-bg.jpg', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
]

export const CardProjetos = () => {

    return(
        <>
            {projetosDev.map( projeto => (
                <div className="card" key={projeto.id}>
                    <img src={projeto.image} alt="opacidade"/>
                    <h1 id="tituloCard">{projeto.nome}</h1>
                    <p className="desc">{projeto.descricao}</p>
                    <div className="tecnologias">
                        {projeto.tecnologias.map(tec => <img className="tecs-projetos" src={tec.icon} alt={tec.nome} key={tec.id}/>)}
                    </div>
                    <div className="btns">
                        <a href={projeto.github} target="__blank" className="btn-projetos" id="repo">Repositório</a>
                        <a href={projeto.demo} target="__blank" className="btn-projetos" id="demo">Acessar</a>
                    </div>
                </div>
            ))}
        </>
    )
}