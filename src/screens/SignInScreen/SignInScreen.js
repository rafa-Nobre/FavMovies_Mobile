import React, {useState} from 'react';
import {View, Image, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/user.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import styles from './styles';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Entrou!');
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

        <SocialSignInButtons />

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

export default SignInScreen;
