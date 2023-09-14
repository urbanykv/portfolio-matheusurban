import React from "react";
import './home.css'

function Home() {
    return (
        <div className="home">
            <section className="home" id="home">
                <div className="card-home">
                    <img src="assets/img/foto-matheus.jpeg" alt="Foto Matheus Urban" />
                    <div class="info-card-home">
                        <h1>Desenvolvedor Front-End & Designer Gráfico.</h1>
                        <p>Eu sou o <span>Matheus</span>, tenho 21 anos, sou Desenvolvedor Front-End e Designer gráfico. Trabalho com <span>HTML, CSS, JavaScript e Photoshop</span> para criar interfaces atrativas e interativas.</p>
                    </div>
                    <div className="botoes-home">
                        <a href="https://www.linkedin.com/in/urbanykv" target="_blank"><img src={process.env.PUBLIC_URL + "assets/img/linkedin-logo.png"} alt="" /></a>
                        <a href="https://github.com/urbanykv" target="_blank"><img src={process.env.PUBLIC_URL + "assets/img/github-logo.png"}alt="" /></a>
                        <a href="https://wa.link/yu6hn9" target="_blank">
                            <img src={process.env.PUBLIC_URL + "assets/img/whatsapp-logo.png"}alt="" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="formacao" id="formacao">
                <h1 id="tituloForm">Formação Acadêmica</h1>
                <div class="formacoes" id="forms">
                    <div className="forms">
                        <h1>Engenharia de Software</h1>
                        <h2>Estácio Osasco</h2>
                        <div class="andamento">
                            <p>2023 - 2027 <span>• Em andamento</span></p><img src="assets/img/clock.png" alt="Relógio" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home