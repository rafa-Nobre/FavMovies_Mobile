import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const onSignInGooglePressed = () => {
    console.warn('Entrou com Google!');
  };
  const onSignInFacebookPressed = () => {
    console.warn('Entrou com Facebook!');
  };
  const onSignInApplePressed = () => {
    console.warn('Entrou com Apple!');
  };

  return (
    <>
      <CustomButton
        text="Entrar com conta Google"
        onPress={onSignInGooglePressed}
        backColor="#FAE9EA"
        frontColor="#DD4D44"
      />
      <CustomButton
        text="Entrar com Facebook"
        onPress={onSignInFacebookPressed}
        backColor="#E7EAF4"
        frontColor="#4765A9"
      />
      <CustomButton
        text="Entrar com conta Apple"
        onPress={onSignInApplePressed}
        backColor="#E3E3E3"
        frontColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
