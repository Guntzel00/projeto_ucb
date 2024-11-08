import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header_logon from '../../components/header/Header_logon';
import './Pagina_inicial.css';
import ilustraçao from '../../assets/boas_vindas.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Btn from '../../components/btn/Btn';
import PropTypes from 'prop-types';

function Pagina_inicial() {
	const [bloodData, setBloodData] = useState([]);
	const [centrosData, setCentrosData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/banco-sangue/situacao')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro na requisição: ' + response.status);
				}
				return response.json();
			})
			.then((data) => {
				setBloodData(data); // Armazena os dados no estado
			})
			.catch((error) => {
				console.error('Erro ao buscar os dados:', error); // Trata erros
			});

		fetch('http://localhost:5000/api/centros-doacao/')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro na requisição: ' + response.status);
				}
				return response.json();
			})
			.then((data) => {
				setCentrosData(data); // Armazena os dados no estado
			})
			.catch((error) => {
				console.error('Erro ao buscar os dados:', error); // Trata erros
			});
	}, []);

	const BarraDeProgesso = ({ label, percentage }) => {
		return (
			<div className='row'>
				<span className='label'>{label}</span>
				<div className='progress-bar-container'>
					<div
						className='progress-bar-fill'
						style={{ width: `${percentage}%` }}
					></div>

					<div className='progress-bar-empty'></div>
				</div>
				<span className='percentage'>{percentage} %</span>
			</div>
		);
	};
	BarraDeProgesso.propTypes = {
		label: PropTypes.string.isRequired, // O label deve ser uma string e é obrigatório
		percentage: PropTypes.number.isRequired, // A referência deve ser uma string e é obrigatória
	};

	const CentrosDeDoacao = ({ nome, link_endereco }) => {
		return (
			<div className='centro'>
				<div>
					<h3>{nome}</h3>
					<a target='_blank' href={link_endereco}>
						<p>
							Ver localização {''}
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</p>
					</a>
				</div>
				<Btn label='Doar' referencia='#' />
			</div>
		);
	};
	CentrosDeDoacao.propTypes = {
		nome: PropTypes.string.isRequired, // O label deve ser uma string e é obrigatório
		link_endereco: PropTypes.string.isRequired, // A referência deve ser uma string e é obrigatória
	};

	return (
		<>
			<Header_logon />
			<div className='pag_inicial'>
				<div className='container'>
					<div className='container_boas_vindas'>
						<img src={ilustraçao} alt='Dois médicos segurando uma prancheta' />
						<h1>
							<span>Agende sua doação,</span>
							<br />
							salve uma vida.
						</h1>
					</div>
					<div className='divisor'></div>
					<div className='container_nivel_banco_de_sangue'>
						<h2>
							Situação do banco de sangue{' '}
							<span role='img' aria-label='blood drop'>
								🩸
							</span>
						</h2>
						<div className='porcentagens'>
							{bloodData.map((item) => (
								<BarraDeProgesso
									key={item.id}
									label={item.tipo_sanguineo}
									percentage={item.porcentagem}
								/>
							))}
						</div>
					</div>
					<div className='divisor'></div>
					<div className='container_lista_centros_de_doacao'>
						<h2>Centros de doação próximos a você 🏥</h2>
						{centrosData.map((centro) => (
							<CentrosDeDoacao
								key={centro._id}
								nome={centro.nome}
								link_endereco={centro.link_localizacao}
							/>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_inicial;
