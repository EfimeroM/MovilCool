import React from 'react';
import { Redes } from './Redes';
import { FaTruck, FaUser } from "react-icons/fa";

export const TopHeader = () => {
  return (
    <div id='top-header'>
        <Redes />
        <div id='box-status-login'>
            <div id='order-status-header' className='icon-text'>
                <FaTruck className='icon-redes' />
                <p>Estado de tu pedido</p>
            </div>
            <div id='login-header' className='icon-text'>
                <FaUser className='icon-redes' />
                <p>Iniciar sesion / Registro</p>
            </div>
        </div>
    </div>
  );
};
