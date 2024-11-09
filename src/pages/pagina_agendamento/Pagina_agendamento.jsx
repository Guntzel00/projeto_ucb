import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header_logon from '../../components/header/Header_logon';
import './Pagina_agendamento.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ilustraçao from '../../assets/agendamento.svg';
import ilustraçao2 from '../../assets/notas.svg';

function Pagina_agendamento() {
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [hospitalData, setHospitalData] = useState(null);
	const [userId, setUserId] = useState(null);
	const { id } = useParams(); // Captura o ID da URL
	const navigate = useNavigate(); // Hook para navegação programática

	useEffect(() => {
		// Recupera o token do localStorage
		const token = localStorage.getItem('token');

		console.log('Token:', token);

		if (token) {
			// Busca as informações do usuário para obter o ID
			fetch('http://localhost:5000/api/usuarios/me', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token.trim()}`,
					'Content-Type': 'application/json',
				},
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Erro ao recuperar as informações do usuário');
					}
					return response.json();
				})
				.then((data) => {
					setUserId(data.id); // Armazena o ID do usuário
				})
				.catch((error) => {
					console.error('Erro ao buscar as informações do usuário:', error);
				});
		} else {
			console.error('Token não encontrado. O usuário não está autenticado.');
		}

		// Busca os dados do hospital usando o ID
		fetch(`http://localhost:5000/api/centros-doacao/${id}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro na requisição: ' + response.status);
				}
				return response.json();
			})
			.then((data) => {
				setHospitalData(data);
			})
			.catch((error) => {
				console.error('Erro ao buscar os dados do hospital:', error);
			});
	}, [id]);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleSelectTime = (time) => {
		setSelectedTime(time);
	};

	const handleFinalizeAppointment = () => {
		if (!selectedDate || !selectedTime || !isChecked) {
			alert('Por favor, selecione uma data, horário e aceite os termos.');
			return;
		}

		if (!userId) {
			alert('Erro: Usuário não autenticado.');
			return;
		}

		const formattedDate = selectedDate.toISOString().split('T')[0]; // Formata a data para 'YYYY-MM-DD'
		const newAppointment = {
			idUsuario: userId, // Usa o ID do usuário autenticado
			idCentroDoacao: hospitalData._id,
			data: formattedDate,
			hora: selectedTime,
			local: hospitalData.nome,
			status: 'Aguardando hemograma',
			hemograma: 'exame.pdf',
		};

		const token = localStorage.getItem('token');
		fetch('http://localhost:5000/api/agendamentos/agendar', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newAppointment),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro ao criar agendamento: ' + response.status);
				}
				return response.json();
			})
			.then(() => {
				alert('Agendamento criado com sucesso!');
				navigate('/acompanhamento'); // Redireciona o usuário após a criação bem-sucedida
			})
			.catch((error) => {
				console.error('Erro ao criar agendamento:', error);
				alert('Erro ao criar agendamento. Tente novamente.');
			});
	};

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
					<h1>{hospitalData ? hospitalData.nome : 'Carregando...'}</h1>
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
							{[
								'08:00',
								'09:00',
								'10:00',
								'11:00',
								'12:00',
								'13:00',
								'14:00',
								'15:00',
								'16:00',
								'17:00',
							].map((time) => (
								<button
									key={time}
									className={`btn-horario ${
										selectedTime === time ? 'selected' : ''
									}`}
									onClick={() => handleSelectTime(time)}
								>
									{time}
								</button>
							))}
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
								checked={isChecked}
								onChange={handleCheckboxChange}
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
					<button className='btn' onClick={handleFinalizeAppointment}>
						Finalizar agendamento
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_agendamento;
