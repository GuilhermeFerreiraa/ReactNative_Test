import axios from "axios";

export const createUser = async (userData) => {
  try {
    console.log('entrei aqui com os dados: ', userData)
    const response = await fetch("http://192.168.0.100:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar usuário.");
    }

    console.log('RESPONSE: ', response)

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error.message);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    if (!response.ok) {
      throw new Error("Erro ao buscar usuários.");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendUserDataToAPI = async (userData) => {
  try{ 
    const res = await axios.post('https://api-teste.ip4y.com.br/cadastro',
    userData);

    console.log('Resposta da API: ', response.data);
    return response.data;
  } catch(err){
    console.error('Erro ao enviar dados para  a API: ', err);
    throw err;
  }
}