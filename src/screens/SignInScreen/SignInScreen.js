import React, {useState} from 'react';
import {View, Image, useWindowDimensions, Alert} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const SignInScreen = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();
  const [loading, setLoading] = useState(false);

  const onSignInPressed = async data => {
    if (loading) return;

    setLoading(true);
    try {
      console.log(
        'SignInScreen ~ onSignInPressed ~ 32 ~ username, password',
        data.username,
        data.password,
      );
      const response = await Auth.signIn(data.username, data.password);
      console.log('SignInScreen ~ onSignInPressed ~ 40 ~ response', response);
    } catch (e) {
      Alert.alert(e.message);
    } finally {
      setLoading(false);
    }
  };
  const onForgotPasswordPressed = () => {
    //console.warn('Esqueceu!!');
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    //console.warn('Cadastro!!');
    navigation.navigate('SignUp');
  };

  const onTermsOfUsePressed = () => {
    navigation.navigate('Terms');
  };

  return (
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

      <CustomButton
        text={loading ? 'Carregando...' : 'Entrar'}
        onPress={handleSubmit(onSignInPressed)}
      />
      <CustomButton
        text="Esqueceu sua senha?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

      <CustomButton
        text="Cadastrar"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
    </View>
  );
};

export default SignInScreen;
