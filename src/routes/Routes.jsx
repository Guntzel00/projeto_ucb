import { Routes, Route } from 'react-router-dom';
import Pagina_inicial from '../pages/pagina_inicial/Pagina_incial'; // Página inicial
import Pagina_conteudos from '../pages/pagina_conteudos/Pagina_conteudos'; // Página de conteúdos
import Pagina_login from '../pages/pagina_login/Pagina_login';
import Pagina_artigo from '../pages/pagina_artigo/Pagina_artigo';
import Pagina_recuperacao_senha from '../pages/pagina_recuperacao_senha/Pagina_recuperacao_senha';
import Pagina_cadastro from '../pages/pagina_cadastro/Pagina_cadastro';
import Pagina_perfil from '../pages/pagina_perfil/Pagina_perfil';
import Pagina_acompanhamento from '../pages/pagina_acompanhamento/Pagina_acompanhamento';
import Pagina_mensagem from '../pages/pagina-mensagem/Pagina_mensagem';
import Pagina_agendamento from '../pages/pagina_agendamento/Pagina_agendamento';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Pagina_login />} />
			<Route path='/home' element={<Pagina_inicial />} />
			<Route path='/conteudos' element={<Pagina_conteudos />} />
			<Route path='/conteudos/:id' element={<Pagina_artigo />} />
			<Route path='/recuperacao' element={<Pagina_recuperacao_senha />} />
			<Route path='/cadastro' element={<Pagina_cadastro />} />
			<Route path='/perfil' element={<Pagina_perfil />} />
			<Route path='/acompanhamento' element={<Pagina_acompanhamento />} />
			<Route path='/mensagem' element={<Pagina_mensagem />} />
			<Route path='/agendamento/:id' element={<Pagina_agendamento />} />
		</Routes>
	);
}

export default AppRoutes;
