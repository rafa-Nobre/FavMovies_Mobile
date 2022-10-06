import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import styles from './styles';

const ConfirmEmailScreen = () => {
  const [codeSended, setCodeSended] = useState('');

  const onConfirmPressed = () => {
    console.warn('Confirmado!');
  };

  const onTermsOfUsePressed = () => {
    console.warn('Termos de uso');
  };

  const onPrivacyPressd = () => {
    console.warn('Politica de privacidade');
  };

  const onSignInPressed = () => {
    console.warn('Entrar!!');
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
          text="Retornar para login"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
