import Header from './components/Header';
import { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  // Hooks para estados con useState
  const [valor1,setValor1]=useState('')
  const [valor2,setValor2]=useState('')
  const [resultado,setResultado]=useState('')
  // metodo mostrar
  let mostrar = ()=>{
    alert('El valor 1 es: '+ valor1*2)
  }

  // metodo limpiar
  let limpiar = ()=>{
    setValor1('');
    setValor2('');
  }
  //metodo sumar
  let sumar = function(){
    setResultado(parseFloat(valor1) + parseFloat(valor2))
    //alert(resultado)
  }

  return (
    <View style={[styles.container,styles.alingView]}>
      <Header titulo="Banner"></Header>
      <View style={[styles.viewChild,{marginTop:10}]}>
        <Text>Valor 1</Text>
        <TextInput placeholder='Ingrese valor 1'
        style={{borderWidth:1,borderStyle:'solid',padding:5,textAlign:'center'}}
        onChangeText={valor1 => setValor1(valor1)}
        value={valor1}
        />
        <Text>Valor 2</Text>
        <TextInput placeholder='Ingrese valor 2'
        style={{borderWidth:1,borderStyle:'solid',padding:5,textAlign:'center'}}
        onChangeText={valor2 => setValor2(valor2)}
        value={valor2}
        />
        <Text>Resultado</Text>
        <Text>{resultado}</Text>
        <Button
          title='Sumar'
          onPress={sumar}
        />
        <Text>{'\n'}</Text>
        <Button
          title='Limpiar'
          onPress={limpiar}
        />
      </View>
    </View>
  );
}

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
