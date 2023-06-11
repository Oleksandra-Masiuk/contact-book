import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import ContactsInfo, {
  RootStackParamList,
} from './components/ContactsInfo/ContactsInfo';
import ContactsSection from './components/contactsSection/ContactsSection/ContactsSection';
import {Provider} from 'react-redux';
import store from './store/store';

const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
