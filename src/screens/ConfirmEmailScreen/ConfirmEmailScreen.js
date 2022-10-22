import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {Auth} from 'aws-amplify';

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username},
  });
  const [loading, setLoading] = useState(false);

  const userData = watch('username');

  const navigation = useNavigation();

  const onConfirmPressed = async data => {
    // console.warn(data);
    // navigation.navigate('Home');
    if (loading) return;
    setLoading(true);
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('SignIn');
      Alert.alert('Aviso', 'Email confirmado com sucesso!');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onResendCodePressed = async () => {
    try {
      await Auth.resendSignUp(userData);
      Alert.alert('Reenviado!', 'Novo código enviado para seu email');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirme seu email!</Text>

        <CustomInput
          placeholder="Insira o nome de usuário"
          name="username"
          control={control}
          rules={{required: 'Insira o nome de usuário'}}
        />

        <CustomInput
          placeholder="Insira o código"
          name="code"
          control={control}
          rules={{required: 'Insira o código'}}
        />

        <CustomButton
          text={loading ? 'Carregando...' : 'Confirmar'}
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
