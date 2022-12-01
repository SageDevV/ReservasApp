import { Modal, View, StyleSheet } from 'react-native'


export default ({ visibleModal, children }) => {


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibleModal}
        >
            <View style={style.modalView}>
                {children}
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    modalView: {
        position: 'relative',
        top: '80%',
        left: '2%',
        width: '90%',
        height: '20%',
        borderRadius: 8,
        backgroundColor: '#7B9CCC',
        borderWidth: 3,
        borderColor: '#253E60',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})