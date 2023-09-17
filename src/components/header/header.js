import React, { useState } from "react"
import './header.css'
import { Link } from "react-router-dom"

function Header(){

    let [topo, setTopo] = useState('');

    function iniciarNoTopo(){
        topo = window.scrollTo({top: 0});
    
        setTopo(topo);
    }

    return(
        <header id="header">
            <img src={process.env.PUBLIC_URL + "/assets/img/logo-matheus-urban.png"} className="logo" alt="Logo Matheus Urban"/>
            <button className="btn"><img src={process.env.PUBLIC_URL + "/assets/img/menu-deep.svg"} alt="Menu"/></button>
            <nav id="nav">
                <Link to="/" onClick={iniciarNoTopo}>Home<hr/></Link>
                <Link to="/projetos" onClick={iniciarNoTopo}>Projetos<hr/></Link>
                <Link to="contatos" onClick={iniciarNoTopo}>Contatos<hr/></Link>
            </nav>
        </header>
        
    )
}

export default Header



window.addEventListener('scroll', () => {
    const header = document.querySelector('#header')
    if(window.scrollY !== 0){
        header.style.backgroundColor = 'rgba(34, 34, 34)'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})