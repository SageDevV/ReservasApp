import { View, StyleSheet } from 'react-native'

import NavbarAprovacoes from '../components/NavbarAprovacoes'
import FiltroAprovacoes from '../components/FiltroAprovacoes'
import Cards from '../components/Cards'

export default _ => {
    return (
        <View style={style.containerReservas}>
            <NavbarAprovacoes />
            <FiltroAprovacoes/>
            <Cards/> 
        </View>
    )
}

const style = StyleSheet.create({
    containerReservas: {
        alignItems: 'center'
    }
})