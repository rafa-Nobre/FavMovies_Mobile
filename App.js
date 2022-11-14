import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Routes from './src/routes';

import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
