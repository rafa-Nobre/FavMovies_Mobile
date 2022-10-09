import React, {useState} from 'react';
import {
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
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

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    console.log(data);
    navigation.navigate('Home');
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
          rules={{required: true}}
        />
        <CustomInput
          name="password"
          placeholder="Senha"
          control={control}
          secureTextEntry={true}
          rules={{required: true}}
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
