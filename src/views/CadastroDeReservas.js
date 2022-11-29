import { useEffect, useState, useRef } from 'react'
import { View, StyleSheet, Alert, Text, Modal, TextInput, TouchableOpacity } from 'react-native'

import NavbarAprovacoes from '../components/NavbarAprovacoes'
import FiltroAprovacoes from '../components/FiltroAprovacoes'
import Cards from '../components/Cards'

import { getReservas } from '../services/reservas'

export default _ => {

    const [bloco, setbloco] = useState('')
    const [reserva, setReserva] = useState([])
    const [visibleModal, setVisibleModal] = useState(false)
    const mainInput = useRef()


    useEffect(_ => {
        getReservas().then(response => {
            setReserva(response.data);
        }).catch(erro => {
            Alert.alert(`Houve um erro na requisição. ${erro}`)
        })
        mainInput.current.focus()
    }, [])

    return (
        <View style={style.containerReservas}>
            <NavbarAprovacoes />
            <FiltroAprovacoes bloco={bloco} setbloco={setbloco} setReserva={setReserva} mainInput={mainInput} />
            <Cards reserva={reserva} setVisibleModal={setVisibleModal} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setVisibleModal(false)
                }}
            >
                <View style={style.modalView}>
                    <View style={style.containerText}>
                        <Text style={style.modalText}>Dia</Text>
                        <Text style={style.modalText}>Horario</Text>
                    </View>
                    <View style={style.containerInput}>
                        <TextInput style={style.modalInput}></TextInput>
                        <TextInput style={style.modalInput}></TextInput>
                    </View>
                    <View>
                        <TouchableOpacity style={style.modalButton}>
                            <Text style={style.modalText}>Reservar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    containerReservas: {
        alignItems: 'center'
    },
    modalView: {
        position: 'relative',
        top: '80%',
        left: '2%',
        width: '90%',
        height: '20%',
        borderRadius: 8,
        backgroundColor: '#7B9CCC',
        borderWidth: 3,
        borderColor: '#253E60',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText: {
        width: 'auto',
        height: '50%',
        justifyContent: 'space-evenly',
    },
    containerInput: {
        width: '70%',
        height: '50%',
        justifyContent: 'space-evenly',
        marginLeft: 10
    },
    modalText: {
        color: 'white'
    },
    modalInput: {
        backgroundColor: '#253E60',
        width: '100%',
        height: 30,
        borderRadius: 8
    },
    modalButton:{
        position: 'absolute',
            top: 50,
            right: 115,
        backgroundColor: '#253E60',
        borderRadius: 8,
        width: 80,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButtonText: {
        color: 'white'
    }
    
})