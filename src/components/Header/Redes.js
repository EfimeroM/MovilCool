import React from 'react';
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

export const Redes = () => {
  return (
    <div id='redes' className='icon-text'>
        <FaTiktok className='icon-redes' />
        <RiInstagramFill className='icon-redes' />
        <RiFacebookBoxFill className='icon-redes' />
        <p>¡Siguenos en nuestras redes!</p>
    </div>
  );
};
