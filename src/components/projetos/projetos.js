import React from "react";
import './projetos.css'
import { CardProjetos } from "../projetos-card/projetosCard";



function Projetos(){

    return(
        <div className="projetos-pag">
            <section className="projetos">
                    <h1 id="tituloProjetos">Projetos</h1>
                    <span className="alerta"></span>
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