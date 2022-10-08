import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
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
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Senha"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirme sua senha"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Registrar" onPress={onRegisterPressed} />

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
