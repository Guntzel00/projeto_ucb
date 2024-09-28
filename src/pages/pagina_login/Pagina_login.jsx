import foto1 from '../../assets/msgdeboasvindas.svg';
import foto2 from '../../assets/bonecos.svg';
import foto3 from '../../assets/caixas.svg';
import Footer from '../../components/footer/footer';
import './Pagina_login.css';
import { Link } from 'react-router-dom';
import Btn from '../../components/btn/Btn';
import Header_inicial from '../../components/header inicial/Header_inicial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Pagina_login() {
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
							<label htmlFor='email'>Email:</label>
							<input type='email' id='email' name='email' required></input>
							<label htmlFor='password'>Senha:</label>
							<input
								type='password'
								id='password'
								name='password'
								required
							></input>
							<p>
								<Link to='/senha'>Esqueceu sua senha?</Link>
							</p>
							<p>
								Não possui cadastro? Clique <Link to='/cadastro'>aqui</Link>
							</p>
							<Btn label='Entrar' referencia='/home' />
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
