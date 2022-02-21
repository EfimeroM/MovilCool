import { GrFormClose } from "react-icons/gr";
import { capitalizeWord } from "../../../helpers/CapitalizeWord/CapitalizeWord";
import { FilterContext } from "../../../Context/FilterContext";
import { useContext } from "react";
import { MarcasLinks, ColoresLinks } from "../SideBar/FilterLink/FilterLink";

// Styles
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
			<ColoresContainer productos={productos} />
				
		</aside>
	);
}

const TagContainer = () => {
	const { marca, removeMarcaTag, color, removeColorTag } = useContext(FilterContext);

	return (
		<div className="tags_box__container">
			{
				(marca) &&
					<span className="tag">
						<span className="tag___box_icon">
							<GrFormClose className="box_icon__icon" onClick={removeMarcaTag}/>
						</span>
						<p className="tag_name">{marca}</p>
					</span>
			}
			{
				(color) &&
					<span className="tag">
						<span className="tag___box_icon">
							<GrFormClose className="box_icon__icon" onClick={removeColorTag}/>
						</span>
						<p className="tag_name">{color}</p>
					</span>
			}
		</div>
	);
}

const MarcasContainer = () => {
	let marcas = ['Apple','Samsung','Xiaomi','Huawei','One Plus', 'Oppo'];

	// const unique = [...new Set(productos.map(producto => producto.marca))]; 

	return (
		<section className="container__filter_box">
			<h5 className="filter_box__title">Marcas</h5>
			{
				marcas.map(marcaFiltrada => <MarcasLinks key={marcaFiltrada} marcaFiltrada={marcaFiltrada} />)
			}
		</section>
	);
}
const ColoresContainer = () => {
	let colores = ['Red','Black','White','Gold','Rose Gold'];
	return (
		<section className="container__filter_box">
			<h5 className="filter_box__title">Colores</h5>
			{
				colores.map(colorFiltrado => <ColoresLinks key={colorFiltrado} colorFiltrado={colorFiltrado} />)
			}
		</section>
	);
}

export default SideBar;