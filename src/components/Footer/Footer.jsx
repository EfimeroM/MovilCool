import React from 'react'
import './footer.scss'
import { BsArrowUpCircleFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Redes } from "../Header/Redes"

export const Footer = () => {
  return (
    <div id='footer-box'>
        <div id='wsp-up'>
            <a href="#header">
                <BsArrowUpCircleFill className='up'/>
            </a>
            <IoLogoWhatsapp className='wsp' />
        </div>
        <div id='footer'>
            <img src="./img/logo/logo-movilcool-blanco.png" />
            <Redes />
        </div>
    </div>
  )
}
