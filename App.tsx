import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from './components/Contacts';
import ContactsInfo from './components/ContactsInfo';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Contacts'}>
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactInfo"
          component={ContactsInfo}
          options={{headerTitle: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
