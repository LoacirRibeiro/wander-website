import React, { useEffect } from "react";
import './Review.css';

import user1 from '../Assets/user1.jpg'
import user2 from '../Assets/user2.jpg'
import user3 from '../Assets/user3.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Review(){

    useEffect(() =>{
        Aos.init ({duration:2000})
    }, [])

    return (
        <div className="review section">
            <div className="secContainer">
                <span className="secTitle">
                    O que as pessoas dizem
                </span>

                <div className="reviewContainer container grid">

                    <div data-aos='fade-up' data-aos-duration='3000' className="singleReview">
                        <div className="imgDiv">
                            <img src={user1}></img>
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been 
                            the industry's standard dummy text ever since 
                            the 1500s, when an unknown printer took a galley 
                            of type and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, 
                            remaining essentially unchanged.</p>
                            <div className="name">
                                Nicole webb
                            </div>


                    </div>
                    
                    <div  data-aos='fade-up' data-aos-duration='3500'className="singleReview">
                        <div className="imgDiv">
                            <img src={user2}></img>
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry.</p>
                            <div className="name">
                                Lidney josline
                            </div>


                    </div>
                    <div  data-aos='fade-up' data-aos-duration='4000'className="singleReview">
                        <div className="imgDiv">
                            <img src={user3}></img>
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been 
                            the industry's standard dummy text ever since 
                            the 1500s, when an unknown printer took a galley 
                            of type and scrambled it to make a type specimen 
                            book..</p>
                            <div className="name">
                                Ruper Loret
                            </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Review;