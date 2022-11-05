import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../../utils';
import styles from './styles';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const {control, handleSubmit, watch} = useForm();

  const passwordValue = watch('password');

  const onRegisterPressed = data => {
    console.warn(data);
    navigation.navigate('ConfirmEmail');
  };

  const onTermsOfUsePressed = () => {
    console.warn('Termos de uso');
  };

  const onPrivacyPressd = () => {
    console.warn('Politica de privacidade');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Criar uma conta!</Text>

        <CustomInput
          placeholder="Usuário"
          control={control}
          name="username"
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
          placeholder="Email"
          control={control}
          name="email"
          rules={{
            required: 'Email necessário',
            pattern: {value: EMAIL_REGEX, message: 'Email inválido'},
          }}
        />
        <CustomInput
          placeholder="Senha"
          secureTextEntry={true}
          control={control}
          name="password"
          rules={{
            required: 'Senha necessária',
            minLength: {
              value: 8,
              message: 'Senha de 8-16 caracteres',
            },
            maxLength: 16,
          }}
        />
        <CustomInput
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          control={control}
          name="confirm_password"
          rules={{
            validate: value =>
              value === passwordValue || 'Senha não compatível',
          }}
        />

        <CustomButton
          text="Registrar"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          Ao registrar, você confirma que aceitou nossos{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Termos de Uso
          </Text>{' '}
          e{' '}
          <Text style={styles.link} onPress={onPrivacyPressd}>
            Política de Privacidade
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Já possui uma conta? Faça login!"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
