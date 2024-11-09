import Footer from '../../components/footer/footer';
import './Pagina_acompanhamento.css';
import Header_logon from '../../components/header/Header_logon';
import foto1 from '../../assets/agendamento_imagem.png';
import foto2 from '../../assets/upload.png';
import Btn from '../../components/btn/Btn';
import { useState, useEffect } from 'react';

function Pagina_acompanhamento() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [userId, setUserId] = useState(null);
	const [agendamentos, setAgendamentos] = useState([]);

	useEffect(() => {
		// Recupera o token do localStorage
		const token = localStorage.getItem('token');

		if (token) {
			// Busca o ID do usuário
			fetch('http://localhost:5000/api/usuarios/me', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
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
					return data.id; // Retorna o ID para a próxima requisição
				})
				.then((userId) => {
					// Busca os agendamentos do usuário com base no ID
					return fetch(`http://localhost:5000/api/agendamentos/${userId}`, {
						method: 'GET',
						headers: {
							Authorization: `Bearer ${token}`,
							'Content-Type': 'application/json',
						},
					});
				})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Erro ao recuperar os agendamentos');
					}
					return response.json();
				})
				.then((data) => {
					setAgendamentos(data); // Armazena os agendamentos no estado
				})
				.catch((error) => {
					console.error('Erro:', error);
				});
		} else {
			console.error('Token não encontrado. O usuário não está autenticado.');
		}
	}, []);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
		alert(`Arquivo selecionado: ${file.name}`);
	};

	return (
		<>
			<Header_logon />
			<div className='acompanhamento_container'>
				<div className='bloco-container'>
					<img
						src={foto1}
						alt='Imagem ilustrativa'
						className='acompanhamento-imagem'
					/>
					<div className='titulo-acompanhamento'>
						<h1>Acompanhamento de Agendamento</h1>
					</div>
					<p className='description'>
						O agendamento da doação de sangue é um processo importante para
						garantir que o doador possa contribuir de forma organizada e segura.
						Para iniciar o processo, o interessado deve selecionar um horário
						disponível e fornecer as informações necessárias no sistema. É
						importante lembrar que o agendamento não é definitivo até que o
						doador conclua o upload do documento necessário no site.
					</p>
					<p className='description'>
						Caso ocorra algum imprevisto ou mudança de planos, o agendamento
						pode ser cancelado a qualquer momento antes da conclusão. Somente
						após o envio do documento solicitado, o agendamento é considerado
						finalizado. Dessa forma, o sistema garante que os agendamentos sejam
						realizados de maneira eficiente, respeitando a disponibilidade e a
						flexibilidade dos doadores.
					</p>

					{agendamentos.map((agendamento) => (
						<div className='acompanhamento-card' key={agendamento._id}>
							<div className='detalhes-agendamento'>
								<h3>{agendamento.local}</h3>
								<p>Data: {new Date(agendamento.data).toLocaleDateString()}</p>
								<p>Horário: {agendamento.hora}</p>
								<p>Status: {agendamento.status}</p>
								<div className='btn-mensagem'>
									<Btn label='Mensagem' referencia='/mensagem' />
								</div>
							</div>
							{/* Imagem de upload e input de arquivo para cada agendamento */}
							<div className='upload-section'>
								<label
									htmlFor={`file-upload-${agendamento._id}`}
									className='upload-label'
								>
									<img
										src={foto2}
										alt='Imagem upload'
										className='upload-imagem'
									/>
								</label>
								<input
									type='file'
									id={`file-upload-${agendamento._id}`}
									className='file-input'
									onChange={handleFileChange}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_acompanhamento;
