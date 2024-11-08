import Footer from '../../components/footer/footer';
import './Pagina_acompanhamento.css';
import Header_logon from '../../components/header/Header_logon';
import foto1 from '../../assets/agendamento_imagem.png'; 
import foto2 from '../../assets/upload.png';
import { useState } from 'react';

function Pagina_acompanhamento() {
	const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    alert(`Arquivo selecionado: ${file.name}`);
    
  };

	return (
		<>
			<Header_logon />
			<div className='acompanhamento_container'>
				<div className='bloco-container'>
					<img src={foto1} alt='Imagem ilustrativa' className='acompanhamento-imagem' />

					<div className='titulo-acompanhamento'>
          				<h1>Acompanhamento de Agendamento</h1>
        			</div>
        				<p className="description">
						O agendamento da doação de sangue é um processo importante para garantir que o doador possa contribuir de forma organizada e segura. Para iniciar o processo, o interessado deve selecionar um horário disponível e fornecer as informações necessárias no sistema. É importante lembrar que o agendamento não é definitivo até que o doador conclua o upload do documento necessário no site.
						</p>
						<p className="description">
						Caso ocorra algum imprevisto ou mudança de planos, o agendamento pode ser cancelado a qualquer momento antes da conclusão. Somente após o envio do documento solicitado, o agendamento é considerado finalizado. Dessa forma, o sistema garante que os agendamentos sejam realizados de maneira eficiente, respeitando a disponibilidade e a flexibilidade dos doadores.
						</p>

						<div className="acompanhamento-card">
							<div className="detalhes-agendamento">
								<h3>Hospital Regional de Taguatinga</h3>
								<p>Data: 21/10/2022</p>
								<p>Horário: 10:00</p>
								<p>Status: Finalizado</p>
								<button className="botao-cancelar">Cancelar doação</button>
							</div>
							
							<label htmlFor="file-upload" className="upload-label">
								<img src={foto2} alt='Imagem upload' className='upload-imagem' />
							</label>
							<input
								type="file"
								id="file-upload"
								className="file-input"
								onChange={handleFileChange}
							/>
							
						
						</div>

						<div className="acompanhamento-card2">
							<div className="detalhes-agendamento2">
								<h3>Hospital Regional de Taguatinga</h3>
								<p>Data: 22/12/2024</p>
								<p>Horário: 15:00</p>
								<p>Status: Agendado</p>
								<button className="botao-cancelar2">Cancelar doação</button>
							</div>
							
							<label htmlFor="file-upload" className="upload-label">
								<img src={foto2} alt='Imagem upload' className='upload-imagem2' />
							</label>
							<input
								type="file"
								id="file-upload"
								className="file-input"
								onChange={handleFileChange}
							/>
							
						
						</div>

				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_acompanhamento;
