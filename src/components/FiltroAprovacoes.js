import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'

import lupa from '../../assets/lupa.png'

export default _ => {
    return (
        <View style={style.containerFiltro}>
            <Text style={style.titleContainerFiltro}>Insira o Bloco</Text>
            <View style={style.containerInput} >
                <Image source={lupa} style={style.lupaInput} />
                <TextInput style={style.textInput} />
            </View>
            <View style={style.containerButtonsFiltro}>
                <TouchableOpacity style={style.buttonFiltro}>
                    <Text style={style.textButton}>Aprovados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonFiltro}>
                    <Text style={style.textButton}>Reprovados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonFiltro}>
                    <Text style={style.textButton}>Disponiveis</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={style.buttonLimpar}>
                    <Text style={style.textButton}>Limpar filtro</Text>
                </TouchableOpacity>
            </View>
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
    },
    containerInput: {
        backgroundColor: '#7B9CCC',
        width: '100%',
        height: 60,
        borderRadius: 8,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    lupaInput: {
        width: 25,
        height: 25,
        marginLeft: 20
    },
    textInput: {
        width: '75%',
        height: '80%',
        marginRight: 10,
        fontSize: 35,
        textAlign: 'center'
    },
    containerButtonsFiltro: {
        width: 280,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    buttonFiltro: {
        width: 70,
        height: 25,
        borderRadius: 8,
        backgroundColor: '#253E60',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 12,
        lineHeight: 20,
        color: '#FFFFFF'
    },
    buttonLimpar:{
        width: 80,
        height: 25,
        borderRadius: 8,
        backgroundColor: '#253E60',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2
    }
})