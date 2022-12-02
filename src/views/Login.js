import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'

import Sineta from '../../assets/sineta.png'
import loginUsuario from '../services/loginUsuario'

export default _ => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const onPressNavigateTo = () => {
        navigation.navigate('Home')
    }

    const onPressSend = () => {
        loginUsuario(email, senha).then(response => {
            if (response.data.privilegio === 0) {
                Alert.alert('Usuário encontrado.')
                navigation.navigate('CadastroDeReservas', { idSolicitante: response.data.id })
            }
            else if (response.data.privilegio === 1) {
                Alert.alert('Usuário encontrado.')
                navigation.navigate('ReservasParaAprovacoes', {idAprovador: response.data.id})
            }
            else {
                Alert.alert('Usuario não encontrado.')
            }
        }).catch(erro => {
            Alert.alert(`Erro na requisição ${erro}`)
        })

    }
    return (
        <>
            <View style={style.container}>
                <Text style={style.title}>SISTEMA DE RESERVAS</Text>
                <Image source={Sineta} style={style.sinetaImage} />
                <View style={style.containerForm}>
                    <Text style={style.titleForm}>Faça seu login</Text>
                    <View style={style.form}>
                        <View style={style.containerTextInput}>
                            <Text style={style.textInput}>Email</Text>
                            <TextInput
                                style={style.input}
                                onChangeText={setEmail}
                                value={email}
                                keyboardType="ascii-capable" />
                        </View>
                        <View style={style.containerTextInput}>
                            <Text style={style.textInput}>Senha</Text>
                            <TextInput
                                style={style.input}
                                onChangeText={setSenha}
                                value={senha}
                                keyboardType="ascii-capable"
                                secureTextEntry={true} />
                        </View>
                    </View>
                </View>
                <View style={style.containerButton}>
                    <View style={style.buttons}>
                        <TouchableOpacity style={style.button}
                            onPress={onPressSend}>
                            <Text style={style.buttonTitle}>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.button}
                            onPress={onPressNavigateTo}>
                            <Text style={style.buttonTitle}>Cadastro</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#CED8E9',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 20,
        lineHeight: '100%',
        fontStyle: 'regular',
        color: '#253E60'
    },
    sinetaImage: {
        width: 75,
        height: 49
    },
    titleForm: {
        fontSize: 22,
        lineHeight: 42,
        alignSelf: 'flex-start'
    },
    containerForm: {
        marginTop: 40,
        flexDirection: 'column'
    },
    form: {
        width: 370,
        height: 275,
        backgroundColor: '#7B9CCC',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTextInput: {
        width: '65%'
    },
    textInput: {
        color: '#FFFFFF',
        fontSize: 15,
        lineHeight: 35
    },
    input: {
        height: 48,
        backgroundColor: '#253E60',
        borderRadius: 10,
        color: '#FFFFFF'
    },
    containerButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '100%'
    },
    buttons: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#253E60',
        width: 90,
        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: '#FFFFFF'
    },
})