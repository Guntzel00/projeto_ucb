import Footer from '../../components/footer/footer';
import './Pagina_recuperacao_senha.css';
import Header_inicial from '../../components/header recuperacao/Header_recuperacao';
import foto1 from '../../assets/esqueceu.svg';
import Btn from '../../components/btn/Btn';

function Pagina_recuperacao_senha() {
	return (
		<>
			<Header_inicial />

			<div className='pag_recuperacao'>
				<div className='titulo'>
				<h1>Esqueceu sua senha?</h1>
				</div>
				<div className='bloco-1'>
					<div className='foto1'>
						<img src={foto1} alt='mensagem' width='853' height='822' />
					</div>
					<div className='form-container'>
						<div className='container-senha'>
							<h2>Insira seu e-mail e responda a pergunta de segurança</h2>
							<label htmlFor='email'>Digite seu e-mail cadastrado</label>
							<input type='email' id='email' name='email' required></input>
							<label htmlFor='text'>Qual os últimos 4 dígitos do seu CPF?</label>
							<input
								type='text'
								id='cpf'
								name='cpf'
								required
							></input>
							<div className='btn-recuperar'>
					            <Btn label='Recuperar senha' referencia='/recuperacao2' />
				            </div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
export default Pagina_recuperacao_senha;
