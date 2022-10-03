import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/user.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

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
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
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

        <CustomButton text="Entrar" onPress={onSignInPressed} />
        <CustomButton
          text="Esqueceu sua senha?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

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
        <CustomButton
          text="Entrar com conta Apple"
          onPress={onSignInApplePressed}
          backColor="#E3E3E3"
          frontColor="#363636"
        />

        <CustomButton
          text="Cadastrar"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
        {/*<Button onPress={onSignInPressed} title="Sign In" />*/}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 150,
    marginBottom: 50,
  },
});

export default SignInScreen;
