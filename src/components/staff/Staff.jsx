import React, { useEffect } from "react";
import './Staff.css'

// importaça~o de imagens
import user4 from '../Assets/user4.jpg'
import user5 from '../Assets/user5.jpg'
import user6 from '../Assets/user6.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


function Staff(){

    useEffect(() => {
        Aos.init ({duration:2000})
    })

    return (
        <div className="staff container section">
            <div className="secContainer">
                <span className="secTitle">
                    Pessoas Diferentes – Uma Missão
                </span>

                <div className="staffContainer grid">

                    <div  data-aos='fade-up' data-aos-duration='2000'  className="singleStaff">
                        <div className="imgDiv">
                            <img src={user4} />
                        </div>

                        <span className="name">
                            Nicle Charmine
                        </span>
                        <span className="jobTitle">
                            CEO Wander
                        </span>
                        <span className="contact">
                            +344 990 7758 90
                        </span>
                    </div>

                    <div  data-aos='fade-up' data-aos-duration='3500' className="singleStaff">
                        <div className="imgDiv">
                            <img src={user5} />
                        </div>

                        <span className="name">
                            Cirilo Lobo
                        </span>
                        <span className="jobTitle">
                            Especialista de TI
                        </span>
                        <span className="contact">
                            +344 990 5496 95
                        </span>
                    </div>

                    <div  data-aos='fade-up' data-aos-duration='4000' className="singleStaff">
                        <div className="imgDiv">
                            <img src={user6} />
                        </div>

                        <span className="name">
                            Mel gupta
                        </span>
                        <span className="jobTitle">
                            Engenheiro de software
                        </span>
                        <span className="contact">
                            +344 990 9586 24
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Staff;