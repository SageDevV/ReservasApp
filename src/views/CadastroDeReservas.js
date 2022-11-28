import { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'

import NavbarAprovacoes from '../components/NavbarAprovacoes'
import FiltroAprovacoes from '../components/FiltroAprovacoes'
import Cards from '../components/Cards'

import { getReservas } from '../services/reservas'

export default _ => {

    const [bloco, setbloco] = useState('')
    const [reservasPorBloco, setReservasPorBloco] = useState([])
    const [reserva, setReserva] = useState([])

    useEffect(_ => {
        getReservas().then(response => {
            console.log(response.data)
            setReserva(response.data);
        }).catch(erro => {
            Alert.alert(`Houve um erro na requisição. ${erro}`)
        })
    }, [])

    return (
        <View style={style.containerReservas}>
            <NavbarAprovacoes />
            <FiltroAprovacoes bloco={bloco} setbloco={setbloco} setReservasPorBloco={setReservasPorBloco} />
            <Cards reservasPorBloco={reservasPorBloco} reserva={reserva} />
        </View>
    )
}

const style = StyleSheet.create({
    containerReservas: {
        alignItems: 'center'
    }
})