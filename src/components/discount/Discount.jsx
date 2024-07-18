import React, { useEffect } from "react";
import './Discount.css';

import video from '../Assets/video.mp4'

import Aos from'aos'
import 'aos/dist/aos.css'

function Discount(){

    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    return (
        <div className="discount section">
            <div className="secContainer">
                <video src={video} autoPlay loop muted typeof="mp4"></video>
                <div className="textDiv">
                    <span  data-aos='fade-up' data-aos-duration='2000'className="title">
                        Inscreva-se com 35% de desconto.
                    </span>
                    <p data-aos='fade-up' data-aos-duration='2000'>Deseja obter desconto instantâneo para o próximo passeio
                        a qualquer um dos seus destinos favoritos.
                    </p>

                    <div data-aos='fade-up' data-aos-duration='3000' className="input_btn flex">
                        <input type='text' placeholder='entre com seu E-mail' />
                        <button className="btn">Increva-se</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount;