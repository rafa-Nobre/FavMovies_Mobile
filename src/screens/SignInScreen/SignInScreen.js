import React, {useState} from 'react';
import {View, Image, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/user.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignInScreen = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const {control, handleSubmit, watch} = useForm();

  const onSignInPressed = data => {
    const usernameValue = watch('username');
    console.log(data);
    navigation.navigate('Home', usernameValue);
  };
  const onForgotPasswordPressed = () => {
    //console.warn('Esqueceu!!');
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    //console.warn('Cadastro!!');
    navigation.navigate('SignUp');
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
          name="username"
          placeholder="Usuário"
          control={control}
          rules={{
            required: 'Nome de usuário necessário',
            minLength: {
              value: 5,
              message: 'Mínimo 5 e máximo de 20 caracteres',
            },
            maxLength: 20,
          }}
        />
        <CustomInput
          name="password"
          placeholder="Senha"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Senha necessária',
            minLength: {
              value: 8,
              message: 'Senha deve ter de 8-16 caracteres',
            },
            maxLength: 16,
          }}
        />

        <CustomButton text="Entrar" onPress={handleSubmit(onSignInPressed)} />
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
