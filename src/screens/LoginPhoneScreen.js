import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { phoneValidator } from '../helpers/phoneValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginPhoneScreen({ navigation }) {
  const [phone, setPhone] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const phoneError = phoneValidator(phone.value)
    if (phoneError) {
      setPhone({ ...phone, error: phoneError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainMenu' }],
    })
  }

  return (
    <Background>

      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header style={styles.title}>ALLQ MOBILE APPS</Header>
      <Text style={styles.label}> Masukan Nomor Handphone</Text>
      <TextInput
        label=""
        style={styles.input}
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        autoCapitalize="none"
        keyboardType="phone-pad"
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Lupa password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      
      <View style={styles.row}>
        <Text>Belum punya Account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  input: {
    fontSize: 18,
    height: 50,
    color: "#fff",
    marginTop: -5,
  },
  label: {
    marginTop: 50,
    color: "#fff",
    width: '100%',
    alignItems: 'flex-end',
    fontSize: 14,
  },
  animatedStyle: {
    top: 5,
    left: 15,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
  },
  button_primary : {
    marginTop: 20,
    color: theme.colors.primary,
  },
  button : {
    marginTop: -5,
    color: '#436b95',
    backgroundColor: '#436b95',
    paddingTop: 5,
  },
})
