import React from "react";
import './projetosCard.css'

const imagemLucelho = 'https://media.licdn.com/dms/image/D4D03AQH74s4DHNN8jw/profile-displayphoto-shrink_200_200/0/1691596939986?e=1709769600&v=beta&t=H_Bfhe48PK4-KpedlwWvUZf1nLoWkk3hkVDHN0krBTE';

const imagemWylkerson = 'https://media.licdn.com/dms/image/D4E35AQHS9t7V5AZ-cA/profile-framedphoto-shrink_200_200/0/1675182551590?e=1704996000&v=beta&t=-rVK7KmkffTBZ2lj7fQjacbIORoTiYXoQNVAyLD4-ss';

const imagemThiago =  'https://media.licdn.com/dms/image/D4D03AQE0RiTl72GSfg/profile-displayphoto-shrink_200_200/0/1696467158903?e=1709769600&v=beta&t=3bql4UJUYsFbCoNBfeboLysyyjyk0s8sT9vaEWXHlE4';

const imagemJoao = 'https://media.licdn.com/dms/image/C5603AQGmSbVW0dc1_A/profile-displayphoto-shrink_200_200/0/1617066523458?e=1709769600&v=beta&t=9SofXn2qJg4pHVoFoV3DuEh7a5RUanIqayc0cfoVsGY';

const imagemMateus = 'https://media.licdn.com/dms/image/C4D03AQE7FimzS06L4g/profile-displayphoto-shrink_200_200/0/1657891921981?e=1709769600&v=beta&t=m7c2jHXIi9nteJTeiWgg23ruLK-QRMBVkhuYhR0fQEw';

const imagemGustavo = 'https://media.licdn.com/dms/image/D4D03AQF788gOyVLNuQ/profile-displayphoto-shrink_200_200/0/1691001835464?e=1710374400&v=beta&t=PWEv8t6cWRVowRd24QgEJW9j72bAj9p80rc8dm0Afq8';

const imagemPri = 'https://media.licdn.com/dms/image/D4D35AQFvcQQ3LWnvRw/profile-framedphoto-shrink_200_200/0/1698245660485?e=1705208400&v=beta&t=izSjK3o9F1t-r6m_OaO2EAeEXvLKoHoCGyLak1Qick8';

export const tecnologias = [
    {id: 1,nome: 'HTML', icon: 'assets/icons/html.png'},
    {id: 2,nome: 'CSS', icon: 'assets/icons/css.png'},
    {id: 3,nome: 'JavaScript', icon: 'assets/icons/javascript.png'},
    {id: 4,nome: 'React.js', icon: 'assets/icons/react.png'},
    {id: 5,nome: 'Styled Components', icon: 'assets/icons/styled-components.svg'},
    {id: 6,nome: '.NET(C#)', icon: 'assets/icons/csharp.png'},
    {id: 7,nome: 'Photoshop', icon: 'assets/icons/photoshop.png'},
]

const [html, css, javascript, react, styledComponents, csharp, photoshop] = tecnologias;

export const contributors = [
    {id: 1, nome: 'Lucelho Silva', cargo: 'CEO', linkedin: 'https://www.linkedin.com/in/lucelho-silva-b17196239/', imagem: imagemLucelho},
    {id: 2, nome: 'Thiago Michaelsen', cargo: 'CEO', linkedin: 'https://www.linkedin.com/in/tmm/', imagem: imagemThiago},
    {id: 3, nome: 'Wylkerson Arantes', cargo: 'COO', linkedin: 'https://www.linkedin.com/in/wylkerson-arantes-67747b215/', imagem: imagemWylkerson},
    {id: 4, nome: 'Mateus Santos', cargo: 'COO', linkedin: 'https://www.linkedin.com/in/mateus-santos-b8b826162/', imagem: imagemMateus},
    {id: 5, nome: 'Gustavo Archein', cargo: 'CMO', linkedin: 'https://www.linkedin.com/in/oarchein/', imagem: imagemGustavo},
    {id: 6, nome: 'João Vitor', cargo: 'CHRO', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-vitor-silva-23191520a/', imagem: imagemJoao},
    {id: 7, nome: 'Priscilla Trevizan', cargo: 'Gestora de Equipes', linkedin: 'https://www.linkedin.com/in/priscillatrevizan/', imagem: imagemPri},
]

const [Lucelho, Thiago, Wyl, Mateus, Gustavo, Joao, Pri] = contributors;

export const projetosDev = [

    {id: 1, nome: 'Developers (Discord)', descricao: 'Comunidade de tecnológica dedicada ao seu crescimento, sem fins lucrativos.', tecnologias: [javascript,  react, styledComponents, photoshop], image: 'assets/img/developers-bg.jpg', github: null, demo: 'https://discord.com/invite/comunidade-developers', contribuidores: [Lucelho, Thiago, Wyl, Mateus, Gustavo, Joao, Pri]},

    {id: 2, nome: 'Urban Store', descricao: 'Simulação de um e-commerce de tênis raros e luxuosos.', tecnologias: [css, javascript, react, photoshop], image: 'assets/img/urban-store-bg.jpg', github: 'https://github.com/urbanykv/urban-store', demo: 'https://urban-store-coral.vercel.app/', contribuidores: null},

    {id: 3, nome: 'Detone o Ralph', descricao: 'Jogo do Detona Ralph estilo "Whac-A-Mole".', tecnologias: [html, css, javascript, photoshop], image: 'assets/img/detona-ralph-bg.jpg', github: 'https://github.com/urbanykv/jogo-detona-ralph', demo: 'https://jogo-detona-ralph-one.vercel.app/', contribuidores: null},

    {id: 4, nome: 'Wiki de Repositórios GitHub', descricao: 'App consome API do GitHub para buscar as informações do perfil desejado.', tecnologias: [javascript, react, styledComponents], image: 'assets/img/wiki-repo-bg.jpg', github: 'https://github.com/urbanykv/wiki-repositorios', demo: 'https://wiki-repositorios-mu.vercel.app/', contribuidores: null},

    {id: 5, nome: "Urban's Ristorante", descricao: 'Cardápio Digital de um restaurante fictício.', tecnologias: [css, javascript, react, photoshop], image: 'assets/img/urban-ristorante-bg.jpg',
    imageDestaque: 'assets/img/urban-ristorante.png',
    github: 'https://github.com/urbanykv/urban-ristorante', demo: 'https://urban-ristorante.vercel.app/', contribuidores: null},

    {id: 6, nome: 'Consultar CEP', descricao: 'Aplicação que consome API de CEP no intuito de achar a rua desejada.', tecnologias: [html, css, javascript], image: 'assets/img/consultar-cep-bg.jpg', github: 'https://github.com/urbanykv/consultar-cep', demo: 'https://consultar-cep-omega.vercel.app/', contribuidores: null}
    
]

export const CardProjetos = () => {

    return(
        <>
            {projetosDev.map( projeto => (
                <div className="card" key={projeto.id}>
                    <img src={projeto.image} alt="opacidade"/>
                    <h1 id="tituloCard">{projeto.nome}</h1>
                    <p className="desc">{projeto.descricao}</p>
                    <div className="tecnologias">
                        {projeto.tecnologias.map(tec => <img className="tecs-projetos" src={tec.icon} alt={tec.nome} key={tec.id}/>)}
                    </div>
                    <div className="btns">
                        {projeto.github === null ? null : 
                        <a href={projeto.github} target="__blank" className="btn-projetos" id="repo">Repositório</a>}
                        {projeto.demo === null ? null : 
                        <a href={projeto.demo} target="__blank" className="btn-projetos" id="demo">Acessar</a>}
                    </div>
                    {projeto.contribuidores === null ? null: 
                    <div className="contributors">
                            <div className="info-btn">
                                <span className="contribuidores-btn-span">Contribuidores</span>
                                <img src="assets/img/contributors.svg" className="open-btn-contributors"/>
                            </div>
                        <hr/>
                        <div className="lista-de-contribuidores">
                            {projeto.contribuidores?.map(contribuidores => (
                                <a className="btn-contributors" href={contribuidores.linkedin} target="_blank" key={contribuidores.id}>
                                    <div className="info-contribuidores">
                                        <span className="nome-contribuidores">{contribuidores.nome}</span>
                                        <span className="funcao-contribuidores">{contribuidores.cargo}</span>
                                    </div>
                                    <img src={contribuidores.imagem} alt={contribuidores.nome}/>
                                </a>
                            ))}
                        </div>
                    </div>}
                </div>
            ))}
        </>
    )
}