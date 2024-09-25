import './Header_recuperacao.css';
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import Btn from '../btn/Btn';

function Header_recuperacao() {
	return (
		<>
			<header>
				{/* Substituindo o <a> por <Link> para navegação via React Router */}
				<div className='texto'>
					<Link to='/'>
						<h1>Seja Doador.org</h1>
					</Link>
					<Btn label='Voltar' referencia='/cadastro' />
				</div>
				<div className='linha'></div>
			</header>
		</>
	);
}

export default Header_recuperacao;