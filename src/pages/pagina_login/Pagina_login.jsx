import foto1 from '../../assets/msgdeboasvindas.svg';
import foto2 from '../../assets/bonecos.svg';
import foto3 from '../../assets/caixas.svg';
import Footer from '../../components/footer/footer';
import './Pagina_login.css';


function Pagina_login() {
	return (<> 
        <header_inicial></header_inicial>
        <div>
            <img src={foto1} alt="mensagem" />

            <form action="">
            <h2>Login</h2>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input>
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required></input>
            <button type="submit">Entrar</button>
            </form>
            
            <img src={foto3} alt="mensagem" />
            <img src={foto2} alt="mensagem" />
        </div>
        
        <Footer />
    </>);
}

export default Pagina_login; 