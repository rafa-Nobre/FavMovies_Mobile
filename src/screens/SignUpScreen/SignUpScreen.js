import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
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
      navigation.navigate('ConfirmEmail', {username});
    } catch (e) {
      Alert.alert('Oops', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.inputContainer}>
          <Text>Nome</Text>
          <CustomInput
            placeholder="Digite seu nome"
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
        </View>

        <View style={styles.inputContainer}>
          <Text>Nome de Usuário</Text>
          <CustomInput
            placeholder="Digite seu nome de usuário"
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
        </View>

        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <CustomInput
            placeholder="Digite seu email"
            control={control}
            name="email"
            rules={{
              required: 'Email necessário',
              pattern: {value: EMAIL_REGEX, message: 'Email inválido'},
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Senha</Text>
          <CustomInput
            placeholder="Digite sua senha"
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
        </View>

        <View style={styles.inputContainer}>
          <Text>Confirmar Senha</Text>
          <CustomInput
            placeholder="Repita sua senha"
            secureTextEntry={true}
            control={control}
            name="confirm_password"
            rules={{
              validate: value =>
                value === passwordValue || 'Senha não compatível',
            }}
          />
        </View>

        <CustomButton
          text={loading ? 'Carregando...' : 'Cadastrar'}
          onPress={handleSubmit(onRegisterPressed)}
        />

        {/* <Text style={styles.text}>
          Ao registrar, você confirma que aceitou nossos{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Termos de Uso
          </Text>
        </Text> */}
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
