import React from 'react'
import './footer.scss'
import { BsArrowUpCircleFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Redes } from "../Header/Redes"
import { enviarWsp } from '../../helpers/whatsapp';
import movilCoolBlanco from '../../img/logo/logo-movilcool-blanco.png'

export const Footer = () => {
  return (
    <div id='footer-box'>
        <div id='wsp-up'>
            <a href="#header">
                <BsArrowUpCircleFill className='up'/>
            </a>
            <IoLogoWhatsapp onClick={enviarWsp} className='wsp' />
        </div>
        <div id='footer'>
            <img src={movilCoolBlanco} />
            <Redes />
        </div>
    </div>
  )
}
