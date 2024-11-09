import './Header_logon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importa o Link do React Router

function Header_logon() {
	return (
		<>
			<header className='headerLogOn'>
				{/* Substituindo o <a> por <Link> para navegação via React Router */}
				<Link to='/'>
					<h1>Seja Doador.org</h1>
				</Link>
				<nav>
					<ul>
						<li>
							<Link to='/home'>Home</Link>
						</li>
						<li>
							<Link to='/perfil'>Perfil</Link>
						</li>
						<li>
							<Link to='/conteudos'>Conteúdos</Link>
						</li>
						<li>
							<Link to='/acompanhamento'>Agendamentos</Link>
						</li>
						<li>
							<Link to='/'>
								<FontAwesomeIcon icon={faPowerOff} />
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header_logon;
