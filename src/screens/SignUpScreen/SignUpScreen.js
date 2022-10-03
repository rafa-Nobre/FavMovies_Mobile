import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Entrou!');
  };

  const onSignInGooglePressed = () => {
    console.warn('Entrou com Google!');
  };

  const onSignInFacebookPressed = () => {
    console.warn('Entrou com Facebook!');
  };

  const onSignInApplePressed = () => {
    console.warn('Entrou com Apple!');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Esqueceu!!');
  };

  const onSignUpPressed = () => {
    console.warn('Cadastro!!');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Criar uma conta!</Text>
        <CustomInput
          placeholder="Usuário"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Senha"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Registrar" onPress={onSignInPressed} />

        <CustomButton
          text="Entrar com conta Google"
          onPress={onSignInGooglePressed}
          backColor="#FAE9EA"
          frontColor="#DD4D44"
        />
        <CustomButton
          text="Entrar com Facebook"
          onPress={onSignInFacebookPressed}
          backColor="#E7EAF4"
          frontColor="#4765A9"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
