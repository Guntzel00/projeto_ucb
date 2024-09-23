import './Pagina_conteudos.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// Assets
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Componentes
import Footer from '../../components/footer/footer';
import Header_logon from '../../components/header/Header_logon';

function Pagina_conteudos() {
	const [artigosData, setArtigosData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/artigos')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro na requisição: ' + response.status);
				}
				return response.json();
			})
			.then((data) => {
				setArtigosData(data); // Armazena os dados no estado
			})
			.catch((error) => {
				console.error('Erro ao buscar os dados:', error); // Trata erros
			});
	}, []);

	const Bloco_de_depoimento = ({ titulo, resumo, link_img, desc_img }) => {
		return (
			<div className='bloco_depoimento'>
				<img src={link_img} alt={desc_img} />
				<div className='texto'>
					<h3>{titulo}</h3>
					<p>{resumo}</p>
					<Link to='/conteudos'>
						Ler mais <FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
		);
	};
	Bloco_de_depoimento.propTypes = {
		titulo: PropTypes.string.isRequired,
		resumo: PropTypes.string.isRequired,
		link_img: PropTypes.string.isRequired,
		desc_img: PropTypes.string.isRequired,
	};

	return (
		<>
			<Header_logon />
			<div className='pag_conteudos'>
				<div className='container'>
					<h1>Depoimentos e informações </h1>
					{artigosData.map((artigo) => (
						<Bloco_de_depoimento
							key={artigo.id}
							resumo={artigo.resumo}
							titulo={artigo.titulo}
							link_img={artigo.url_imagem}
							desc_img={artigo.desc_imagem}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_conteudos;