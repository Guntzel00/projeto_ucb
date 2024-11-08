import { useState } from 'react'; // Correto: useState está sendo importado do React
import Footer from '../../components/footer/footer';
import Header_logon from '../../components/header/Header_logon';
import { Link } from 'react-router-dom';
import './Pagina_agendamento.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ilustraçao from '../../assets/agendamento.svg';
import ilustraçao2 from '../../assets/notas.svg';

function Pagina_agendamento() {
	const [selectedDate, setSelectedDate] = useState(null);

	return (
		<>
			<Header_logon />
			<div className='pag_agendamento'>
				<div className='btn-voltar'>
					<Link className='btn' to={`/home`}>
						<FontAwesomeIcon icon={faArrowLeft} /> Voltar
					</Link>
				</div>
				<div className='container'>
					<h1>Hospital Regional do Gama</h1>
					<div className='escolha-data'>
						<DatePicker
							className='date-picker'
							selected={selectedDate}
							onChange={(date) => setSelectedDate(date)}
							dateFormat='dd/MM/yyyy'
							placeholderText='Selecione uma data'
						/>
						<img src={ilustraçao} alt='Dois médicos segurando uma prancheta' />
					</div>
					<div className='divisor'></div>
					<div className='escolha-hora'>
						<h2>Selecione o horário da doação:</h2>
						<div className='horarios'>
							<button className='btn-horario'>08:00</button>
							<button className='btn-horario'>09:00</button>
							<button className='btn-horario'>10:00</button>
							<button className='btn-horario'>11:00</button>
							<button className='btn-horario'>12:00</button>
							<button className='btn-horario'>13:00</button>
							<button className='btn-horario'>14:00</button>
							<button className='btn-horario'>15:00</button>
							<button className='btn-horario'>16:00</button>
							<button className='btn-horario'>17:00</button>
						</div>
					</div>
					<div className='divisor'></div>
					<div className='doc-pdf' style={{ height: '30rem' }}>
						<iframe
							src='/src/assets/termo.pdf'
							style={{ width: '50rem', height: '30rem', overflow: 'hidden' }}
							title='PDF Viewer'
						/>
					</div>
					<div className='declaracao'>
						<label className='checkbox-label'>
							<input
								type='checkbox'
								checked={'checked'}
								onChange={'onChange'}
								className='custom-checkbox'
							/>
							Aceito os termos e condições
						</label>
					</div>

					<div className='divisor'></div>
					<div className='avisos'>
						<div>
							<h2>Preparação para doação:</h2>
							<p>
								<span>Exame de sangue:</span> Você deve ir a qualquer hospital
								público para realizar o hemograma completo, ou ir à um
								laboratório particular.
							</p>
							<p>
								<span>Alimentação:</span> Antes de doar, alimente-se bem e evite
								alimentos gordurosos nas 4 horas que antecedem a doação.
							</p>
							<p>
								<span>Hidratação:</span> Beba bastante água antes de doar
								sangue.
							</p>
							<p>
								<span>Descanso:</span> Certifique-se de ter dormido pelo menos 6
								horas na noite anterior.
							</p>
						</div>
						<img src={ilustraçao2} alt='Dois médicos segurando uma prancheta' />
					</div>
					<button className='btn'>Finalizar agendamento</button>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_agendamento;
