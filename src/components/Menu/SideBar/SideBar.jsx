import { GrFormClose } from "react-icons/gr";
import { capitalizeWord } from "../../../helpers/CapitalizeWord/CapitalizeWord";
import FilterLink from "./FilterLink/FilterLink";

import "./SideBar.css";


function SideBar({id, productos}) {
	return (
		<aside className="container__SideBar">
			<section className="container__main_box">
				<h3 className="box__main_title">{capitalizeWord(id)}</h3>
				<hr className="main_box__line"/>
			</section>

			<section className="container__tags_box">
				{
					(id === 'celulares') &&
					<h4 className="tags_box__title">Celulares y Smartphones</h4>
				}
				{
					(id === 'accesorios') &&
					<h4 className="tags_box__title">Accesorios</h4>
				}
				{
					(id === 'promociones') &&
					<h4 className="tags_box__title">Promociones</h4>
				}
				<TagContainer />
			</section>

			<MarcasContainer productos={productos}/>
				
		</aside>
	);
}

const TagContainer = () => {
	return (
		<div className="tags_box__container">
			{/* <span className="tag">
				<span className="tag___box_icon">
					<GrFormClose className="box_icon__icon"/>
				</span>
				<p className="tag_name">Apple</p>
			</span> */}
		</div>
	);
}


const MarcasContainer = ({productos}) => {
	const unique = [...new Set(productos.map(producto => producto.marca))]; 
	console.log(unique);

	return (
		<section className="container__filter_box">
			<h5 className="filter_box__title">Marcas</h5>
			{
				unique.map(marca => <FilterLink marca={marca}/>)
			}
		</section>
	);
}

export default SideBar;