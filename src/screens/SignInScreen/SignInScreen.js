import React, {useState} from 'react';
import {View, Image, useWindowDimensions, Text, Alert} from 'react-native';
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

  const {control, handleSubmit, watch} = useForm();
  const [loading, setLoading] = useState(false);

  const onSignInPressed = async data => {
    // const usernameValue = watch('username');
    // console.log(data);
    if (loading) return;

    setLoading(true);
    try {
      console.log(
        'SignInScreen ~ onSignInPressed ~ 32 ~ username, password',
        data.username,
        data.password,
      );
      const response = await Auth.signIn(data.username, data.password);

      console.warn('Login bem sucedido!');
      console.log('SignInScreen ~ onSignInPressed ~ 40 ~ response', response);
    } catch (e) {
      Alert.alert('Oops', e.message);
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

      <Text style={styles.textLogo}>Bem-vindo ao FavMovies</Text>

      <View style={styles.inputContainer}>
        <Text>Nome de Usuário</Text>
        <CustomInput
          name="username"
          placeholder="Digite seu nome de usuário"
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
      </View>

      <View style={styles.inputContainer}>
        <Text>Senha</Text>
        <CustomInput
          name="password"
          placeholder="Digite sua senha"
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
      </View>

      <CustomButton
        text={loading ? 'Carregando...' : 'Entrar'}
        onPress={handleSubmit(onSignInPressed)}
      />
      {/* <CustomButton
        text="Esqueceu sua senha?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      /> */}

      <CustomButton
        text="Cadastrar"
        onPress={onSignUpPressed}
        type="SECONDARY"
      />

      <View style={{marginTop: 40}}>
        <Text style={styles.text} onPress={onForgotPasswordPressed}>
          Esqueceu sua senha?
        </Text>
        <Text style={styles.text} onPress={onTermsOfUsePressed}>
          Termos de Uso
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;
