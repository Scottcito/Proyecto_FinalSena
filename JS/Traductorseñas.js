import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import logo from '../imagenes/logo.jpeg.jpg'
import cambiar from '../imagenes/cambiar.png'

import { Camera } from 'react-native-vision-camera';
const Traductorseñas = () => {
  const navegar = useNavigation(); 
  const handleCamara = () => {
    navegar.navigate('CamaraPage');
  };
 
  const handlpermiso=async()=>{
    const newCameraPermission = await Camera.requestCameraPermission()
    console.log(newCameraPermission)
  };
  const handlePresionar = () => {
    handlpermiso();
    handleCamara();
  };

  return (
    <View style={styles.div}>
      <View style={styles.titulo}>
      <Image
        source={logo}
        style={styles.image}
      />
       <Text style={styles.label}>Traductor SenAssist</Text>
      </View>
      <View style={styles.cambiar}>
      <Text style={styles.texto}>Señas</Text>

       <TouchableOpacity style={styles.button} onPress={handleCamara}>
      <Image
       source={cambiar}
       style={styles.cambiarimg}
    
      />
    </TouchableOpacity>
      <Text style={styles.texto1}>Escrito</Text>
      </View>
      <View>
      <Text style={styles.texto2}>Señas</Text>
      <TouchableOpacity style={styles.input} onPress={handlePresionar}>  
      <Text style={styles.camara}>Dar clic para activar camara</Text>
      </TouchableOpacity> 
      </View>
      <View>
      <Text style={styles.texto2}>Escrito</Text>
      <TextInput style={styles.input1} placeholder="Texto a traducido" placeholderTextColor="#147CA6" />
    
      </View>
      <View style={styles.button}>
      <Button
          title="Traducir"
          color="#147CA6"

        />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  div:{
    alignItems: 'center',
    justifyContent: 'center',
  },
 titulo:{
  flexDirection: 'row', 
  padding: 10,
 },
  label: {
    fontSize: 25,
    color:"#147CA6",
    marginBottom: 8,
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 30, 
  },
  cambiar:{
    flexDirection: 'row', 
    borderWidth: 1,
    borderColor: 'black', 
    borderRadius: 10,
    margin:5,
    height:50,
    width:380,
    alignItems:"center",
    

  },
  cambiarimg:{
    width: 30,
    height: 30,
    marginRight: 60, 
    marginLeft:60

  },
  texto:{
  paddingLeft:70,
  fontSize:18,
  color:"#147CA6",
  },
  texto1:{
  fontSize:18,
  color:"#147CA6",

      },
  input:{
    borderWidth:1,
    height:130,
    width:370,
    margin:10,
    color:"#147CA6", 
  },
  input1:{
    borderWidth:1,
    height:250,
    width:370,
    margin:10,
    color:"#147CA6",
  },
  texto2:{
fontSize:25,
marginLeft:20,
marginTop:10,
color:"#147CA6",
  },
  button:{
    padding:10
  },camara:{
    fontSize:15,
    color:"#147CA6",
    justifyContent:'center',
    alignItems:'center',
    marginTop:50
  }
});

export default Traductorseñas;