import { View, Text, StyleSheet, Image, Alert } from 'react-native'

import semReserva from '../../assets/semReserva.png';

export default () => {
    return (
        <View style={style.containerCards}>
            <View style={style.card}>
                <View style={style.containerTipoInfo}>
                    <Text style={style.tipoInfo}>Status</Text>
                    <Text style={style.tipoInfo}>Data</Text>
                    <Text style={style.tipoInfo}>Horario</Text>
                </View>
                <View style={style.containerInfo}>
                    <Image source={semReserva} style={style.infoImage}></Image>
                    <Text style={style.infoText}>-</Text>
                    <Text style={style.infoText}>-</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    containerCards: {
        position: 'relative',
        top: 100,
        flexDirection: 'row',
        width: 350,
        height: 500
    },
    card: {
        backgroundColor: '#253E60',
        width: '100%',
        height: 60,
        borderRadius: 8
    },
    containerTipoInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5
    },
    tipoInfo: {
        fontSize: 15,
        lineHeight: 20,
        color: '#FFFFFF'
    },
    containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 5
    },
    infoImage: {
        width: 8,
        height: 8
    },
    infoText: {
        fontSize: 15,
        lineHeight: 20,
        color: '#FFFFFF',
    }

})