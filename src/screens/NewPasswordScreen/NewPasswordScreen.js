import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import styles from './styles';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onSubmitPressed = async data => {
    // console.warn(data);
    // navigation.navigate('Home');
    if (loading) return;
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      Alert.alert('Aviso', 'Senha redefinida com sucesso!');
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Oops', e.message);
    } finally {
      setLoading(false);
    }
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Redefinir Senha</Text>

        <CustomInput
          placeholder="Nome de Usuário"
          name="username"
          control={control}
          rules={{required: 'Nome de usuário necessário'}}
        />
        <CustomInput
          placeholder="Código"
          name="code"
          control={control}
          rules={{required: 'Código necessário'}}
        />
        <CustomInput
          placeholder="Nova senha"
          name="password"
          control={control}
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
