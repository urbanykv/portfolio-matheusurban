import React, { useState } from "react"
import './header.css'
import { Link } from "react-router-dom"

function Header(){

    let [topo, setTopo] = useState(undefined);

    function iniciarNoTopo(){
        topo = window.scrollTo({top: 0});
    
        setTopo(topo);
    }

    const [menu, setMenu] = useState('menuOff');
    const [botaoMenuHamburguer, setBotaoMenuHamburguer] = useState('menuOn');
    const [botaoMenuX, setBotaoMenuX] = useState('menuOff');

    function menuMobileOnOff (){
        if(menu === 'menuOff'){
            setMenu('menuOn');
            setBotaoMenuHamburguer('menuOff')
            setBotaoMenuX('menuOn')
        }else{
            setMenu('menuOff')
            setBotaoMenuHamburguer('menuOn')
            setBotaoMenuX('menuOff')
        }
    }

    return(
        <header id="header">
            <Link to="/" onClick={iniciarNoTopo} className="logo"> <img src={process.env.PUBLIC_URL + "/assets/img/logo-matheus-urban.png"} className="logo-img" alt="Logo Matheus Urban"/></Link>
            <div className="menuMobile">
                <button className="btn" onClick={menuMobileOnOff}>
                    <img src={process.env.PUBLIC_URL + "/assets/img/menu-deep.svg"} alt="Menu Aberto" id="menuFechado" className={botaoMenuHamburguer}/>
                    <img src={process.env.PUBLIC_URL + "/assets/img/circle-dashed-x.svg"} alt="Menu Fechado" id="menuXdefault" className={botaoMenuX}/>
                </button>
                <nav className={`nav-mobile ${menu}`}>
                        <Link to="/" onClick={iniciarNoTopo}>Home<hr/></Link>
                        <Link to="/projetos" onClick={iniciarNoTopo}>Projetos<hr/></Link>
                        <Link to="contatos" onClick={iniciarNoTopo}>Contatos<hr/></Link>
                </nav>
            </div>
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