import React from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButtonOnboarding'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <BackButton/>

      <Logo />
      <Header>BUKU USAHA KREDITAN</Header>
      <Paragraph>
        APLIKASI KEUANGAN UNTUK USAHA KREDITAN  
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginPhoneScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        BUAT ACCOUNT
      </Button>
    </Background>
  )
}
