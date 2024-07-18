import React, { useEffect } from "react";
import './Home.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

function Home(){

    useEffect(() => {
        Aos.init({duration:2000})
    }, [])

    return (
        <div className="home">
            
            <div className="homeText">
                {/* efeito de subir o spanText */}
                <span data-aos='fade-up' data-aos-duration='2000' className="spanText">
                UMA EQUIPE DE ESPECIALISTAS EM VIAGENS
                </span>
                {/* efeito de subir data-aos='fade-up' data-aos-duration='4000'*/}
                <div data-aos='fade-up' data-aos-duration='4000'  className="homeTitle">
                    Confie <strong> Em nossa Experiência</strong>
                </div>
                {/* efeito de subir data-aos='fade-up' data-aos-duration='4000'*/}
                <div data-aos='fade-up' data-aos-duration='6000'  className="btn">Entrar em contato</div>
            </div>
        </div>
    )
}

export default Home;