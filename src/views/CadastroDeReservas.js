import { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import NavbarAprovacoes from '../components/NavbarAprovacoes'
import FiltroAprovacoes from '../components/FiltroAprovacoes'
import Cards from '../components/Cards'

export default _ => {

    const [bloco, setbloco] = useState('')
    const [reservasPorBloco, setReservasPorBloco] = useState([])
    
    return (
        <View style={style.containerReservas}>
            <NavbarAprovacoes />
            <FiltroAprovacoes bloco={bloco} setbloco={setbloco} setReservasPorBloco={setReservasPorBloco}  />
            <Cards reservasPorBloco={reservasPorBloco} />
        </View>
    )
}

const style = StyleSheet.create({
    containerReservas: {
        alignItems: 'center'
    }
})