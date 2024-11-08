import Footer from '../../components/footer/footer';
import './Pagina_mensagem.css';
import Header_logon from '../../components/header/Header_logon';
import foto1 from '../../assets/agendamento_imagem.png'; 
import { useState } from 'react';

function Pagina_mensagem() {
	const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    alert(`Arquivo selecionado: ${file.name}`);
    
  };

	return (
		<>
			<Header_logon />
			<div className='mensagem_container'>
				<div className='bloco-container'>
					<img src={foto1} alt='Imagem ilustrativa' className='acompanhamento-imagem' />

					<div className='titulo-mensagem'>
          				<h1>Acompanhamento de Agendamento</h1>
        			</div>
        				<p className="description">
						O agendamento da doação de sangue é um processo importante para garantir que o doador possa contribuir de forma organizada e segura. Para iniciar o processo, o interessado deve selecionar um horário disponível e fornecer as informações necessárias no sistema. É importante lembrar que o agendamento não é definitivo até que o doador conclua o upload do documento necessário no site.
						</p>
						<p className="description">
						Caso ocorra algum imprevisto ou mudança de planos, o agendamento pode ser cancelado a qualquer momento antes da conclusão. Somente após o envio do documento solicitado, o agendamento é considerado finalizado. Dessa forma, o sistema garante que os agendamentos sejam realizados de maneira eficiente, respeitando a disponibilidade e a flexibilidade dos doadores.
						</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_mensagem;
