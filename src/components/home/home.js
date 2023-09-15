import React from "react";
import './home.css'

function Home() {

    const tecnologias = [
        {id: '1', nome: 'HTML5', idCSS: 'html', imagem: 'assets/img/logo-html.svg', imagemAlternativa: ''},
        {id: '2', nome: 'CSS3', idCSS: 'css', imagem: 'assets/img/logo-css.svg', imagemAlternativa: ''},
        {id: '3', nome: 'JavaScript', idCSS: 'js', imagem: 'assets/img/logo-js.svg', imagemAlternativa: ''},
        {id: '4', nome: 'Git', idCSS: 'git', imagem: 'assets/img/logo-git.svg', imagemAlternativa: ''},
        {id: '5', nome: 'React.js', idCSS: 'react', imagem: 'assets/img/logo-react.svg', imagemAlternativa: ''},
    ]

    return (
        <div className="home-pag">
            <section className="home" id="home">
                <div className="card-home">
                    <img src="assets/img/foto-matheus.jpeg" alt="Foto Matheus Urban" />
                    <div class="info-card-home">
                        <h1>Desenvolvedor Front-End & Designer Gráfico.</h1>
                        <p>Eu sou o <span>Matheus</span>, tenho 21 anos, sou Desenvolvedor Front-End e Designer gráfico. Trabalho com <span>HTML, CSS, JavaScript e Photoshop</span> para criar interfaces atrativas e interativas.</p>
                    </div>
                    <div className="botoes-home">
                        <a href="https://www.linkedin.com/in/urbanykv" target="_blank"><img src={process.env.PUBLIC_URL + "assets/img/linkedin-logo.png"} alt="Logo LinkedIn" /></a>
                        <a href="https://github.com/urbanykv" target="_blank"><img src={process.env.PUBLIC_URL + "assets/img/github-logo.png"}alt="Logo GitHub" /></a>
                        <a href="https://wa.link/yu6hn9" target="_blank">
                            <img src={process.env.PUBLIC_URL + "assets/img/whatsapp-logo.png"}alt="Logo WhatsApp" />
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
            <section className="tecnologias" id="tec">
                <h1 id="tituloTec">Tecnologias</h1>
                <div className="container-tecs">
                    {
                        tecnologias.map((tecnologia) => {
                            return(
                                <div className="tecnologia" id={tecnologia.idCSS}>
                                    <img
                                    className="tecs"
                                    key={tecnologia.id}
                                    src={tecnologia.imagem}
                                    alt={tecnologia.nome}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Home