import React from "react";
import './projetosCard.css'


export const CardProjetos = () => {
    const projetosDev = [
        {id: '1', nome: 'Consultar CEP', image: 'assets/img/consulta-cep.png', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
        {id: '2', nome: 'Consultar CEP', image: 'assets/img/consulta-cep.png', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
        {id: '3', nome: 'Consultar CEP', image: 'assets/img/consulta-cep.png', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
        {id: '4', nome: 'Consultar CEP', image: 'assets/img/consulta-cep.png', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
        {id: '5', nome: 'Consultar CEP', image: 'assets/img/consulta-cep.png', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
        {id: '4', nome: 'Consultar CEP', image: 'assets/img/consulta-cep.png', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
        {id: '4', nome: 'Consultar CEP', image: 'assets/img/consulta-cep.png', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
        {id: '4', nome: 'Consultar CEP', image: 'assets/img/consulta-cep.png', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/'},
        
    ]
    return(
        <>
            {projetosDev.map( projeto => (
                <div style={{backgroundImage: `url(${projeto.image})`}} className="card" key={projeto.id}>
                    <img src="assets/img/opacidade.png"/>
                    <h1 id="tituloCard">{projeto.nome}</h1>
                    <a href={projeto.github} target="__blank" className="btn-projetos" id="repo">Repositório</a>
                    <a href={projeto.demo} target="__blank" className="btn-projetos" id="demo">Acessar</a>
                </div>
            ))}
        </>
    )
}