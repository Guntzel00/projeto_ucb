import Footer from '../../components/footer/footer';
import './Pagina_perfil.css';
import Header_logon from '../../components/header/Header_logon';
import foto1 from '../../assets/foto_perfil.png'; // Importando a imagem
import Btn from '../../components/btn/Btn';
import { useState } from 'react';
import ingressos from '../../assets/ingressos.jpg';

function Pagina_perfil() {
	const [formData, setFormData] = useState({
		email: '',
		rg: '',
		peso: '',
		dataNascimento: '',
		cep: '',
		senha: '',
		confirmaSenha: '',
		cpf: '',
		telefone: '',
		endereco: '',
		doencaTransmissivel: '',
		sexo: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<>
			<Header_logon />
			<div className='perfil_container'>
				<div className='bloco-container'>
					<img src={foto1} alt='Imagem ilustrativa' className='perfil-imagem' />

					<div className='btn-perfil'>
						<Btn label='Atualizar Perfil' referencia='/home' />
					</div>

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
								type='password'
								name='senha'
								placeholder='Senha'
								value={formData.senha}
								onChange={handleChange}
							/>
						</div>

						<div className='form-group'>
							<input
								type='text'
								name='rg'
								placeholder='RG'
								value={formData.rg}
								onChange={handleChange}
							/>
							<input
								type='password'
								name='confirmaSenha'
								placeholder='Confirme a senha'
								value={formData.confirmaSenha}
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
					</form>

					{/* Premiação */}

					<h2>Brinde de doador frequente</h2>
					<div className='container_recompensas'>
						<div className='premio'>
							<div className='barra-premiacao'>
								<div className='barra-premiacao-preenchida'></div>
								<div className='barra-premiacao-vazia'></div>
								<div className='barra-premiacao-vazia'></div>
								<div className='barra-premiacao-vazia'></div>
							</div>
							<img src={ingressos} alt='Foto de ingressos' />
							<p>Descrição do brinde, ingressos para 2 pessoas.</p>
						</div>
					</div>
					<div className='container_recompensas'>
						<div className='premio'>
							<div className='barra-premiacao'>
								<div className='barra-premiacao-preenchida'></div>
								<div className='barra-premiacao-vazia'></div>
								<div className='barra-premiacao-vazia'></div>
								<div className='barra-premiacao-vazia'></div>
							</div>
							<img src={ingressos} alt='Foto de ingressos' />
							<p>Descrição do brinde, ingressos para 2 pessoas.</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_perfil;
