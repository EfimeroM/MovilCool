import React from 'react';

// Styles
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="container">
      <div className="container__Form">
        <form className="Form__data" action="">
          <label className="data__label" for="name">Nombre</label>
          <input className="data__input" id="name" type="text" />
          <label className="data__label" for="email">Correo</label>
          <input className="data__input" id="email" type="email" />
          <label className="data__label" for="subject">Asunto</label>
          <input className="data__input" id="subject" type="text" />
          <label className="data__label" for="msg">Mensaje</label>
          <textarea className="data__input" id="msg" type="text"></textarea>
          <button className="data__button" type="button">Enviar</button>
        </form>
        <div className="Form__info">
          <section className="info__section">
            <h5 className="section__title">Horario</h5>
            <p className="section__text">Lunes a sábado de 9 a 21 horas</p>
            <p className="section__text">Domingo 9 a 16:15</p>
          </section>
          <section className="info__section">
            <h5 className="section__title">Correo</h5>
            <p className="section__text">tucorreochido@chido.com</p>
          </section>
          <section className="info__section">
            <h5 className="section__title">Dirección</h5>
            <p className="section__text">
              Garcilaso de la Vega 1358, Cercado de Lima 15001, Perú
            </p>
            <img className="image" src="./assets/Rectangle.png" alt="" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.801019147818!2d-77.04053198462034!3d-12.057207591460365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c6b076c969%3A0x5e8f59e333950b22!2sAv.%20Inca%20Garcilaso%20de%20la%20Vega%201358%2C%20Cercado%20de%20Lima%2015001%2C%20Per%C3%BA!5e0!3m2!1ses-419!2smx!4v1644616980952!5m2!1ses-419!2smx" className="map"/>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contacto;

