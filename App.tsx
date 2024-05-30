import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Traductor from './JS/Traductor';
import Traductorseñas from './JS/Traductorseñas';
import Diccionario from './JS/Diccionario';
import Inicio from './JS/inicio';
import CamaraPage from './JS/CamaraPage'
const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer> 
      <Stack.Navigator>
       <Stack.Screen name="Inicio" component={Inicio} />
       <Stack.Screen name="Traductorseñas" component={Traductorseñas} />
        <Stack.Screen name="Diccionario" component={Diccionario} />
        <Stack.Screen name="Traductor" component={Traductor} />
        <Stack.Screen name="CamaraPage" component={CamaraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

