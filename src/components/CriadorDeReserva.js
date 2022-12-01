import {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import { createReservas } from '../services/reservas'


export default ({ setVisibleModal, idSala, idSolicitante }) => {

    const [dataReserva, setDataReserva] = useState();
    const [horaInicioReserva, setHoraInicioReserva] = useState();
    const [horaFimReserva, setHoraFimReserva] = useState();

    return (
        <>
            <View style={style.containerText}>
                <Text style={style.modalText}>Dia</Text>
                <Text style={style.modalText}>Horario Inicio</Text>
                <Text style={style.modalText}>Horario Fim</Text>
            </View>
            <View style={style.containerInput}>
                <TextInput style={style.modalInput}
                    value={dataReserva}
                    onChangeText={setDataReserva}></TextInput>
                <TextInput style={style.modalInput}
                    value={horaInicioReserva}
                    onChangeText={setHoraInicioReserva}></TextInput>
                <TextInput style={style.modalInput}
                    value={horaFimReserva}
                    onChangeText={setHoraFimReserva}></TextInput>
            </View>
            <View>
                <TouchableOpacity style={style.modalButton}
                    onPress={_ => {
                        let rangeReserva = `${dataReserva} = ${horaInicioReserva} - ${horaFimReserva}`
                        createReservas(idSala, idSolicitante, rangeReserva).then(response => {
                            console.log(response)
                        }).catch(erro => {
                            console.log(erro)
                        })
                        setVisibleModal(false)
                    }}>
                    <Text style={style.modalButtonText}>Reservar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    containerText: {
        width: 'auto',
        height: '50%',
        justifyContent: 'space-evenly',
        position: 'relative',
        bottom: 15

    },
    containerInput: {
        width: '70%',
        height: '50%',
        justifyContent: 'space-evenly',
        position: 'relative',
        bottom: 15,
        marginLeft: 10
    },
    modalText: {
        color: 'white',
        marginTop: 20
    },
    modalInput: {
        backgroundColor: '#253E60',
        width: '100%',
        height: 30,
        borderRadius: 8,
        color: 'white',
        marginTop: 20
    },
    modalButton: {
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