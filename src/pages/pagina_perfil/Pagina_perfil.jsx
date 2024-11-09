import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import './Pagina_perfil.css';
import Header_logon from '../../components/header/Header_logon';
import foto1 from '../../assets/icon-imagem.png';

function Pagina_perfil() {
    const [formData, setFormData] = useState({
        email: '',
        rg: '',
        peso: '',
        dataNascimento: '',
        cep: '',
        cpf: '',
        telefone: '',
        endereco: ''
    });
    const [initialData, setInitialData] = useState({}); // Estado para armazenar dados iniciais

    // Função para buscar os dados do usuário autenticado
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/usuarios/me', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Token JWT armazenado no localStorage
                    },
                });
                const data = await response.json();

                // Mapeamento explícito dos dados recebidos para garantir que estejam corretos
                setFormData({
                    email: data.email || '',
                    rg: data.rg || '',
                    peso: data.peso || '',
                    dataNascimento: data.dataNascimento || '',
                    cep: data.cep || '',
                    cpf: data.cpf || '',
                    telefone: data.telefone || '',
                    endereco: data.endereco || ''
                });

                // Armazena os dados iniciais para comparação posterior
                setInitialData({
                    email: data.email || '',
                    rg: data.rg || '',
                    peso: data.peso || '',
                    dataNascimento: data.dataNascimento || '',
                    cep: data.cep || '',
                    cpf: data.cpf || '',
                    telefone: data.telefone || '',
                    endereco: data.endereco || ''
                });

            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Função para enviar dados atualizados para a API
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Filtrar dados alterados em relação ao estado inicial
        const dadosAtualizados = {};
        Object.keys(formData).forEach((key) => {
            if (formData[key] !== initialData[key]) {
                dadosAtualizados[key] = formData[key];
            }
        });

        // Verifica se há dados a serem atualizados
        if (Object.keys(dadosAtualizados).length === 0) {
            alert('Nenhuma alteração foi feita.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/usuarios/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(dadosAtualizados),
            });

            if (response.ok) {
                alert('Perfil atualizado com sucesso!');
                setInitialData(formData); // Atualiza o estado inicial com os dados atualizados
            } else {
                alert('Erro ao atualizar o perfil');
            }
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
        }
    };

    return (
        <>
            <Header_logon />
            <div className='perfil_container'>
                <div className='bloco-container'>
                    <img src={foto1} alt='Imagem ilustrativa' className='perfil-imagem' />

                    <form className='perfil-form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>
                                Email:
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                RG:
                                <input
                                    type='text'
                                    name='rg'
                                    placeholder='RG'
                                    value={formData.rg}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Peso:
                                <input
                                    type='text'
                                    name='peso'
                                    placeholder='Peso'
                                    value={formData.peso}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                CPF:
                                <input
                                    type='text'
                                    name='cpf'
                                    placeholder='CPF'
                                    value={formData.cpf}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Data de Nascimento:
                                <input
                                    type='date'
                                    name='dataNascimento'
                                    placeholder='Data de nascimento'
                                    value={formData.dataNascimento}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Endereço:
                                <input
                                    type='text'
                                    name='endereco'
                                    placeholder='Endereço'
                                    value={formData.endereco}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                CEP:
                                <input
                                    type='text'
                                    name='cep'
                                    placeholder='CEP'
                                    value={formData.cep}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                <p>Telefone:</p>
                                <input
                                    type='text'
                                    name='telefone'
                                    placeholder='Telefone'
                                    value={formData.telefone}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <button type='submit' className='button-atualizar'>Atualizar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Pagina_perfil;
