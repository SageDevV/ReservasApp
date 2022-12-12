import { useEffect, useState, useRef } from 'react'
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, Alert, Text } from 'react-native'

import NavbarReservas from '../components/NavbarReservas'
import FiltroReservas from '../components/FiltroReservas'
import Cards from '../components/Cards'
import ActionModal from '../components/ActionModal'
import CriadorDeReserva from '../components/CriadorDeReserva'

import { getReservasCriadasPeloSolicitante } from '../services/reservas'
import DesfazerReserva from '../components/DesfazerReserva';

export default _ => {

    const [bloco, setbloco] = useState('')
    const [reserva, setReserva] = useState([])
    const [idReserva, setIdReserva] = useState()
    const [idSala, setIdSala] = useState(0)
    const [visibleModal, setVisibleModal] = useState(false)
    const [modalType, setModalType] = useState('')

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

    const validateContentModal = (modalType) => {
        if (modalType === 'Criar reserva') {
            return (
                <CriadorDeReserva setVisibleModal={setVisibleModal} idSala={idSala} idSolicitante={idSolicitante} />
            )
        }
        return (
            <DesfazerReserva setVisibleModal={setVisibleModal} idSala={idSala} idSolicitante={idSolicitante}/>
        )
    }

    return (
        <View style={style.containerReservas}>
            <NavbarReservas />
            <FiltroReservas bloco={bloco} setbloco={setbloco} setReserva={setReserva} mainInput={mainInput} idSolicitante={idSolicitante} />
            <Cards reserva={reserva} setVisibleModal={setVisibleModal} setIdSala={setIdSala} setModalType={setModalType} setIdReserva={setIdReserva} />
            <ActionModal visibleModal={visibleModal}>
                {validateContentModal(modalType)}
            </ActionModal>
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