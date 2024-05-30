import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import logo from '../imagenes/logo.jpeg.jpg'  

const Inicio = () => {
  const navegar = useNavigation(); 


  const Diccionario = () => {
    navegar.navigate('Diccionario');
  };

  const Traductor = () => {
    navegar.navigate('Traductor');
  };
  

  return (
    <View style={styles.container}>
      <Text>SenAssist</Text>
      <Image
        source={logo}
        style={styles.image}
      />
      <View style={styles.button}>
      <Button
        title="Diccionario de palabras"
        color="#147CA6"
        onPress={Diccionario} 
      />
      </View>
      <View style={styles.button1}>
       <Button
        title="Traductor SenAssist"
        color="#147CA6"
        onPress={Traductor} 
      />
      </View>
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 50,
  },
  input: {
    height: 200,
    paddingTop: 10,
    width: 200,
    borderColor: 'gray',
    borderWidth: 10,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  button:{
    marginTop:30,
    height:50,
    width:230
  },
  button1:{
    marginTop:5,
    height:70,
    width:230
  }
});

export default Inicio;
