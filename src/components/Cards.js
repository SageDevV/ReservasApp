import { View, Text, StyleSheet, Image, Alert } from 'react-native'

import semReserva from '../../assets/semReserva.png';
import reservado from '../../assets/reservado.png';
import reservaReprovada from '../../assets/reservaReprovada.png';

export default (props) => {

    const renderizarReservasPorBloco = props.reservasPorBloco.map((value, index) => {
        if (value.status === null) {
            return (
                <View style={style.card}>
                    <View style={style.containerTipoInfo}>
                        <Text style={style.tipoInfo}>Status</Text>
                        <Text style={style.tipoInfo}>Data</Text>
                        <Text style={style.tipoInfo}>Horario</Text>
                    </View>
                    <View style={style.containerInfo}>
                        <Image source={semReserva} style={style.infoImage}></Image>
                        <Text style={style.infoText}></Text>
                        <Text style={style.infoText}>-</Text>
                    </View>
                </View>
            )
        }
        if (value.status === 0) {
            return (
                <View style={style.card}>
                    <View style={style.containerTipoInfo}>
                        <Text style={style.tipoInfo}>Status</Text>
                        <Text style={style.tipoInfo}>Data</Text>
                        <Text style={style.tipoInfo}>Horario</Text>
                    </View>
                    <View style={style.containerInfo}>
                        <Image source={reservado} style={style.infoImage}></Image>
                        <Text style={style.infoText}>{value.data}</Text>
                        <Text style={style.infoText}>{value.rangeHora}</Text>
                    </View>
                </View>
            )
        }
        if (value.status === 1) {
            return (
                <View style={style.card}>
                    <View style={style.containerTipoInfo}>
                        <Text style={style.tipoInfo}>Status</Text>
                        <Text style={style.tipoInfo}>Data</Text>
                        <Text style={style.tipoInfo}>Horario</Text>
                    </View>
                    <View style={style.containerInfo}>
                        <Image source={reservaReprovada} style={style.infoImage}></Image>
                        <Text style={style.infoText}>{value.data}</Text>
                        <Text style={style.infoText}>{value.rangeHora}</Text>
                    </View>
                </View>
            )
        }
    })

    const renderizarSalasDisponiveisPorBloco = props.salaDisponivelPorBloco.map((value, index) => {
        return (
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
        )
    })

    const renderizarReservasDefault = props.reserva.map((value, index) => {
        if (value.status === null) {
            return (
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
            )
        }
        if (value.status === 0) {
            return (
                <View style={style.card}>
                    <View style={style.containerTipoInfo}>
                        <Text style={style.tipoInfo}>Status</Text>
                        <Text style={style.tipoInfo}>Data</Text>
                        <Text style={style.tipoInfo}>Horario</Text>
                    </View>
                    <View style={style.containerInfo}>
                        <Image source={reservado} style={style.infoImage}></Image>
                        <Text style={style.infoText}>{value.data}</Text>
                        <Text style={style.infoText}>{value.rangeHora}</Text>
                    </View>
                </View>
            )
        }
        if (value.status === 1) {
            return (
                <View style={style.card}>
                    <View style={style.containerTipoInfo}>
                        <Text style={style.tipoInfo}>Status</Text>
                        <Text style={style.tipoInfo}>Data</Text>
                        <Text style={style.tipoInfo}>Horario</Text>
                    </View>
                    <View style={style.containerInfo}>
                        <Image source={reservaReprovada} style={style.infoImage}></Image>
                        <Text style={style.infoText}>{value.data}</Text>
                        <Text style={style.infoText}>{value.rangeHora}</Text>
                    </View>
                </View>
            )
        }
    })

    return (
        <View style={style.containerCards}>
            {renderizarReservasPorBloco}
        </View>
    )
}

const style = StyleSheet.create({
    containerCards: {
        position: 'relative',
        top: 100,
        width: 350,
        height: 500
    },
    card: {
        backgroundColor: '#253E60',
        width: '100%',
        height: 60,
        borderRadius: 8,
        marginTop: 5
    },
    containerTipoInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
        marginRight: 40
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
        fontSize: 0,
        lineHeight: 30,
        color: '#FFFFFF',
    }
})