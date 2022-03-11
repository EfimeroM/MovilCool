import React, { useEffect } from "react";
import "./BigCard.scss";

function BigCard({nombre, color, imageUrl}) {
	return (
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
						<h2>Color: {color}</h2>
						<h2>Memoria: 128gb</h2>
					</div>
					<p>*Precio disponible hasta agotar stock</p>
				</div>
				<div className="bigcard-body-img">
					<img src={imageUrl} />
				</div>
			</div>
		</div>
	);
}

export default BigCard;