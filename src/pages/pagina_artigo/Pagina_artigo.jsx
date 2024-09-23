import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header_logon from '../../components/header/Header_logon';
import './Pagina_artigo.css';
import Btn from '../../components/btn/Btn';

function Pagina_artigo() {
	const { id } = useParams(); // Obtém o ID do artigo da URL
	const [artigo, setArtigo] = useState(null);

	useEffect(() => {
		// Faz a requisição para buscar o artigo com base no ID
		fetch(`http://localhost:3000/artigos/${id}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro na requisição: ' + response.status);
				}
				return response.json();
			})
			.then((data) => {
				setArtigo(data); // Armazena os dados do artigo no estado
			})
			.catch((error) => {
				console.error('Erro ao buscar os dados do artigo:', error);
			});
	}, [id]);

	if (!artigo) {
		return <p>Carregando...</p>;
	}

	return (
		<>
			<Header_logon />
			<div className='pag_artigo'>
				<div className='btn-voltar'>
					<Btn label='← Voltar' referencia='/conteudos' />
				</div>
				<div className='container'>
					<div className='artigo-completo'>
						<h1>{artigo.titulo}</h1>
						<img src={artigo.url_imagem} alt={artigo.desc_imagem} />
						<p>{artigo.conteudo}</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Pagina_artigo;
