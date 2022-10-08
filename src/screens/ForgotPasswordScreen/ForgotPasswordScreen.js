import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    console.warn('Enviado!');
  };
  const onSignInPressed = () => {
    console.warn('Entrar!!');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Redefinir Senha</Text>

        <CustomInput
          placeholder="Nome de usuário"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Enviar" onPress={onSendPressed} />

        <CustomButton
          text="Retornar para login"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
