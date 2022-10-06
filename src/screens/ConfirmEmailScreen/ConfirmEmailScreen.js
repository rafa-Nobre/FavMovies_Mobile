import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const ConfirmEmailScreen = () => {
  const [codeSended, setCodeSended] = useState('');

  const onConfirmPressed = () => {
    console.warn('Confirmado!');
  };
  const onSignInPressed = () => {
    console.warn('Entrar!!');
  };
  const onResendCodePressed = () => {
    console.warn('Reenviado!');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirme seu email!</Text>

        <CustomInput
          placeholder="Insira o código"
          value={codeSended}
          setValue={setCodeSended}
        />

        <CustomButton text="Confirmar" onPress={onConfirmPressed} />
        <CustomButton
          text="Reenviar código"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Retornar para login"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
