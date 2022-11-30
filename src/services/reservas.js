import axios from 'axios'

const baseURL = `http://192.168.2.105:45455/SalaReservas`

export async function getSalasDisponiveisPorBloco() {

    return await axios.get(`${baseURL}/salas-disponiveis`)
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

export async function getReservasCriadasPeloSolicitante(idSolicitante) {

    return await axios.get(`${baseURL}/reservas-criadas-solicitante?idSolicitante=${idSolicitante}`)
}

export async function createReservas(idSala, idSolicitante, rangeReserva) {

    const data = {
        idSala: idSala,
        idSolicitante: idSolicitante,
        dataReserva: rangeReserva
    }
    await axios.post(`${baseURL}/reserva`, data)
}
