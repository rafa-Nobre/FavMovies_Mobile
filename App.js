import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/routes';
import {Amplify} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0f171e',
  },
});

const signUpConfig = {
  header: 'Minha Tela de Cadastro',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Nome Completo',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Nome de Usuario',
      key: 'username',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Senha',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
    },
  ],
};

export default withAuthenticator(App, {signUpConfig});
