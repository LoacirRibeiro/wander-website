import React, { useEffect } from "react";
import './Footer.css'

// importação de icones
import {HiPhone} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import {FaFacebookF, FaLocationArrow} from 'react-icons/fa'
import {AiOutlineTwitter, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'


function Footer(){

    useEffect(() => {
        Aos.init ({duration:2000})
    }, [])

    return (
        <div className="footer">

            <div className="secContainer container">
                <div className="content grid">
                    
                    <div data-aos='fade-up' data-aos-duration='2000' className="row">
                        <div className="spanText">
                            CONTATOS
                        </div>

                        <div className="contactDiv">
                            <span className="flex">
                                <HiPhone className="icon"/>
                                <span>+244 344 556 67</span>
                            </span>
                            <span className="flex">
                                <MdEmail className="icon"/>
                                <span>loacirr@gmail.com</span>
                            </span>
                            <span className="flex">
                                <FaLocationArrow className="icon"/>
                                <span>+244 344 556 67</span>
                            </span>
                        </div>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='3000'className="row">
                        <div className="spanText">
                                NOTICAIS POPULARES
                        </div>

                        <div className="singleNews">
                            <span className="text">
                                Guia pessoal turístico para a maioria dos lugares 
                                para visitar no mundo.
                            </span>
                            <p>
                               04 Janeiro 2024 
                            </p>
                        </div>

                        <div className="singleNews">
                            <span className="text">
                                A grande revelação do hotel mais 
                                icônico do mundo - Atlantis the Royal
                            </span>
                            <p>
                               20 Janeiro 2024 
                            </p>
                        </div>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='4000'className="row">
                        <div className="spanText">
                            LINKS RÁPIDOS
                        </div>
                        <div className="footerLinks">
                            <ul>
                                <li>Sobre nós</li>
                                <li>Nosso time</li>
                                <li>Galeria</li>
                                <li>Blog</li>
                                <li>Carreiras</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottomDiv flex">
                    <p>Copyright 2024 Loatech - todos os direitos reservados</p>

                    <div className="socials flex">
                    <FaFacebookF className="icon" />
                    <AiOutlineTwitter className="icon" />
                    <AiFillYoutube className="icon" />
                    <AiFillInstagram className="icon" />
                    </div>

                    <p>Politica de Privacidade.</p>
                </div>
             </div>

        </div>
    )
}

export default Footer;