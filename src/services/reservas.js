import axios from 'axios'

const baseURL = `http://192.168.2.105:45455/SalaReservas`

export async function getReservas(bloco) {
    
    return await axios.get(`${baseURL}?bloco=${bloco}`)
}