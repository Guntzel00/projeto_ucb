import { BrowserRouter as Router } from 'react-router-dom';
// import Pagina_inicial from './pages/pagina_inicial/Pagina_incial';
import AppRoutes from './routes/Routes';

function App() {
	return (
		<>
			<Router>
				<AppRoutes />
			</Router>
		</>
	);
}

export default App;
