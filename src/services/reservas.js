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

export async function getReservasAprovadasPorBloco(bloco, idSolicitante) {

    return await axios.get(`${baseURL}/reservas-aprovadas?bloco=${bloco}&idSolicitante=${idSolicitante}`)
}

export async function getReservasReprovadasPorBloco(bloco, idSolicitante) {

    return await axios.get(`${baseURL}/reservas-reprovadas?bloco=${bloco}&idSolicitante=${idSolicitante}`)
}

export async function getReservasCriadasPeloSolicitante(idSolicitante, bloco) {
    if (bloco === undefined) {
        return await axios.get(`${baseURL}/reservas-criadas-solicitante?idSolicitante=${idSolicitante}`)
    }
    return await axios.get(`${baseURL}/reservas-criadas-solicitante?idSolicitante=${idSolicitante}&bloco=${bloco}`)
}

export async function createReservas(idSala, idSolicitante, rangeReserva) {

    const data = {
        idSala: idSala,
        idSolicitante: idSolicitante,
        dataReserva: rangeReserva
    }
    await axios.post(`${baseURL}/reserva`, data)
}

export async function desfazerReserva(idSala, idSolicitante){
    
    await axios.delete(`${baseURL}/reserva?idSala=${idSala}&idSolicitante=${idSolicitante}`)
}
