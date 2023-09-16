import React from "react";
import './home.css'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-pag">
            <section className="home" id="home">
                <div className="card-home">
                    <div class="info-card-home">
                        <h1>Desenvolvedor Front-end & Designer Gráfico.</h1>
                        <p>Eu sou o <span>Matheus Urban</span>, tenho 21 anos, sou Desenvolvedor Front-End e Designer gráfico. Trabalho com <span>HTML, CSS, JavaScript, React.js e Photoshop</span> para criar interfaces atrativas e interativas.</p>
                    </div>
                    <div className="botoes-home">
                        <a href="https://www.linkedin.com/in/urbanykv" target="_blank"><img src={process.env.PUBLIC_URL + "assets/img/linkedin-logo-dark.png"} alt="Logo LinkedIn" /> <p>LinkedIn</p></a>
                        <a href="https://github.com/urbanykv" target="_blank"><img src={process.env.PUBLIC_URL + "assets/img/github-logo-dark.png"}alt="Logo GitHub" /> <p>GitHub</p></a>
                        <a href="https://wa.link/yu6hn9" target="_blank" id="whatsapp-btn">
                            <img src={process.env.PUBLIC_URL + "assets/img/whatsapp-logo-dark.png"}alt="Logo WhatsApp" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="formacao" id="formacao">
                <div class="formacoes" id="forms">
                <h1 id="tituloForm">Formação Acadêmica</h1>
                    <div className="forms">
                        <h1>Engenharia de Software</h1>
                        <h2>Estácio Osasco</h2>
                        <div class="andamento">
                            <p>2023 - 2027 <span>• Em andamento</span></p><img src="assets/img/clock.png" alt="Relógio" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="projeto-destaque">
                <div>
                    <h1 id="tituloPD">Projeto Destaque</h1>

                    
                </div> 
                <Link to="/projetos">Ver mais projetos</Link>
            </section>
        </div>
    )
}

export default Home