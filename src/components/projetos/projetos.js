import React from "react";
import './projetos.css'
import { CardProjetos } from "../projetos-card/projetosCard";

function Projetos(){

    return(
        <div className="projetos-pag">
            <section className="projetos">
                    <h1 id="tituloProjetos">Projetos</h1>
                    <nav className="botoesAlterarProjetos">
                        <button onClick='' id="btnFront">Desenvolvimento Front-end</button>
                        <button onClick='' id="btnDesign">Design Gráfico</button>
                    </nav>
                    <div className="projetos-dev">
                        <CardProjetos/>
                    </div>
                    <div className="projetos-design">
                    </div>
            </section>
        </div>
    )
}

export default Projetos