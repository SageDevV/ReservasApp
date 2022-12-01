import { Text, TouchableOpacity, StyleSheet, View, Alert } from 'react-native'

import { desfazerReserva } from '../services/reservas'


export default ({ setVisibleModal, idSala, idSolicitante }) => {


    return (
        <View style={style.containerButtons}>
            <TouchableOpacity style={style.containerDesfazerReserva}
                onPress={_ => {
                    desfazerReserva(idSala, idSolicitante).then(_ => {
                        Alert.alert('Reserva desfeita')
                    }).catch(erro => {
                        console.log(`Houve um erro na requisição. ${erro}`)
                    })
                    setVisibleModal(false)
                }}>
                <View>
                    <Text style={style.buttonText}>Desfazer Reserva</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.containerSair}
                onPress={_ => { setVisibleModal(false) }}>
                <View>
                    <Text style={style.buttonText}>Sair</Text>
                </View>
            </TouchableOpacity >
        </View >
    )
}

const style = StyleSheet.create({
    containerButtons: {
        width: '50%',
        height: '50%',
        justifyContent: 'space-evenly'
    },
    containerDesfazerReserva: {
        backgroundColor: '#253E60',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
        height: '50%'
    },
    containerSair: {
        backgroundColor: '#253E60',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50%'
    },
    buttonText: {
        fontSize: 15,
        color: '#FFFFFF'
    }


})