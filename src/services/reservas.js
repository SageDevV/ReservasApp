import axios from 'axios'

const baseURL = `http://192.168.2.105:45455/SalaReservas`

export async function getSalas(bloco) {
    
    return await axios.get(`${baseURL}?bloco=${bloco}`)
}

export async function getReservas(bloco) {
    
    return await axios.get(`${baseURL}/salas-reservadas?bloco=${bloco}`)
}

