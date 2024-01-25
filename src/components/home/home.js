import React, { useState } from "react";
import './home.css'
import { Link } from "react-router-dom";
import { projetosDev } from "../projetos-card/projetosCard";
import { tecnologias } from "../projetos-card/projetosCard";

function Home({menuMobileOnOff, menu, setMenu, setBotaoMenuHamburguer, setBotaoMenuX}) {
    const projetoDevPrincipal = projetosDev[0];
    const projetoDevSecundario = projetosDev[1];

    let [topo, setTopo] = useState(undefined);

    function iniciarNoTopo(){
        topo = window.scrollTo({top: 0});
    
        setTopo(topo);
    }

    menuMobileOnOff = () => {
        if(menu === 'menuOn'){
            setMenu('menuOff')
            setBotaoMenuHamburguer('menuOn')
            setBotaoMenuX('menuOff')
        }
    }

    return (
        <div className="home-pag" onClick={menuMobileOnOff}>
            <section className="sobre">
                <section className="card-sobre">
                    <div className="info">
                        <article className="apresentacao">
                            <div className="infos-sobremim">
                                <h1>Matheus Urban</h1>
                                <div className="loc-n-exp">
                                    <div className="loc">
                                        <img src={process.env.PUBLIC_URL + "assets/icons/world.svg"} alt="world"/>
                                        <span>Osasco, São Paulo</span>
                                    </div>
                                    <span>Desenvolvedor MES na Metalsa</span>
                                </div>
                            </div>
                            <p>Oi, eu sou o Matheus Urban, estou cursando Engenharia de Software e sou Desenvolvedor Front-end.</p>
                            <p>Desenvolvimento de Software é a minha paixão, ver as linhas de códigos darem vida a um projeto é algo que me motiva a buscar cada vez mais a melhor versão de Desenvolvedor que existe em mim.</p>
                            <hr/>
                            <article className="skills">
                                <h1>Tecnologias<span> • meus conhecimentos técnicos</span></h1>
                                <div className="tec">
                                    {tecnologias.map(tec => <img className="tec-icons" src={tec.icon} alt={tec.nome} key={tec.nome}/>)}
                                </div>
                            </article>
                            <nav className="nav-sobre">
                                <a href="https://www.linkedin.com/in/urbanykv" target="_blank" rel="noreferrer">
                                    <img src={process.env.PUBLIC_URL + "assets/img/linkedin-logo-dark.png"} alt="Logo LinkedIn" /> 
                                </a>
                                <a href="https://github.com/urbanykv" target="_blank" rel="noreferrer">
                                    <img src={process.env.PUBLIC_URL + "assets/img/github-logo-dark.png"} alt="Logo GitHub" />
                                </a>
                                <a href="https://wa.link/yu6hn9" target="_blank" rel="noreferrer">
                                    <img src={process.env.PUBLIC_URL + "assets/img/whatsapp-logo-dark.png"}alt="Logo WhatsApp" />
                                </a>
                            </nav>
                        </article>
                    </div>
                    <img src={process.env.PUBLIC_URL + "assets/img/foto-matheus.jpeg"} alt="foto matheus urban"/>
                </section>
            </section>
            <section className="projeto-destaque">
                <div className="titulo-btn">
                    <h1 id="tituloPD">Projetos recentes</h1>
                    <Link to="/projetos" id="btn-ver-mais" onClick={iniciarNoTopo}>Ver todos →<hr/></Link>
                </div>
                <div className="pd">
                    {
                        <div className="card" key={projetoDevPrincipal.id}>
                            <img src={projetoDevPrincipal.image} alt="opacidade"/>
                            <h1 id="tituloCard">{projetoDevPrincipal.nome}</h1>
                            <p className="desc">{projetoDevPrincipal.descricao}</p>
                            <div className="tecnologias">
                                {projetoDevPrincipal.tecnologias.map(tec => <img className="tecs-projetos" src={tec.icon} alt={tec.nome} key={tec.id}/>)}
                            </div>
                            <div className="btns">
                                {projetoDevPrincipal.github === null ? null : 
                                <a href={projetoDevPrincipal.github} target="__blank" className="btn-projetos" id="repo">Repositório</a>}
                                {projetoDevPrincipal.demo === null ? null : 
                                <a href={projetoDevPrincipal.demo} target="__blank" className="btn-projetos" id="demo">Acessar</a>}
                            </div>
                            {projetoDevPrincipal.contribuidores === null ? null: 
                            <div className="contributors">
                                    <div className="info-btn">
                                        <span className="contribuidores-btn-span">Contribuidores</span>
                                        <img src="assets/img/contributors.svg" className="open-btn-contributors"/>
                                    </div>
                                <hr/>
                                <div className="lista-de-contribuidores">
                                    {projetoDevPrincipal.contribuidores?.map(contribuidores => (
                                        <a className="btn-contributors" href={contribuidores.linkedin} target="_blank" key={contribuidores.id}>
                                            <div className="info-contribuidores">
                                                <span className="nome-contribuidores">{contribuidores.nome}</span>
                                                <span className="funcao-contribuidores">{contribuidores.cargo}</span>
                                            </div>
                                            <img src={contribuidores.imagem} alt={contribuidores.nome}/>
                                        </a>
                                    ))}
                                </div>
                            </div>}
                        </div>
                    }
                    {
                        <div className="card" key={projetoDevSecundario.id}>
                            <img src={projetoDevSecundario.image} alt="opacidade"/>
                            <h1 id="tituloCard">{projetoDevSecundario.nome}</h1>
                            <p className="desc">{projetoDevSecundario.descricao}</p>
                            <div className="tecnologias">
                                {projetoDevSecundario.tecnologias.map(tec => <img className="tecs-projetos" src={tec.icon} alt={tec.nome} key={tec.id}/>)}
                            </div>
                            <div className="btns">
                                {projetoDevSecundario.github === null ? null : 
                                <a href={projetoDevSecundario.github} target="__blank" className="btn-projetos" id="repo">Repositório</a>}
                                {projetoDevSecundario.demo === null ? null : 
                                <a href={projetoDevSecundario.demo} target="__blank" className="btn-projetos" id="demo">Acessar</a>}
                            </div>
                            {projetoDevSecundario.contribuidores === null ? null: 
                            <div className="contributors">
                                    <div className="info-btn">
                                        <span className="contribuidores-btn-span">Contribuidores</span>
                                        <img src="assets/img/contributors.svg" className="open-btn-contributors"/>
                                    </div>
                                <hr/>
                                <div className="lista-de-contribuidores">
                                    {projetoDevSecundario.contribuidores?.map(contribuidores => (
                                        <a className="btn-contributors" href={contribuidores.linkedin} target="_blank" key={contribuidores.id}>
                                            <div className="info-contribuidores">
                                                <span className="nome-contribuidores">{contribuidores.nome}</span>
                                                <span className="funcao-contribuidores">{contribuidores.cargo}</span>
                                            </div>
                                            <img src={contribuidores.imagem} alt={contribuidores.nome}/>
                                        </a>
                                    ))}
                                </div>
                            </div>}
                        </div>
                    }
                </div>
            </section>
            <div className="area-contatos">
                <hr/>
                <div className="card-contatos">
                    <h1>Vamos desenvolver algo juntos!</h1>
                    <p>Caso você tenha gostado do que viu e agora está interessado(a) em saber mais sobre mim e meu trabalho, vamos trocar uma ideia.</p>
                    <Link to="/contatos" id="btn-contateme" onClick={iniciarNoTopo}>Entre em contato.</Link>
                </div>
            </div>
        </div>
    )
}

export default Home