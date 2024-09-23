import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Footer from '../../components/footer/footer';
import Header_logon from '../../components/header/Header_logon';
import Btn from '../../components/btn/Btn';
import './Pagina_artigo.css';

function Pagina_artigo() {
	const { id } = useParams(); // Obtém o ID do artigo da URL
	const [artigo, setArtigo] = useState(null);
	const [error, setError] = useState(null);

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
				setError('Desculpe, ocorreu um erro ao carregar o artigo.');
			});
	}, [id]);

	if (error) {
		return <p>{error}</p>;
	}

	if (!artigo) {
		return <p>Carregando...</p>;
	}

	// Substitui as sequências literais '\n' por quebras de linha reais
	const conteudoComQuebrasDeLinha = artigo.conteudo.replace(/\\n/g, '\n');

	// Converte o conteúdo Markdown em HTML e sanitiza
	const markdownHtml = DOMPurify.sanitize(marked(conteudoComQuebrasDeLinha));

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
						{/* Renderiza o HTML gerado pelo Markdown */}
						<div dangerouslySetInnerHTML={{ __html: markdownHtml }} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_artigo;
