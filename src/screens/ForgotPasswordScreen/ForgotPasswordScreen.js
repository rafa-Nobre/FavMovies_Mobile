import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import styles from './styles';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onSendPressed = async data => {
    // console.warn(data);
    // navigation.navigate('NewPassword');
    if (loading) return;
    setLoading(true);
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate('NewPassword');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Redefinir Senha</Text>

        <CustomInput
          placeholder="Nome de usuário"
          name="username"
          control={control}
          rules={{required: 'Nome de usuário necessário'}}
        />

        <CustomButton
          text={loading ? 'Carregando...' : 'Enviar'}
          onPress={handleSubmit(onSendPressed)}
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

export default ForgotPasswordScreen;
