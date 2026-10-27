'use client';

import React, { useState } from "react";
import "./home.css"; // Importar pagina de estilização.

const Home = () => {

  // Variável dados com useState e atribuir o objeto.
  const [data, setData] = useState({
    nameUser: '',
    emailUser: ''
  });

  // Receber os dados dos campos do formulário
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => setData({
    ...data, [e.target.name]: e.target.value});

  // Executar a função quando o usuário clicar no botão do formulário.
  const addUser = (e: React.SubmitEvent<HTMLFormElement>) => {

    // Bloquear o recarregamento da página
    e.preventDefault();

    console.log("Processar o formulário ");

    // Manipular os dados recebidos, enviando-os para a API.
    console.log(`Nome: ${data.nameUser}`);
    console.log(`E-mail: ${data.emailUser}`);
  }

  return(
    <main className="main-container">
      <form onSubmit={addUser} className="form-container">
        <h1>Cadastrar Usuário</h1>
        
        <div className="form-group"> 
          <label htmlFor="nameUser">Nome</label>
          <input type="text" name="nameUser" id="nameUser" placeholder="Nome do cliente" onChange={valueInput}/>
        </div> 

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="text" name="emailUser" id="emailUser" placeholder="E-mail do cliente" onChange={valueInput}/>
        </div>

        <button type="submit" className="btn-submit">Cadastrar</button>
      </form>
    </main>
  );
};

export default Home;