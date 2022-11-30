import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native'


import semReserva from '../../assets/semReserva.png';
import reservado from '../../assets/reservado.png';
import reservaReprovada from '../../assets/reservaReprovada.png';
import aguardandoAprovacao from '../../assets/aguardandoAprovacao.png';


export default (props) => {
    const renderizarReservasDefault = props.reserva.map((value, index) => {
        //Reserva aguardando aprovação
        if (value.status === 4) {
            return (
                <View style={style.card}>
                    <View style={style.containerTipoInfo}>
                        <Text style={style.tipoInfo}>Status</Text>
                        <Text style={style.tipoInfo}>Data</Text>
                        <Text style={style.tipoInfo}>Horario</Text>
                    </View>
                    <View style={style.containerInfo}>
                        <View style={style.itemImage}>
                            <Image source={aguardandoAprovacao} style={style.infoImage}></Image>
                        </View>
                        <View style={style.itemData}>
                            <Text style={style.infoText}>{value.data}</Text>
                        </View>
                        <View style={style.itemHorario}>
                            <Text style={style.infoText}>{value.rangeHora}</Text>
                        </View>
                    </View>
                </View>
            )
        }
        //Reserva aprovada 
        if (value.status === 0) {
            return (
                <View style={style.card}>
                    <View style={style.containerTipoInfo}>
                        <Text style={style.tipoInfo}>Status</Text>
                        <Text style={style.tipoInfo}>Data</Text>
                        <Text style={style.tipoInfo}>Horario</Text>
                    </View>
                    <View style={style.containerInfo}>
                        <View style={style.itemImage}>
                            <Image source={reservado} style={style.infoImage}></Image>
                        </View>
                        <View style={style.itemData}>
                            <Text style={style.infoText}>{value.data}</Text>
                        </View>
                        <View style={style.itemHorario}>
                            <Text style={style.infoText}>{value.rangeHora}</Text>
                        </View>
                    </View>
                </View>
            )
        }
        //Reserva reprovada
        if (value.status === 1) {
            return (
                <View style={style.card}>
                    <View style={style.containerTipoInfo}>
                        <Text style={style.tipoInfo}>Status</Text>
                        <Text style={style.tipoInfo}>Data</Text>
                        <Text style={style.tipoInfo}>Horario</Text>
                    </View>
                    <View style={style.containerInfo}>
                        <View style={style.itemImage}>
                            <Image source={reservaReprovada} style={style.infoImage}></Image>
                        </View>
                        <View style={style.itemData}>
                            <Text style={style.infoText}>{value.data}</Text>
                        </View>
                        <View style={style.itemHorario}>
                            <Text style={style.infoText}>{value.rangeHora}</Text>
                        </View>
                    </View>
                </View>
            )
        }
        //Salas disponiveis
        if (value.status === 3) {
            return (
                <TouchableOpacity style={style.card}
                    onPress={_ => {
                        props.setVisibleModal(true)
                        props.setIdSala(value.id)
                        console.log(value)
                    }}>
                    <View style={style.containerTipoInfo}>
                        <Text style={style.tipoInfo}>Status</Text>
                        <Text style={style.tipoInfo}>Sala</Text>
                        <Text style={style.tipoInfo}>Descrição</Text>
                    </View>
                    <View style={style.containerInfo}>
                        <View style={style.itemImageSemReserva}>
                            <Image source={semReserva} style={style.infoImage}></Image>
                        </View>
                        <View style={style.itemSalaSemReserva}>
                            <Text style={style.infoText}>{value.id}</Text>
                        </View>
                        <View style={style.itemDescricaoSemReserva}>
                            <Text style={style.infoText}>{value.descricao}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    })

    return (
        <View style={style.containerCards}>
            {renderizarReservasDefault}
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
    itemImage: {
        marginLeft: 25
    },
    itemImageSemReserva: {
        position: 'relative',
            left: 1
    },
    infoText: {
        lineHeight: 30,
        color: '#FFFFFF',
    },
    itemSalaSemReserva: {
        position: 'relative',
            right: 10
    },
    itemData: {
        marginLeft: 30
    },
    itemHorario: {
        marginRight: 10
    },
    itemDescricaoSemReserva: {
        position: 'relative',
            right: 38
    }
})