import Footer from '../../components/footer/footer';
import './Pagina_cadastro.css';
import Header_inicial from '../../components/header recuperacao/Header_recuperacao';
import foto1 from '../../assets/esqueceu.svg';
import Btn from '../../components/btn/Btn';
import React, { useState } from 'react';

function Pagina_cadastro() {
	const [formData, setFormData] = useState({
        email: '',
        rg: '',
        peso: '',
        tipoSanguineo: '',
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
        // Lógica de envio do formulário
        console.log(formData);
      };
    
      return (
        <>
        <Header_inicial />
        <div className="cadastro-container">
    
          <form className="cadastro-form" onSubmit={handleSubmit}>
            <h2 className="cadastro-title">Cadastro de doador</h2>
    
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
              />
            </div>
    
            <div className="form-group">
              <input
                type="text"
                name="rg"
                placeholder="RG"
                value={formData.rg}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmaSenha"
                placeholder="Confirme a senha"
                value={formData.confirmaSenha}
                onChange={handleChange}
              />
            </div>
    
            <div className="form-group">
              <input
                type="text"
                name="peso"
                placeholder="Peso"
                value={formData.peso}
                onChange={handleChange}
              />
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                value={formData.cpf}
                onChange={handleChange}
              />
            </div>
    
            <div className="form-group">
              <select
                name="tipoSanguineo"
                value={formData.tipoSanguineo}
                onChange={handleChange}
              >
                <option value="">Tipo sanguíneo</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <input
                type="text"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
    
            <div className="form-group">
              <input
                type="date"
                name="dataNascimento"
                placeholder="Data de nascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
              />
              <input
                type="text"
                name="endereco"
                placeholder="Endereço"
                value={formData.endereco}
                onChange={handleChange}
              />
            </div>
    
            <div className="form-group">
              <input
                type="text"
                name="cep"
                placeholder="CEP"
                value={formData.cep}
                onChange={handleChange}
              />
              <input
                type="text"
                name="endereco2"
                placeholder="Complemento"
                value={formData.endereco2}
                onChange={handleChange}
              />
            </div>
    
            <div className="form-group radio-columns">
  
            <div className="radio-group">
                <label>É portador de doença transmissível?</label>
                <label>
                    <input
                    type="radio"
                    name="doencaTransmissivel"
                    value="Sim"
                    checked={formData.doencaTransmissivel === 'Sim'}
                    onChange={handleChange}
                    />
                Sim
            </label>
            <label>
                <input
                    type="radio"
                    name="doencaTransmissivel"
                    value="Não"
                    checked={formData.doencaTransmissivel === 'Não'}
                    onChange={handleChange}
                />
            Não
            </label>
        </div>

        <div className="sex-group">
            <label>Sexo:</label>
            <label>
                <input
                    type="radio"
                    name="sexo"
                    value="Masculino"
                    checked={formData.sexo === 'Masculino'}
                    onChange={handleChange}
                />
            Masculino
            </label>
            <label>
                <input
                    type="radio"
                    name="sexo"
                    value="Feminino"
                    checked={formData.sexo === 'Feminino'}
                    onChange={handleChange}
                />
            Feminino
            </label>
        </div>
</div>


            <div className='btn-cadastrar'>
				<Btn label='Cadastrar' referencia='/home' />
			</div>
          </form>
        </div>
        <Footer />
        </>
      );
}
    

export default Pagina_cadastro;
