import { useEffect, useState, useRef } from 'react'
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, Alert } from 'react-native'

import NavbarAprovacoes from '../components/NavbarAprovacoes'
import FiltroAprovacoes from '../components/FiltroAprovacoes'
import Cards from '../components/Cards'
import ActionModal from '../components/ActionModal'

import { getReservasCriadasPeloSolicitante } from '../services/reservas'

export default _ => {

    const [bloco, setbloco] = useState('')
    const [reserva, setReserva] = useState([])
    const [idSala, setIdSala] = useState(0)
    const [visibleModal, setVisibleModal] = useState(false)

    const mainInput = useRef()

    const route = useRoute()
    const { idSolicitante } = route.params



    useEffect(_ => {
        getReservasCriadasPeloSolicitante(idSolicitante).then(response => {
            setReserva(response.data);
        }).catch(erro => {
            Alert.alert(`Houve um erro na requisição. ${erro}`)
        })
        mainInput.current.focus()
    }, [])

    return (
        <View style={style.containerReservas}>
            <NavbarAprovacoes />
            <FiltroAprovacoes bloco={bloco} setbloco={setbloco} setReserva={setReserva} mainInput={mainInput} idSolicitante={idSolicitante} />
            <Cards reserva={reserva} setVisibleModal={setVisibleModal} setIdSala={setIdSala} />
            <ActionModal setVisibleModal={setVisibleModal} visibleModal={visibleModal} idSala={idSala} idSolicitante={idSolicitante} />
        </View>
    ) 
}

const style = StyleSheet.create({
    containerReservas: {
        height: '100%',
        backgroundColor: '#CED8E9',
        alignItems: 'center'
    }
})