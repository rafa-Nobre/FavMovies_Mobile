import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {
    console.warn('Enviado!');
  };
  const onSignInPressed = () => {
    console.warn('Entrar!!');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Redefinir Senha</Text>

        <CustomInput placeholder="Código" value={code} setValue={setCode} />
        <CustomInput
          placeholder="Nova senha"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submeter" onPress={onSubmitPressed} />

        <CustomButton
          text="Retornar para login"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;
