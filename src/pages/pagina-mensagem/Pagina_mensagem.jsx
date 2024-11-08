import Footer from '../../components/footer/footer';
import './Pagina_mensagem.css';
import Header_logon from '../../components/header/Header_logon';
import foto1 from '../../assets/imagem-mensagem.png'; 
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
				<div className='bloco-container-mensagem'>
					<img src={foto1} alt='Imagem ilustrativa' className='mensagem-imagem' />

					<div className='titulo-mensagem'>
          				<h1>Mensagem</h1>
        			</div>
					<div className='texto-mensagem'>
						<p >Querido(a) doador(a),</p>
						<p>Gostaríamos de expressar nosso mais sincero agradecimento pela sua decisão de doar sangue. O seu gesto de generosidade e empatia é verdadeiramente inspirador e, mais do que isso, faz uma diferença imensurável na vida de tantas pessoas que lutam pela saúde e pela vida.</p>
						<p>Cada gota de sangue doado é um ato de amor e solidariedade. Por meio da sua doação, você está oferecendo uma nova chance para pacientes que enfrentam condições médicas graves, emergências, cirurgias e tratamentos que dependem de transfusões. São vidas salvas, famílias que podem manter a esperança e histórias que ganham novos capítulos graças a pessoas como você, que se dispõem a ajudar o próximo sem esperar nada em troca.</p>
						<p>Saiba que o impacto da sua doação vai muito além do que imaginamos. Você trouxe alívio e conforto para aqueles que estão passando por momentos difíceis, e também para suas famílias, que encontram em pessoas como você um motivo para acreditar na bondade e no cuidado entre os seres humanos.</p>
						<p>Muito obrigado por sua doação e pelo exemplo maravilhoso que você nos deu. Que seu gesto seja sempre lembrado e que continue inspirando muitos outros a seguirem esse caminho de compaixão.</p>
						<p>Com toda a nossa gratidão e respeito,</p>
						<p>Seja Doador.org</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pagina_mensagem;
