import Footer from '../../components/footer/footer';
import './Pagina_acompanhamento.css';
import Header_logon from '../../components/header/Header_logon';
import foto1 from '../../assets/agendamento_imagem.png'; // Importando a imagem
import Btn from '../../components/btn/Btn';
import { useState } from 'react';

function Pagina_acompanhamento() {
	const [formData, setFormData] = useState({
		email: '',
		rg: '',
		peso: '',
		dataNascimento: '',
		cep: '',
		senha: '',
		confirmaSenha: '',
		cpf: '',
		telefone: '',
		endereco: '',
		doencaTransmissivel: '',
		sexo: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
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

					<form className='acompanhamento-form' onSubmit={handleSubmit}>
						
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_acompanhamento;
