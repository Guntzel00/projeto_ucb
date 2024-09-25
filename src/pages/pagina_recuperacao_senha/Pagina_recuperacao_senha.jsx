import Footer from '../../components/footer/footer';
import './Pagina_recuperacao_senha.css';
import Header_inicial from '../../components/header recuperacao/Header_recuperacao';

function Pagina_recuperacao_senha() {
	// Pode codar javascript aqui

	let exemplo = 'Esqueceu sua senha?';
	

	return (
		<>
			<Header_inicial/>
			<div>
				<h2>{exemplo}</h2>
			</div>

			<Footer />
		</>
	);
}

export default Pagina_recuperacao_senha;
