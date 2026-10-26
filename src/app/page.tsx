'use client';

import React, { useState } from "react";

const Home = () => {

  // Variável dados com useState e atribuir o objeto.
  const [data, setData] = useState({
    name: '',
    email: ''
  });

  // Receber os dados dos campos do formulário
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => setData({...data})

  // Executar a função quando o usuário clicar no botão do formulário.
  const addUser = (e: React.SubmitEvent<HTMLFormElement>) => {

    // Bloquear o recarregamento da página
    e.preventDefault();

    console.log("Processar o formulário ");
  }

  return(
    <main>
      <form onSubmit={addUser}>
        <label htmlFor="nameUser">Nome</label>
        <input type="text" name="nameUser" id="nameUser" placeholder="Nome do cliente"/><br /><br />

        <label htmlFor="emailUser">E-mail</label>
        <input type="text" name="emailUser" id="emailUser" placeholder="E-mail do cliente"/><br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
};

export default Home;