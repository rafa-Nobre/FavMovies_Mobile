import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = data => {
    console.warn(data);
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Redefinir Senha</Text>

        <CustomInput
          placeholder="Código"
          name="code"
          control={control}
          rules={{required: 'Código necessário'}}
        />
        <CustomInput
          placeholder="Nova senha"
          name="new-password"
          conrol={control}
          secureTextEntry={true}
          rules={{
            required: 'Nova senha necessária',
            minLength: {
              value: 8,
              message: 'Senha deve conter entre 8-16 caracteres',
            },
            maxLength: 16,
          }}
        />

        <CustomButton text="Submeter" onPress={handleSubmit(onSubmitPressed)} />

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
