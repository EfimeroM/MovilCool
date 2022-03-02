import React, { useEffect } from "react";
import "./BigCard.css";

function BigCard({nombre, color, imageUrl}) {
	return (
		<div className="container__BigCard">
			<div className="ss">
			<div className="BigCard__box_header">
				<p className="box_header__title">Disponible hasta 24/07</p>
			</div>
			<div className="BigCard__box_content">
				<section className="box_content__information">
					<p className="information__box">{nombre}</p>
					<section className="information__specifics">
						<p>
							<b>Color: </b>{color}
						</p>
						<p>
							<b>Memoria:</b> 128gb
						</p>
					</section>
					<p className="information__price">
						Precio disponible hasta agotar stock
					</p>
				</section>
				<figure className="box_content__image">
					<img className="image_BigCard" src={imageUrl} alt={nombre} />
				</figure>
			</div>
			</div>
		</div>
	);
}

export default BigCard;