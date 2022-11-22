import axios from 'axios'

const baseURL = 'http://192.168.2.105:45456/Usuario/cadastro'

export default async function cadastrarUsuario(username, email, senha) {

    const data = {
        usuarioNome: 'username',
        email: email,
        senha: senha,
        privilegios: 0
    }
    axios.post(baseURL, data)
}