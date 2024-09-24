import { Routes, Route } from 'react-router-dom';
import Pagina_inicial from '../pages/pagina_inicial/Pagina_incial'; // Página inicial
import Pagina_conteudos from '../pages/pagina_conteudos/Pagina_conteudos'; // Página de conteúdos
import Pagina_login from '../pages/pagina_login/Pagina_login';
import Pagina_artigo from '../pages/pagina_artigo/Pagina_artigo';
import Pagina_recuperacao_senha from '../pages/pagina_recuperacao_senha/Pagina_recuperacao_senha';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Pagina_login />} />
			<Route path='/home' element={<Pagina_inicial />} />
			<Route path='/conteudos' element={<Pagina_conteudos />} />
			<Route path='/conteudos/:id' element={<Pagina_artigo />} />
			<Route path='/recuperacao' element={<Pagina_recuperacao_senha />} />
		</Routes>
	);
}

export default AppRoutes;
