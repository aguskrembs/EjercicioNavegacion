import * as React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={ styles.topBanner }>
      <Text>Home Screen</Text>
      <Button title='Go to Details' onPress={ () => navigation.navigate('Details',{texto: "Lorem ipsum"}) }/>
      {<Button title='Go to Notificactions' onPress={ () => navigation.navigate('Notifications') }/>}
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {texto, imagen} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{texto}</Text>
      <Image source={require("./rickroll-roll.gif")}/>
      <Button title='Go Back' onPress={ () => navigation.goBack()}/>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}

      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
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