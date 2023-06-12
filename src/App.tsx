import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import ContactsInfo, {
  RootStackParamList,
} from './components/ContactsInfo/ContactsInfo';
import ContactsSection from './components/contactsSection/ContactsSection/ContactsSection';

const Stack = createStackNavigator<RootStackParamList>();

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
      <Toast />
    </NavigationContainer>
  );
}

export default App;
