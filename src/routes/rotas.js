import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Projetos from "../components/projetos/projetos";
import Header from "../components/header/header";
import Contatos from "../components/contatos/contatos";

function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/projetos" element={<Projetos/>}/>
                <Route path="/contatos" element={<Contatos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas