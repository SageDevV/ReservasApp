import axios from 'axios'

const baseURL = `http://192.168.2.105:45455/SalaReservas`

export async function getSalasDisponiveisPorBloco(bloco) {
    
    return await axios.get(`${baseURL}/salas-disponiveis?bloco=${bloco}`)
}

export async function getReservasPorBloco(bloco) {
    
    return await axios.get(`${baseURL}/salas-reservadas?bloco=${bloco}`)
}

export async function getReservas() {
    
    return await axios.get(`${baseURL}/reservas`)
}

export async function getReservasAprovadasPorBloco(bloco) {
    
    return await axios.get(`${baseURL}/reservas-aprovadas?bloco=${bloco}`)
}

export async function getReservasReprovadasPorBloco(bloco) {
    
    return await axios.get(`${baseURL}/reservas-reprovadas?bloco=${bloco}`)
}
