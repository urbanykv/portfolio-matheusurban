import React from "react";
import './projetos.css'
import { CardProjetos } from "../projetos-card/projetosCard";



function Projetos({menu, setBotaoMenuHamburguer, setMenu, setBotaoMenuX, menuMobileOnOff}){

    menuMobileOnOff = () => {
        if(menu === 'menuOn'){
            setMenu('menuOff')
            setBotaoMenuHamburguer('menuOn')
            setBotaoMenuX('menuOff')
        }
    }

    return(
        <div className="projetos-pag" onClick={menuMobileOnOff}>
            <section className="projetos">
                    <h1 id="tituloProjetos">Projetos</h1>
                    <span>Aqui estão os projetos que mais me dediquei para desenvolver, aqui você pode ver a minha evolução a cada projeto desenvolvido.</span>
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