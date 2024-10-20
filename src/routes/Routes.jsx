import { Routes, Route } from 'react-router-dom';
import Pagina_inicial from '../pages/pagina_inicial/Pagina_incial'; // Página inicial
import Pagina_conteudos from '../pages/pagina_conteudos/Pagina_conteudos'; // Página de conteúdos
import Pagina_login from '../pages/pagina_login/Pagina_login';
import Pagina_artigo from '../pages/pagina_artigo/Pagina_artigo';
import Pagina_recuperacao_senha from '../pages/pagina_recuperacao_senha/Pagina_recuperacao_senha';
import Pagina_recuperacao_senha_2 from '../pages/pagina_recuperacao_senha_2/Pagina_recuperacao_senha_2';
import Pagina_cadastro from '../pages/pagina_cadastro/Pagina_cadastro';
import Pagina_perfil from '../pages/pagina_perfil/Pagina_perfil';


function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Pagina_login />} />
			<Route path='/home' element={<Pagina_inicial />} />
			<Route path='/conteudos' element={<Pagina_conteudos />} />
			<Route path='/conteudos/:id' element={<Pagina_artigo />} />
			<Route path='/recuperacao' element={<Pagina_recuperacao_senha />} />
			<Route path='/recuperacao2' element={<Pagina_recuperacao_senha_2 />} />
			<Route path='/cadastro' element={<Pagina_cadastro />} />
			<Route path='/perfil' element={<Pagina_perfil />} />

			
		</Routes>
	);
}

export default AppRoutes;
