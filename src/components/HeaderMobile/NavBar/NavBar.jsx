import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillShopping } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { FaMobileAlt, FaHeadphones, FaUserAlt, FaTiktok} from "react-icons/fa";
import { FiPercent, FiMessageCircle} from "react-icons/fi";
import { HiUserCircle, HiShoppingCart } from "react-icons/hi";
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";
import movilcoolLogoColor from "../../../img/logo/logo-movilcool-color.png"
import './NavBar.scss';

export const NavBar = () => {
    let count = 0 
    function disableScroll(){  
        window.scrollTo(0, 0);
    }
    function desplegarMenu(){
        if(count === 0){
            const elem = document.getElementById('body-menu-container');
            const elem2 = document.getElementById('body-menu');
            elem.style.left = '0';
            elem.style.background = 'rgba(0, 0, 0, 0.466)'
            elem2.style.left = '0';
            window.addEventListener('scroll', disableScroll);
            count++
        }
        else{
            const elem = document.getElementById('body-menu-container');
            const elem2 = document.getElementById('body-menu');
            elem.style.left = '-100%';
            elem2.style.left = '-100%';
            window.removeEventListener('scroll', disableScroll);
            count--
        }
    }
  return (
    <div id="header-container"> 
        <div className="header"> 
            <div className="icon-menu"> 
                <AiOutlineMenu className='icon' onClick={desplegarMenu}/>  
            </div>
            <div className="logo"> 
                <Link to={"/"}>
                    <img src={movilcoolLogoColor}/>
                </Link>
            </div>
            <div className="search"> 
                <AiOutlineSearch className='icon'/>  
            </div>
        </div>
        <div id="body-menu-container">
            <div id="body-menu">
                <div className="header">
                    <img src={movilcoolLogoColor}/>
                    <AiOutlineClose className='icon' onClick={desplegarMenu}/> 
                </div>
                <div className="body">
                    <ul>
                        <li><HiHome className='icon' /><Link to={"/"} className="mobile-link"><div>Inicio</div></Link></li>
                        <li><FaMobileAlt className='icon' /><Link to="/catalogo/celulares" className="mobile-link"><div>Celulares</div></Link></li>
                        <li><FaHeadphones className='icon' /><Link to="/catalogo/accesorios" className="mobile-link"><div>Accesorios</div></Link></li>
                        <li><FiPercent className='icon' /><Link to="/menu/promociones" className="mobile-link"><div>Promociones</div></Link></li>
                        <li><FiMessageCircle className='icon' /><Link to="/contacto" className="mobile-link"><div>Contacto</div></Link></li>
                    </ul>
                    <ul>
                        <li><HiUserCircle className='icon' /><div>Mi perfil</div></li>
                        <li><HiShoppingCart className='icon' /><div>Carrito</div></li>
                    </ul>
                    <ul>
                        <li><AiFillShopping className='icon' /><div>Estado de pedido</div></li>
                        <li><FaUserAlt className='icon' /><div>Iniciar Sesion/Registro</div></li>
                    </ul>
                    <ul>
                        <div id='redes' className='icon-text'>
                            <p>¡Siguenos en nuestras redes!</p>
                            <div>
                                <a href="/" target="blank">
                                    <FaTiktok className='icon-redes' />
                                </a>
                                <a href="https://www.instagram.com/movilcool/" target="blank">
                                    <RiInstagramFill className='icon-redes' />
                                </a>
                                <a href="https://www.facebook.com/MovilCool" target="blank">
                                    <RiFacebookBoxFill className='icon-redes' />
                                </a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
  )
}
