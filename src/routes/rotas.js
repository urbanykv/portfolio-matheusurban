import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Projetos from "../components/projetos/projetos";
import Header from "../components/header/header";

function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/projetos" element={<Projetos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas