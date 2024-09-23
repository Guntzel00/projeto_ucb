import { Routes, Route } from 'react-router-dom';
import Pagina_inicial from '../pages/pagina_inicial/Pagina_incial'; // Página inicial
import Pagina_conteudos from '../pages/pagina_conteudos/Pagina_conteudos'; // Página de conteúdos
import Pagina_login from '../pages/pagina_login/Pagina_login';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Pagina_inicial />} />
			<Route path='/conteudos' element={<Pagina_conteudos />} />
			<Route path='/login' element={<Pagina_login />} />
		</Routes>
	);
}

export default AppRoutes;
