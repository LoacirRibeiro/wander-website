import React, { useEffect } from "react";
import './Cards.css';

// importação de imagens
import cardImage1 from '../Assets/cardImage1.jpg'
import cardImage2 from '../Assets/cardImage2.jpg'
import cardImage3 from '../Assets/cardImage3.jpg'

// importação de icones
import { AiOutlineSwapRight } from "react-icons/ai";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Cards(){

    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    
    return (
        <div className="cards">
            <div data-aos='fade-up' data-aos-duration='4000' className="cardContainer container grid">
                <div className="singleCard">
                    <div className="imgDiv">
                        <img src={cardImage1} />
                    </div>
                    <h4 className="textDiv"> vôo de balão</h4>
                </div>

                <div className="singleCard">
                    <div className="imgDiv">
                        <img src={cardImage2} />
                    </div>
                    <h4 className="textDiv">Viajens na Praia</h4>
                </div>

                <div className="singleCard">
                    <div className="imgDiv">
                        <img src={cardImage3} />
                    </div>
                    <h4 className="textDiv">Turismo nas Montanhas</h4>
                </div>
            </div>

            <div className="spanText flex">
            Outros passeios <AiOutlineSwapRight className="icon"/>
            </div>
        </div>
    )
}

export default Cards;