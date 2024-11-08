import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate para redirecionar
import Footer from '../../components/footer/footer';
import './Pagina_cadastro.css';
import Header_inicial from '../../components/header recuperacao/Header_recuperacao';

function Pagina_cadastro() {
	const [formData, setFormData] = useState({
		nome: '',
		sobrenome: '',
		email: '',
		senha: '',
		confirmaSenha: '',
		telefone: '',
		cpf: '',
		rg: '',
		dataNascimento: '',
		peso: '',
		endereco: '',
		cep: '', // Adicionado o campo CEP
		portadorDeDoença: '',
		sexo: '',
	});

	const navigate = useNavigate(); // Hook para redirecionar o usuário

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Verificar se a senha e a confirmação da senha coincidem
		if (formData.senha !== formData.confirmaSenha) {
			alert('As senhas não são iguais');
			return;
		}

		// Verificar se todos os campos obrigatórios estão preenchidos
		const camposObrigatorios = [
			'nome',
			'sobrenome',
			'email',
			'senha',
			'telefone',
			'cpf',
			'rg',
			'dataNascimento',
			'peso',
			'endereco',
			'cep',
			'sexo',
		];
		for (const campo of camposObrigatorios) {
			if (!formData[campo]) {
				alert(`Por favor, preencha o campo: ${campo}`);
				return;
			}
		}

		// Montar o payload no formato esperado pela API
		const payload = {
			nome: formData.nome,
			sobrenome: formData.sobrenome,
			email: formData.email,
			senha: formData.senha,
			telefone: formData.telefone,
			cpf: formData.cpf,
			rg: formData.rg,
			dataNascimento: formData.dataNascimento,
			peso: parseFloat(formData.peso),
			endereco: formData.endereco,
			cep: formData.cep, // Adicionado no payload
			sexo: formData.sexo,
			portadorDeDoença: formData.portadorDeDoença,
		};

		try {
			console.log(payload);
			const response = await fetch(
				'http://localhost:5000/api/usuarios/cadastrar',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				}
			);

			if (response.ok) {
				const data = await response.json();
				console.log('Usuário cadastrado com sucesso', data);
				alert('Cadastro realizado com sucesso!');

				// Redirecionar para a página de login após o cadastro
				navigate('/');

				// Reseta o formulário
				setFormData({
					nome: '',
					sobrenome: '',
					email: '',
					senha: '',
					confirmaSenha: '',
					telefone: '',
					cpf: '',
					rg: '',
					dataNascimento: '',
					peso: '',
					endereco: '',
					cep: '',
					portadorDeDoença: '',
					sexo: '',
				});
			} else {
				console.error('Erro ao cadastrar usuário', response);
				alert('Erro ao cadastrar o usuário. Tente novamente mais tarde.');
			}
		} catch (error) {
			console.error('Erro de conexão', error);
			alert('Erro de conexão. Verifique sua internet ou o servidor.');
		}
	};

	return (
		<>
			<Header_inicial />
			<div className='cadastro-container'>
				<form className='cadastro-form' onSubmit={handleSubmit}>
					<h2 className='cadastro-title'>Cadastro do doador</h2>

					<div className='form-group'>
						<input
							type='text'
							name='nome'
							placeholder='Nome'
							value={formData.nome}
							onChange={handleChange}
							required
						/>
						<input
							type='text'
							name='sobrenome'
							placeholder='Sobrenome'
							value={formData.sobrenome}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<input
							type='password'
							name='senha'
							placeholder='Senha'
							value={formData.senha}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<input
							type='password'
							name='confirmaSenha'
							placeholder='Confirme a senha'
							value={formData.confirmaSenha}
							onChange={handleChange}
							required
						/>
						<input
							type='text'
							name='telefone'
							placeholder='Telefone'
							value={formData.telefone}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<input
							type='text'
							name='cpf'
							placeholder='CPF'
							value={formData.cpf}
							onChange={handleChange}
							required
						/>
						<input
							type='text'
							name='rg'
							placeholder='RG'
							value={formData.rg}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<input
							type='date'
							name='dataNascimento'
							placeholder='Data de nascimento'
							value={formData.dataNascimento}
							onChange={handleChange}
							required
						/>
						<input
							type='text'
							name='peso'
							placeholder='Peso'
							value={formData.peso}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<input
							type='text'
							name='endereco'
							placeholder='Endereço'
							value={formData.endereco}
							onChange={handleChange}
							required
						/>
						<input
							type='text'
							name='cep'
							placeholder='CEP'
							value={formData.cep}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group radio-columns'>
						<div className='radio-group'>
							<label>É portador de doença transmissível?</label>
							<label>
								<input
									type='radio'
									name='portadorDeDoença'
									value='Sim'
									checked={formData.portadorDeDoença === 'Sim'}
									onChange={handleChange}
								/>
								Sim
							</label>
							<label>
								<input
									type='radio'
									name='portadorDeDoença'
									value='Não'
									checked={formData.portadorDeDoença === 'Não'}
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

					<div className='btn-cadastrar'>
						<button className='btn' type='submit'>
							Cadastrar
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_cadastro;
