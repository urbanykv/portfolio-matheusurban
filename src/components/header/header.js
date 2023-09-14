import React from "react"
import './header.css'
import { Link } from "react-router-dom"

function Header(){
    return(
        <header id="header">
            <img src={process.env.PUBLIC_URL + "/assets/img/logo-matheus-urban.png"} className="logo" alt="Logo Matheus Urban"/>
            <button className="btn"><img src={process.env.PUBLIC_URL + "/assets/img/menu-deep.svg"} alt="Menu"/></button>
            <nav id="nav">
                <Link to="/">Home<hr/></Link>
                <a href="#formacao">Formação<hr/></a>
                <a href="#exp">Tecnologias<hr/></a>
                <Link to="/projetos">Projetos<hr/></Link>
            </nav>
        </header>
        
    )
}

export default Header


window.addEventListener('scroll', () =>{
    const header = document.querySelector('#header')
    if(window.scrollY !== 0){
        header.style.boxShadow = '1px 2px 7px rgba(0, 0, 0, 0.61)'
    }else{
        header.style.boxShadow = '1px 2px 7px rgba(0, 0, 0, 0)'
    }
})