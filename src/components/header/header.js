import React from "react"
import './header.css'

function Header(){
    return(
        <header>
            <img src="" alt="Logo Matheus Urban"/>
            <button><img src="" alt="Menu Mobile" /></button>
            <nav id="nav">
                <a href="#home">Home</a>
                <a href="#formacao">Formação</a>
                <a href="#exp">Experiência</a>
                <a href="#projetos">Projetos</a>
            </nav>
        </header>
        
    )
}

export default Header