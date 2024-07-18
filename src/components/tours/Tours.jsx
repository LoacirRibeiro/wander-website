import React, { useEffect } from "react";

import './Tours.css';
// importação de icones
import { AiFillStar } from 'react-icons/ai'

// importação de imagens
import tourImage1 from '../Assets/tourImage1.jpg'
import tourImage2 from '../Assets/tourImage2.jpg'



    import Aos from 'aos'
import 'aos/dist/aos.css'

function Tours(){

    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    
    return (
        <div className="tours container section">
            <div className="secContainer">                
                <span className="secTitle">
                    Passeios quentes
                </span>

                <div className="tourContainer">

                    <div  data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
                        <div className="imgDiv">
                            <img src={tourImage1}></img>
                        </div> 
                        <div data-aos='fade-up' data-aos-duration='4000'
                         className="tourInfo">
                            <span className="tourTitle">
                                Espanha, Benidorm
                            </span>
                            <div className="stars_review flex">
                                <div className="stars">
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                </div>

                                <small className="custReview">
                                    2 Avaliação do cliente
                                </small>
                            </div>
                            <p>Espanha, um país da Península Ibérica da Europa, 
                                inclui 17 regiões autónomas com geografia e cultura 
                                diversas. A capital Madrid abriga o Palácio Real e o 
                                Museu do Prado. acolhendo obras de mestres europeus.
                            </p>
                            <button className="btn">Compre este passeio</button>
                        </div>

                        <span className="price">
                            $790
                        </span>
                    </div>

                    <div  data-aos='fade-up' data-aos-duration='3000' className="singleTour grid">
                        <div className="imgDiv">
                            <img src={tourImage2}></img>
                        </div> 
                        <div  data-aos='fade-up' data-aos-duration='4000'
                         className="tourInfo">
                            <span className="tourTitle">
                                Mauritius, Island, Índia
                            </span>
                            <div className="stars_review flex">
                                <div className="stars">
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                </div>

                                <small className="custReview">
                                    12 Avaliação do cliente
                                </small>
                            </div>
                            <p>Maurício, uma nação insular do Oceano Índico, é conhecida 
                                por suas praias, lagoas e recifes. o interior montanhoso
                                 inclui o Parque Nacional Black River Gorges, com 
                                 florestas tropicais.
                            </p>
                            <button className="btn">Compre este passeio</button>
                        </div>

                        <span className="price">
                            $590
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tours;