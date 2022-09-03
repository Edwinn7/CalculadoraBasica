import { StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    viewChild:{
     flex:5,
     backgroundColor:'skyblue',
     width:'80%',
    },
    alingView:{
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
    }
  });
  
export{styles, myStyle}