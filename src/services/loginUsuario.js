import axios from 'axios'

const baseURL = 'http://192.168.2.105:45455/Usuario/login'

export default async function loginUsuario(email, senha) {
    return await axios.get(`${baseURL}?Email=${email}&Senha=${senha}`)
}