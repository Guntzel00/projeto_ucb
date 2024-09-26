import Footer from '../../components/footer/footer';
import './Pagina_recuperacao_senha_2.css';
import Header_inicial from '../../components/header recuperacao/Header_recuperacao';
import foto1 from '../../assets/esqueceu.svg';
import Btn from '../../components/btn/Btn';

function Pagina_recuperacao_senha_2() {
	return (
		<>
			<Header_inicial />

			<div className='pag_recuperacao_2'>
				<div className='titulo'>
				<h1>Esqueceu sua senha?</h1>
				</div>
				<div className='bloco-1'>
					<div className='foto1'>
						<img src={foto1} alt='mensagem' width='853' height='822' />
					</div>
					<div className='form-container'>
						<div className='container-senha'>
							<h2>Insira sua nova senha</h2>
							<label htmlFor='email'>Digite sua nova senha</label>
							<input type='email' id='email' name='email' required></input>
							<label htmlFor='password'>Confire sua nova senha</label>
							<input
								type='password'
								id='password'
								name='password'
								required
							></input>
							<div className='btn-recuperar'>
					            <Btn label='Atualizar senha' referencia='/home' />
				            </div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
export default Pagina_recuperacao_senha_2;
