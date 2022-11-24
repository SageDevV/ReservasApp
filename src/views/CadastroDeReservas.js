import { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import NavbarAprovacoes from '../components/NavbarAprovacoes'
import FiltroAprovacoes from '../components/FiltroAprovacoes'
import Cards from '../components/Cards'

export default _ => {

    const [bloco, setbloco] = useState('B17')
    const [reservas, setReservas] = useState()

    
    return (
        <View style={style.containerReservas}>
            <NavbarAprovacoes />
            <FiltroAprovacoes bloco={bloco} setbloco={setbloco} setReservas={setReservas}  />
            <Cards />
        </View>
    )
}

const style = StyleSheet.create({
    containerReservas: {
        alignItems: 'center'
    }
})