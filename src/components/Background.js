import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../assets/background_2.jpeg')}
      resizeMode="cover"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    padding: 20,
    width: '100%',
    maxWidth: 360,
    height: 850,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
