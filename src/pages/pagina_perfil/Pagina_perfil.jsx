import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import './Pagina_perfil.css';
import Header_logon from '../../components/header/Header_logon';
import foto1 from '../../assets/icon-imagem.png';

function Pagina_perfil() {
	const [formData, setFormData] = useState({
		email: '',
		rg: '',
		peso: '',
		dataNascimento: '',
		cep: '',
		cpf: '',
		telefone: '',
		endereco: '',
		doencaTransmissivel: '',
		sexo: '',
	});

	// Função para buscar os dados da API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3000/cadastro_usuarios');
				const data = await response.json();
				setFormData(data); // Carrega os dados no estado do formulário
			} catch (error) {
				console.error('Erro ao buscar dados:', error);
			}
		};

		fetchData();
	}, []);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// Função para enviar dados atualizados para a API
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3000/cadastro_usuarios', {
				method: 'PUT', // Método PUT para atualizar os dados
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				alert('Perfil atualizado com sucesso!');
			} else {
				alert('Erro ao atualizar o perfil');
			}
		} catch (error) {
			console.error('Erro ao atualizar perfil:', error);
		}
	};

	return (
		<>
			<Header_logon />
			<div className='perfil_container'>
				<div className='bloco-container'>
					<img src={foto1} alt='Imagem ilustrativa' className='perfil-imagem' />

					<form className='perfil-form' onSubmit={handleSubmit}>
						<div className='form-group'>
							<input
								type='email'
								name='email'
								placeholder='Email'
								value={formData.email}
								onChange={handleChange}
							/>
							<input
								type='text'
								name='rg'
								placeholder='RG'
								value={formData.rg}
								onChange={handleChange}
							/>
						</div>

						<div className='form-group'>
							<input
								type='text'
								name='peso'
								placeholder='Peso'
								value={formData.peso}
								onChange={handleChange}
							/>
							<input
								type='text'
								name='cpf'
								placeholder='CPF'
								value={formData.cpf}
								onChange={handleChange}
							/>
						</div>

						<div className='form-group'>
							<input
								type='date'
								name='dataNascimento'
								placeholder='Data de nascimento'
								value={formData.dataNascimento}
								onChange={handleChange}
							/>
							<input
								type='text'
								name='endereco'
								placeholder='Endereço'
								value={formData.endereco}
								onChange={handleChange}
							/>
						</div>

						<div className='form-group'>
							<input
								type='text'
								name='cep'
								placeholder='CEP'
								value={formData.cep}
								onChange={handleChange}
							/>
							<input
								type='text'
								name='telefone'
								placeholder='Telefone'
								value={formData.telefone}
								onChange={handleChange}
							/>
						</div>

						<div className='form-group radio-columns'>
							<div className='radio-group'>
								<label>É portador de doença transmissível?</label>
								<label>
									<input
										type='radio'
										name='doencaTransmissivel'
										value='Sim'
										checked={formData.doencaTransmissivel === 'Sim'}
										onChange={handleChange}
									/>
									Sim
								</label>
								<label>
									<input
										type='radio'
										name='doencaTransmissivel'
										value='Não'
										checked={formData.doencaTransmissivel === 'Não'}
										onChange={handleChange}
									/>
									Não
								</label>
							</div>

							<div className='sex-group'>
								<label>Sexo:</label>
								<label>
									<input
										type='radio'
										name='sexo'
										value='Masculino'
										checked={formData.sexo === 'Masculino'}
										onChange={handleChange}
									/>
									Masculino
								</label>
								<label>
									<input
										type='radio'
										name='sexo'
										value='Feminino'
										checked={formData.sexo === 'Feminino'}
										onChange={handleChange}
									/>
									Feminino
								</label>
							</div>
						</div>
						<button type='submit' className='button-atualizar'>Atualizar</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_perfil;
