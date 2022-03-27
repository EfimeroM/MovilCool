import React from 'react';
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

export const Redes = () => {
  return (
    <div id='redes' className='icon-text'>
        <a className='link' href="/"><FaTiktok className='icon-redes' /></a>
        <a className='link' href="https://www.instagram.com/movilcool/" target="blank"><RiInstagramFill className='icon-redes' /></a>
        <a className='link' href="https://www.facebook.com/MovilCool" target="blank"><RiFacebookBoxFill className='icon-redes' /></a>
        <p>¡Siguenos en nuestras redes!</p>
    </div>
  );
};
