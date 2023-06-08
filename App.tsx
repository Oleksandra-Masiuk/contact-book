import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactsInfo from './components/ContactsInfo';
import ContactsSection from './components/contactsSection/Contacts';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Contacts'}>
        <Stack.Screen
          name="Contacts"
          component={ContactsSection}
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
