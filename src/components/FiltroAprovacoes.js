import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

import { } from '../services/reservas';


export default (props) => {
    
    return (
        <View style={style.containerFiltro}>
            <Text style={style.titleContainerFiltro}>Reservas para aprovações</Text>
        </View>
    )
}

const style = StyleSheet.create({
    containerFiltro: {
        width: 250,
        height: 150,
        position: 'relative',
        top: 45,
        alignItems: 'center'
    },
    titleContainerFiltro: {
        color: '#000000',
        fontSize: 18,
        lineHeight: 20
    }
})