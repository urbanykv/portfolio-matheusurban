import React from "react";
import './projetos.css'

function Projetos(){

    const projetosDev = [
        {id: '1', projeto: 'Consultar CEP', image: 'assets/img/consulta-cep.png'},
        {id: '1', projeto: 'Consultar CEP', image: 'assets/img/consulta-cep.png'},
        {id: '1', projeto: 'Consultar CEP', image: 'assets/img/consulta-cep.png'},
        {id: '1', projeto: 'Consultar CEP', image: 'assets/img/consulta-cep.png'}
    ]

    return(
        <div className="projetos-pag">
            <section className="projetos">
                    <h1 id="tituloProjetos">Projetos</h1>
                    <nav className="botoesAlterarProjetos">
                        <button onClick='' id="btnFront">Desenvolvimento Front-end</button>
                        <button onClick='' id="btnDesign">Design Gráfico</button>
                    </nav>
                    <div className="projetos-dev">
                    
                    </div>
                    <div className="projetos-design">
                    </div>
            </section>
        </div>
    )
}

export default Projetos