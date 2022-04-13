import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BigCard.scss";

function BigCard({id, nombre, color, imageUrl, almacenamiento}) {
	return (
		<Link to={`/detalle/${id}`} style={{textDecoration:"none"}}>
			<div id="bigcard-container">
				<div className="bigcard-header-box">
					<div className="bigcard-header">
						Disponible Hasta 24/07
					</div>
				</div>
				<div className="bigcard-body-box">
					<div className="bigcard-body-data">
						<h1>{nombre}</h1>
						<div>
							{
								color[1]?
								<h2>Color: <div style={{background: `${color[0].color}`}}></div><h2>+</h2></h2>
								:
								<h2>Color: <div style={{background: `${color[0].color}`}}></div></h2>
							}
							{
								almacenamiento[1]?
								<h2>Memoria: {almacenamiento[0].almacenamiento}+</h2>
								:
								<h2>Memoria: {almacenamiento[0].almacenamiento}</h2>
							}
						</div>
						<p>*Precio disponible hasta agotar stock</p>
					</div>
					<div className="bigcard-body-img">
						<img src={imageUrl[0].img} />
					</div>
				</div>
			</div>
		</Link>
	);
}

export default BigCard;