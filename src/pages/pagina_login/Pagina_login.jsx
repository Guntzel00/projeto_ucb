import foto1 from '../../assets/msgdeboasvindas.svg';
import foto2 from '../../assets/bonecos.svg';
import foto3 from '../../assets/caixas.svg';
import Footer from '../../components/footer/footer';
import './Pagina_login.css';
import { Link } from 'react-router-dom';
import Btn from '../../components/btn/Btn';

function Pagina_login() {
	return (<> 
        <header_inicial></header_inicial>

        <div class="foto1">
            <img src={foto1} alt="mensagem" width="853" height="822"/>            
        </div>

        <div className="foto3">
        <img src={foto3} alt="mensagem" width="1169" height="935" />

        <div className="overlay">
        <h1>
            <span className="frase1">Sua doação faz a diferença.</span>
            <p></p>
            <span className="frase2">Deixa que nós lidamos com a parte complicada.</span>
        </h1> 
        <Btn label="Cadastre-se" referencia="/cadastro"/>
        </div>
        </div>

        <div class="foto2">
        <img src={foto2} alt="mensagem" width="693" height="597" />
        </div>

        <div class="form-container">
        <form action="">
            <h2>Login</h2>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input>
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required></input>
            <h1>Não possui cadastro? Clique <Link to="/cadastro"><span class="palavra">aqui</span></Link></h1>
            <Btn label="Entrar" referencia="/home"/>
            </form>
        </div>
        
        <div class="ultima-frase">
        <span class="doe-sangue">Doe sangue, </span> <br />
        <span class="vidas-dependem">vidas dependem da sua ação.</span>
        </div>
        
        <Footer />
    </>);
}

export default Pagina_login; 