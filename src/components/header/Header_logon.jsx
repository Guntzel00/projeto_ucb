import './Header_logon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

function Header_logon() {
	return (
		<>
			<header>
				<a href='#'>
					<h1>Seja Doador.org</h1>
				</a>
				<nav>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Sobre</a>
						</li>
						<li>
							<a href='#'>Contato</a>
						</li>
						<li>
							<a href='#'>
								<FontAwesomeIcon icon={faPowerOff} />
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<div className='bloco'></div>
		</>
	);
}

export default Header_logon;
