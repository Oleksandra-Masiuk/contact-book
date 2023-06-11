import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import 'react-native-gesture-handler';

import store from './store/store';
import App from './App';

function Root(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}

export default Root;
