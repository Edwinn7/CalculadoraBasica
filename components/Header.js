import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={myStyle.ViewHeader}>
            <Text>Cabecera</Text>
        </View>
    )
}

const myStyle = StyleSheet.create({
    ViewHeader:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'gray',
        // flexDirection:'row',
        width:'80%',
    }
})