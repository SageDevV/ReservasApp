import { Text, TouchableOpacity, StyleSheet, View, Alert } from 'react-native'

import { aprovarReserva, reprovarReserva } from '../services/reservas'


export default ({ setVisibleModal, idReserva, idAprovador }) => {


    return (
        <View style={style.containerButtons}>
            <TouchableOpacity style={style.containerAvaliarReservas}
                onPress={_ => {
                    console.log(idReserva, idAprovador)
                    aprovarReserva(idReserva, idAprovador).then(_ => {
                        Alert.alert('Reserva aprovada')
                    }).catch(erro => {
                        console.log(`Houve um erro na requisição. ${erro}`)
                    })
                    setVisibleModal(false)
                }}>
                <View>
                    <Text style={style.buttonText}>Aprovar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.containerAvaliarReservas}
                onPress={_ => {
                    reprovarReserva(idReserva, idAprovador).then(_ => {
                        Alert.alert('Reserva reprovada')
                    }).catch(erro => {
                        console.log(`Houve um erro na requisição. ${erro}`)
                    })
                    setVisibleModal(false)
                    setVisibleModal(false)
                }}>
                <View>
                    <Text style={style.buttonText}>Reprovar</Text>
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
        position: 'relative',
            bottom: 32
    },
    containerAvaliarReservas: {
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