
// URL do NGRok = usada para simular uma API na web, através de um túnel de conexão
// restrita para uso em ambientes de homologação e desenvolvimento.
const baseURL = "https://5dc5-191-5-68-33.ngrok-free.app/api/users";

// post
export const createUser = async (userData) => {
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar usuário.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error.message);
    throw error;
  }
};

// get
export const getUsers = async () => {
  try {
    const response = await fetch(baseURL);

    if (!response.ok) {
      throw new Error("Erro ao obter usuários.");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

// put
export const updateUser = async (userData) => {
  try {
    const response = await fetch(`${baseURL}/${userData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar usuário.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error.message);
    throw error;
  }
};

// delete
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao excluir usuário.");
    }

    const data = await response.json();
    return data.message;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};


// API - não encontrada
// export const sendUserDataToAPI = async (userData) => {
//   try {
//     const res = await fetch(
//       "https://api-teste.ip4y.com.br/cadastro",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Erro ao enviar dados para a API.");
//     }

//     const data = await res.json();
//     console.log("Resposta da API: ", data);
//     return data;
//   } catch (err) {
//     console.error("Erro ao enviar dados para  a API: ", err);
//     throw err;
//   }
// };
