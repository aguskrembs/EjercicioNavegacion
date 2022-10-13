import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  const [contador, setContador] = useState(0);
  const actualizarContadorHome = () => {
    setContador(contador+1);
  };
  
  const unsubscribe = navigation.addListener('focus', () =>{
    actualizarContadorHome()
    
    return unsubscribe
  },[navigation]);
  
  useEffect( ()=> {
    setContador(contador+1);
  },[]);
  return (
    <View style={ styles.topBanner }>
      <Text>Home Screen</Text>
      <Button title='Go to Details' onPress={ () => navigation.navigate('Details',{texto: "No details were found"}) }/>
      <Button title='Count +1!' onPress={ () => {actualizarContadorHome()} }/>
      <Text>Renderizaciones: {contador}</Text>
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {texto, imagen} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{texto}</Text>
      <Image source={require("./rickroll-roll.gif")}/>
      <Button title='Go Back' onPress={ () => navigation.goBack()}/>
    </View>
  );
}

function CounterScreen({ navigation }) {

  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function App() {
  // const [contador, setContador] = useState(0);
  // const actualizarContadorHome = () => {
  //   setContador(contador+1);
  //   console.log("Renderizaciones: "+contador);
  // }
  return (
    <NavigationContainer>
      
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}

      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Counter" component={CounterScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  topBanner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default App;