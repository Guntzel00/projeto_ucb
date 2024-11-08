import { useState } from 'react';
import foto1 from '../../assets/msgdeboasvindas.svg';
import foto2 from '../../assets/bonecos.svg';
import foto3 from '../../assets/caixas.svg';
import Footer from '../../components/footer/footer';
import './Pagina_login.css';
import { Link, useNavigate } from 'react-router-dom';
import Btn from '../../components/btn/Btn';
import Header_inicial from '../../components/header inicial/Header_inicial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Pagina_login() {
	// Estados para armazenar email, senha e erros
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	// Hook do React Router para redirecionar após login bem-sucedido
	const navigate = useNavigate();

	// Função para tratar o envio do formulário
	const handleLogin = (e) => {
		e.preventDefault(); // Impede o comportamento padrão do formulário

		// Envia a requisição POST para a API de login
		fetch('http://localhost:5000/api/usuarios/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, senha: password }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Credenciais inválidas');
				}
				return response.json();
			})
			.then((data) => {
				// Armazena o token no localStorage para uso futuro
				localStorage.setItem('token', data.token);
				// Redireciona para a página inicial após o login bem-sucedido
				navigate('/home');
			})
			.catch((error) => {
				setError(error.message); // Define a mensagem de erro para mostrar ao usuário
			});
	};

	return (
		<>
			<Header_inicial />

			<div className='pag_login'>
				<div className='bloco-1'>
					<div className='foto-login'>
						<img src={foto1} alt='mensagem' width='853' height='822' />
					</div>
					<div className='form-container'>
						<div className='container-login'>
							<h2>Login</h2>
							{error && <p className='error-message'>{error}</p>}{' '}
							{/* Exibe mensagem de erro se houver */}
							<form onSubmit={handleLogin}>
								<label htmlFor='email'>Email:</label>
								<input
									type='email'
									id='email'
									name='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<label htmlFor='password'>Senha:</label>
								<input
									type='password'
									id='password'
									name='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
								<p>
									<Link to='/recuperacao'>Esqueceu sua senha?</Link>
								</p>
								<p>
									Não possui cadastro? Clique <Link to='/cadastro'>aqui</Link>
								</p>
								<button className='btn' type='submit'>
									Entrar
								</button>{' '}
								{/* Botão para enviar o formulário */}
							</form>
						</div>
						<div className='chamada'>
							<h2>Veja como você pode fazer a diferença.</h2>
							<FontAwesomeIcon icon={faArrowDown} />
						</div>
					</div>
				</div>

				<div className='bloco-depoimentos'>
					<div>
						<img src={foto3} alt='mensagem' />
					</div>

					<div className='overlay'>
						<h1>
							Sua doação faz a diferença.
							<br />
							<span>Deixa que nós lidamos com a parte complicada.</span>
						</h1>
						<br />
						<Btn label='Cadastre-se' referencia='/cadastro' />
					</div>
				</div>

				<div className='ultimo-bloco'>
					<div className='ultima-frase'>
						<h1>
							Doe sangue,
							<br />
							<span>vidas dependem da sua ação.</span>
						</h1>
					</div>
					<div className='medicos'>
						<img src={foto2} alt='mensagem' />
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Pagina_login;
