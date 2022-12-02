import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { View, StyleSheet} from 'react-native'

import NavbarAprovacoes from '../components/NavbarAprovacoes'
import FiltroAprovacoes from '../components/FiltroAprovacoes'
import Cards from '../components/Cards'
import ActionModal from '../components/ActionModal'
import AvaliarReserva from '../components/AvaliarReserva'

import { getReservasPendenteDeAprovacao } from '../services/reservas'

export default _ => {

    const [reserva, setReserva] = useState([])
    const [visibleModal, setVisibleModal] = useState(false)
    const [modalType, setModalType] = useState('')
    const [idReserva, setIdReserva] =  useState(0)
    const [idSala, setIdSala] = useState(0)
    const route = useRoute()
    const { idAprovador } = route.params


    useEffect(_ => {
        getReservasPendenteDeAprovacao().then(response => {
            setReserva(response.data)
        }).catch(erro => {
            console.log(`Houve um erro na requisição. ${erro}`)
        })
    }, [])


    return (
        <View style={style.containerReservas}>
            <NavbarAprovacoes />
            <FiltroAprovacoes />
            <Cards reserva={reserva} setVisibleModal={setVisibleModal} setIdSala={setIdSala} setModalType={setModalType} setIdReserva={setIdReserva} />
            <ActionModal visibleModal={visibleModal}>
                <AvaliarReserva setVisibleModal={setVisibleModal} idReserva={idReserva} idAprovador={idAprovador} />
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