import React, { useState } from 'react';
import Footer from '../../components/footer/footer';
import './Pagina_recuperacao_senha.css';
import Header_inicial from '../../components/header recuperacao/Header_recuperacao';
import foto1 from '../../assets/esqueceu.svg';
import Btn from '../../components/btn/Btn';
import axios from 'axios';

function Pagina_recuperacao_senha() {
  const [step, setStep] = useState(1); // Controla a etapa atual
  const [email, setEmail] = useState('');
  const [codigoRecuperacao, setCodigoRecuperacao] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [message, setMessage] = useState(''); // Mensagem de feedback para o usuário

  // Função para solicitar o código de recuperação
  const handleSolicitarCodigo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/usuarios/recuperar-senha/solicitar', { email });
      setMessage(response.data.message || "Código enviado para o seu e-mail.");
      setStep(2); // Avança para a etapa de inserção do código
    } catch (error) {
      setMessage(error.response?.data?.message || "Erro ao solicitar código de recuperação.");
    }
  };

  // Função para validar o código de recuperação
  const handleValidarCodigo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/usuarios/recuperar-senha/verificar', {
        email,
        codigoRecuperacao
      });
      setMessage(response.data.message || "Código válido. Prossiga para redefinir a senha.");
      setStep(3); // Avança para a etapa de redefinição de senha
    } catch (error) {
      setMessage(error.response?.data?.message || "Código de recuperação inválido.");
    }
  };

  // Função para redefinir a senha
  const handleRedefinirSenha = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/usuarios/recuperar-senha/redefinir', {
        email,
        novaSenha
      });
      setMessage(response.data.message || "Senha alterada com sucesso.");
      setStep(4); // Avança para a etapa final (confirmação de senha alterada)
    } catch (error) {
      setMessage(error.response?.data?.message || "Erro ao redefinir a senha.");
    }
  };

  // Renderização condicional de cada etapa
  return (
    <>
      <Header_inicial />

      <div className='pag_recuperacao'>
        <div className='titulo'>
          <h1>Esqueceu sua senha?</h1>
        </div>
        <div className='bloco-1'>
          <div className='foto1'>
            <img src={foto1} alt='mensagem' width='853' height='822' />
          </div>
          <div className='form-container'>
            <div className='container-senha'>
              {step === 1 && (
                <>
                  <h2>Insira seu e-mail para recuperar a senha</h2>
                  <label htmlFor='email'>Digite seu e-mail cadastrado</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className='btn-recuperar'>
                    <button className='btn' onClick={handleSolicitarCodigo}>Recuperar senha</button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2>Digite o código de recuperação</h2>
                  <label htmlFor='codigoRecuperacao'>Código enviado para seu e-mail</label>
                  <input
                    type='text'
                    id='codigoRecuperacao'
                    name='codigoRecuperacao'
                    value={codigoRecuperacao}
                    onChange={(e) => setCodigoRecuperacao(e.target.value)}
                    required
                  />
                  <div className='btn-recuperar'>
                    <button className='btn' onClick={handleValidarCodigo}>Validar código</button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2>Redefina sua senha</h2>
                  <label htmlFor='novaSenha'>Nova senha</label>
                  <input
                    type='password'
                    id='novaSenha'
                    name='novaSenha'
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    required
                  />
                  <div className='btn-recuperar'>
                    <button className='btn' onClick={handleRedefinirSenha}>Redefinir senha</button>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h2>Senha alterada com sucesso!</h2>                  
                  <div className='btn-recuperar'>
                    <Btn label='Voltar para Login' referencia='/' />
                  </div>
                </>
              )}
              {message && <p className='message'>{message}</p>}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Pagina_recuperacao_senha;
