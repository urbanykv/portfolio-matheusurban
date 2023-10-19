import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Projetos from "../components/projetos/projetos";
import Header from "../components/header/header";
import Contatos from "../components/contatos/contatos";

function Rotas(){

    const [botaoMenuX, setBotaoMenuX] = useState('menuOff');

    const [botaoMenuHamburguer, setBotaoMenuHamburguer] = useState('menuOn');

    const [menu, setMenu] = useState('menuOff');

    let menuMobileOnOff = () => {return;}

    return(
        <BrowserRouter>
            <Header 
            menu={menu} 
            setMenu={setMenu} 
            botaoMenuHamburguer={botaoMenuHamburguer} setBotaoMenuHamburguer={setBotaoMenuHamburguer}
            botaoMenuX={botaoMenuX} 
            setBotaoMenuX={setBotaoMenuX}
            menuMobileOnOff={menuMobileOnOff}
            />
            <Routes>
                <Route exact path="/" element={<Home menuMobileOnOff={menuMobileOnOff}
                menu={menu} 
                setMenu={setMenu} 
                setBotaoMenuHamburguer={setBotaoMenuHamburguer}
                setBotaoMenuX={setBotaoMenuX}/>}/>
                <Route path="/projetos" element={<Projetos menuMobileOnOff={menuMobileOnOff}
                menu={menu} 
                setMenu={setMenu} 
                setBotaoMenuHamburguer={setBotaoMenuHamburguer}
                setBotaoMenuX={setBotaoMenuX}
                />}/>
                <Route path="/contatos" element={<Contatos menuMobileOnOff={menuMobileOnOff}
                menu={menu} 
                setMenu={setMenu} 
                setBotaoMenuHamburguer={setBotaoMenuHamburguer}
                setBotaoMenuX={setBotaoMenuX}
                />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas