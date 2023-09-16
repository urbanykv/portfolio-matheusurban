import React from "react"
import './header.css'
import { Link } from "react-router-dom"

function Header(){
    return(
        <header id="header">
            <img src={process.env.PUBLIC_URL + "/assets/img/logo-matheus-urban.png"} className="logo" alt="Logo Matheus Urban"/>
            <button className="btn"><img src={process.env.PUBLIC_URL + "/assets/img/menu-deep.svg"} alt="Menu"/></button>
            <nav id="nav">
                <Link to={`/${}`}>Home<hr/></Link>
                <Link to="/projetos">Projetos<hr/></Link>
                <Link to="contatos">Contatos<hr/></Link>
            </nav>
        </header>
        
    )
}

export default Header


window.addEventListener('scroll', () => {
    const header = document.querySelector('#header')
    if(window.scrollY !== 0){
        header.style.backgroundColor = 'rgb(34, 34, 34)'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})