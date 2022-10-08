import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [codeSended, setCodeSended] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onResendCodePressed = () => {
    console.warn('Reenviado, cheque seu email!');
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
