import foto1 from '../../assets/msgdeboasvindas.svg';
import foto2 from '../../assets/bonecos.svg';
import Footer from '../../components/footer/footer';
import './Pagina_login.css';


function Pagina_login() {
	return (<> 
        <header_inicial></header_inicial>
        <div>
            <img src={foto1} alt="mensagem" />
            <img src={foto2} alt="mensagem" />
        </div>
        <Footer />
    </>);
}

export default Pagina_login; 