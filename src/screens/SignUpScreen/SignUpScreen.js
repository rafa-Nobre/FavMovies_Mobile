import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../../utils';
import {Auth} from 'aws-amplify';
import styles from './styles';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const {control, handleSubmit, watch} = useForm();
  const [loading, setLoading] = useState(false);

  const passwordValue = watch('password');

  const onRegisterPressed = async data => {
    if (loading) return;
    setLoading(true);
    const {username, password, email, name} = data;

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, name, preferred_username: username},
      });
      console.warn('Cadastro bem sucedido!');
      navigation.navigate('ConfirmEmail');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
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
          placeholder="Nome"
          control={control}
          name="name"
          rules={{
            required: 'Nome necessário',
            minLength: {
              value: 5,
              message: 'Mínimo 5 e máximo de 50 caracteres',
            },
            maxLength: 50,
          }}
        />
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
          text={loading ? 'Carregando...' : 'Registrar'}
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
