import axios from 'axios'

const baseURL = 'http://192.168.2.105:45455/Usuario/cadastro'

export default async function cadastrarUsuario(nome, email, senha, privilegios) {

    const data = {
        usuarioNome: nome,
        email: email,
        senha: senha,
        privilegios: privilegios
    }
    await axios.post(baseURL, data)
}