import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'

import { getReservasPorBloco, getSalasDisponiveisPorBloco, getReservasAprovadasPorBloco, getReservasReprovadasPorBloco, getReservasCriadasPeloSolicitante } from '../services/reservas';

import lupa from '../../assets/lupa.png'

export default (props) => {
    const [filter, setFilter] = useState(false)
    const [statusReserva, setStatusReserva] = useState()
    const [statusSala, setStatusSala] = useState()
    const [buttonAcessDisponiveis, setButtonAcessDisponiveis] = useState(false)
    const [buttonAcessAprovados, setButtonAcessAprovados] = useState(false)
    const [buttonAcessReprovados, setButtonAcessReprovados] = useState(false)
    const [buttonAcessReservados, setButtonAcessReservados] = useState(false)


    const requestReservas = _ => {

        if (filter === false) {
            setFilter(true)
            if (statusReserva === 4) {
                getReservasCriadasPeloSolicitante(props.idSolicitante, props.bloco).then(response => {
                    console.log(response.data)
                    props.setReserva(response.data)
                }).catch(erro => {
                    Alert.alert(`Houve um problema com a requisição ${erro}`)
                })
                return
            }
            if (props.bloco === '') {
                Alert.alert('Insira um bloco por favor.')
                return
            }
            if (statusSala === 0) {
                getSalasDisponiveisPorBloco(props.bloco).then(response => {
                    console.log(response.data)
                    props.setReserva(response.data)
                }).catch(erro => {
                    Alert.alert(`Houve um problema com a requisição ${erro}`)
                })
                return
            }
            if (statusReserva === 0) {
                getReservasAprovadasPorBloco(props.bloco).then(response => {
                    console.log(response.data)
                    props.setReserva(response.data)
                }).catch(erro => {
                    Alert.alert(`Houve um problema com a requisição ${erro}`)
                })
                return
            }
            if (statusReserva === 1) {
                getReservasReprovadasPorBloco(props.bloco).then(response => {
                    console.log(response.data)
                    props.setReserva(response.data)
                }).catch(erro => {
                    Alert.alert(`Houve um problema com a requisição ${erro}`)
                })
                return
            }
            getReservasPorBloco(props.bloco).then(response => {
                props.setReserva(response.data)
            }).catch(erro => {
                console.log(erro)
            })
        }
        else {
            setFilter(false)
        }
    }

    return (
        <View style={style.containerFiltro}>
            <Text style={style.titleContainerFiltro}>Insira o Bloco</Text>
            <View style={style.containerInput} >
                <TouchableOpacity
                    onPress={requestReservas}>
                    <Image source={lupa} style={style.lupaInput} />
                </TouchableOpacity>
                <TextInput style={style.textInput}
                    ref={props.mainInput}
                    value={props.bloco}
                    onChangeText={props.setbloco} />
            </View>
            <View style={style.containerButtonsFiltro}>
                <TouchableOpacity style={style.buttonFiltro}
                    disabled={buttonAcessReservados}
                    onPress={_ => {
                        setStatusReserva(4)
                        setButtonAcessReprovados(true)
                        setButtonAcessDisponiveis(true)
                        setButtonAcessAprovados(true)
                    }}>
                    <Text style={style.textButton}>Reservados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonFiltro}
                    disabled={buttonAcessAprovados}
                    onPress={_ => {
                        setStatusReserva(0)
                        setButtonAcessReprovados(true)
                        setButtonAcessDisponiveis(true)
                        setButtonAcessReservados(true)
                    }}>
                    <Text style={style.textButton}>Aprovados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonFiltro}
                    disabled={buttonAcessReprovados}
                    onPress={_ => {
                        setStatusReserva(1)
                        setButtonAcessAprovados(true)
                        setButtonAcessDisponiveis(true)
                        setButtonAcessReservados(true)
                    }}>
                    <Text style={style.textButton}>Reprovados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonFiltro}
                    disabled={buttonAcessDisponiveis}
                    onPress={_ => {
                        setStatusSala(0)
                        setButtonAcessAprovados(true)
                        setButtonAcessReprovados(true)
                        setButtonAcessReservados(true)
                    }}>
                    <Text style={style.textButton}>Disponiveis</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={style.buttonLimpar}
                    onPress={_ => {
                        setButtonAcessAprovados(false)
                        setButtonAcessReprovados(false)
                        setButtonAcessDisponiveis(false)
                        setButtonAcessReservados(false)
                        setStatusReserva(10)
                        setStatusSala(10)
                    }}>

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
        marginHorizontal: 20
    },
    textButton: {
        fontSize: 12,
        lineHeight: 20,
        color: '#FFFFFF'
    },
    buttonLimpar: {
        width: 80,
        height: 25,
        borderRadius: 8,
        backgroundColor: '#253E60',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2
    }
})