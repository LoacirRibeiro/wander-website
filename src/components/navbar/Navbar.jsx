import React, { useState } from "react";
import './Navbar.css';

// importe icons
import { AiFillCloseCircle  } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { TbGridDots } from 'react-icons/tb'


function Navbar(){
    
// vamos exibir a barra de navegação navbar
const [active, setActive] = useState('menuDiv')

const showNavBar = () => {
    setActive('menuDiv activeNavbar')
}

// vamos remover a barra de navegação navbar
const removeNavBar = () => {
    setActive('menuDiv')
}

    return (
        <div>
            <div className="header flex">
                <div className="logoDiv">
                    <h3 className="logo">Wonder</h3>
                </div>
                {/* substitue menuDiv por active */}
                <div className={active}> 
                    <ul className="menuLists">
                        <li className="navItem">
                        <a href='#' onClick={removeNavBar} className='menuLink' >Home</a>
                        </li>
                        <li className="navItem">
                        <a href='#' onClick={removeNavBar} className='menuLink' >Sobre</a>
                        </li>
                        <li className="navItem">
                        <a href='#' onClick={removeNavBar} className='menuLink' >Nossos Passeios</a>
                        </li>
                        <li className="navItem">
                        <a href='#' onClick={removeNavBar} className='menuLink' >Galeria</a>
                        </li>
                        <li className="navItem">
                        <a href='#' onClick={removeNavBar} className='menuLink' >Blog</a>
                        </li>
                        <li className="navItem">
                        <a href='#' onClick={removeNavBar} className='menuLink' >Contato</a>
                        </li>
                        <li className="navItem">
                        <a href='#' onClick={removeNavBar} className='menuLink' >Páginas</a>
                        </li>
                    </ul>
                   
                    <div onClick={removeNavBar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div className="socialIcons flex">
                    <BsFacebook className="icon"/>
                    <AiOutlineTwitter className="icon"/>
                    <AiFillYoutube className="icon"/>
                    <AiFillInstagram className="icon"/>
                </div>

                <div onClick={showNavBar} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;