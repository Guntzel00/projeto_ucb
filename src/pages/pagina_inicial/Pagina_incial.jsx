import Footer from '../../components/footer/footer';
import Header_logon from '../../components/header/Header_logon';
import './Pagina_inicial.css';
import ilustraçao from '../../assets/boas_vindas.svg';

function Pagina_inicial() {
	const bloodData = {
		'A+': 60,
		'B+': 50,
		'AB+': 60,
		'O+': 30,
		'A-': 80,
		'B-': 50,
		'AB-': 60,
		'O-': 40,
	};

	// eslint-disable-next-line react/prop-types
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
							{Object.entries(bloodData).map(([label, percentage]) => (
								<BarraDeProgesso
									key={label}
									label={label}
									percentage={percentage}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_inicial;
