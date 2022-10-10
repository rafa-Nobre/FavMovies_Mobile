import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onConfirmPressed = data => {
    console.warn(data);
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
          name="code"
          control={control}
          rules={{required: 'Insira o código'}}
        />

        <CustomButton
          text="Confirmar"
          onPress={handleSubmit(onConfirmPressed)}
        />
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
