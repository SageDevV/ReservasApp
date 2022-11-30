import { useState } from 'react'
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default ({ setVisibleModal, visibleModal, idSala, idSolicitante }) => {

    const [dataReserva, setDataReserva] = useState();
    const [horaReserva, setHoraReserva] = useState();

    return (
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
                    <TextInput style={style.modalInput}
                        value={dataReserva}
                        onChangeText={setDataReserva}></TextInput>
                    <TextInput style={style.modalInput}
                        value={horaReserva}
                        onChangeText={setHoraReserva}></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={style.modalButton}
                        onPress={_ => {
                            //Criar a reserva (idSala, idSolicitante, DataReserva)
                            setVisibleModal(false)
                        }}>
                        <Text style={style.modalText}>Reservar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
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
        borderRadius: 8,
        color: 'white'
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