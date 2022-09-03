import Header from './components/Header';
import {styles} from './assets/styles/MyStyles'
import { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import {Text, View,TextInput,TouchableOpacity,Image } from 'react-native';

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
    setResultado(0);
  }
  //metodo sumar
  let sumar = function(){
    setResultado(parseFloat(valor1) + parseFloat(valor2))
    //alert(resultado)
  }

  let calcular = (oper)=>{
    let mresult = 0
    switch(oper){
      case "+":
        mresult = parseFloat(valor1) + parseFloat(valor2)
      break;

      case "-":
        mresult = parseFloat(valor1) - parseFloat(valor2)
      break;

      case "*":
        mresult = parseFloat(valor1) * parseFloat(valor2)
      break;

      case "/":
        mresult = parseFloat(valor1) / parseFloat(valor2)
        break;

      case "^":
        mresult = Math.pow(valor1,valor2)
        break;
      case "√":
        mresult = Math.sqrt(valor1)
        break;
  
    }
    setResultado(mresult)
  }

  return (
    <View style={[styles.container,styles.alingView]}>
      <Header src="imgCalcBanner.jpg"></Header>
      <View style={[styles.viewChild,styles.alingView,{marginTop:10}]}>
        <Image
          source={{uri: 'https://images.assetsdelivery.com/compings_v2/insjoy/insjoy1906/insjoy190600830.jpg'}}
          style={{width:100, height:100}}
        />
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
        <Text>{new Intl.NumberFormat('es-CO').format(resultado)}</Text>
        <Text>{'\n'}</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          <TouchableOpacity
            style={{backgroundColor:'black',padding:5,borderRadius:10,marginLeft:15}}
            onPress={()=>calcular('+')}
          >
              <Text style={{color:'white',fontWeight:'bold'}}> + </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor:'black',padding:5,borderRadius:10,marginLeft:10}}
            onPress={()=>calcular('-')}
          >
              <Text style={{color:'white',fontWeight:'bold'}}> - </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor:'black',padding:5,borderRadius:10,marginLeft:10}}
            onPress={()=>calcular('*')}
          >
              <Text style={{color:'white',fontWeight:'bold'}}> X </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor:'black',padding:5,borderRadius:10,marginLeft:10}}
            onPress={()=>calcular('/')}
          >
              <Text style={{color:'white',fontWeight:'bold'}}> / </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor:'black',padding:5,borderRadius:10,marginLeft:10}}
            onPress={()=>calcular('^')}
          >
              <Text style={{color:'white',fontWeight:'bold'}}> ^ </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor:'black',padding:5,borderRadius:10,marginLeft:10}}
            onPress={()=>calcular('√')}
          >
              <Text style={{color:'white',fontWeight:'bold'}}> √ </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor:'black',padding:5,borderRadius:10,marginLeft:10}}
            onPress={()=>limpiar()}
          >
              <Text style={{color:'white',fontWeight:'bold'}}> C </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}