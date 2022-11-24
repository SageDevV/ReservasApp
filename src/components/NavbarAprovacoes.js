import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'



export default _ => {
    return (
        <View style={style.containerNavBar}>
            <TouchableOpacity style={style.buttonNavBar}>
                <Text style={style.textButtonNavBar}>Aprovações</Text>
            </TouchableOpacity>
            <Text style={style.textNavBar}>Bem vindo, Professor</Text>
        </View>
    )
}

const style = StyleSheet.create({
    containerNavBar: {
        width: '100%',
        height: 60,
        backgroundColor: '#7B9CCC',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    buttonNavBar: {
        width: 100,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#F0FFB2',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
        
    },
    textButtonNavBar: {
        fontSize: 15,
        lineHeight: 15,
    },
    textNavBar: {
        color: '#FFFFFF',
        fontSize: 15,
        lineHeight: 32,
        marginRight: 20
    }

})