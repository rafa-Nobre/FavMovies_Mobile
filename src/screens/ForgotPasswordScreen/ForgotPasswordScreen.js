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
    const username = data;
    if (loading) return;
    setLoading(true);
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate('NewPassword', username);
    } catch (e) {
      Alert.alert('Oops', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.inputContainer}>
          <Text>Nome de Usuário</Text>
          <CustomInput
            placeholder="Digite seu nome de usuário"
            name="username"
            control={control}
            rules={{required: 'Nome de usuário necessário'}}
          />
        </View>

        <CustomButton
          text={loading ? 'Carregando...' : 'Submeter'}
          onPress={handleSubmit(onSendPressed)}
        />

        {/* <CustomButton
          text="Retornar para login"
          onPress={onSignInPressed}
          type="TERTIARY"
        /> */}
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
