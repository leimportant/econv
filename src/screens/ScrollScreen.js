/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import Logo from '../components/Logo'
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView, StatusBar } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animating: true,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
            align: 'center',
          });
        }),
      3000
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent:  'center',
          marginHorizontal: 50,
        }}>

        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center',alignItems: 'center'}}>
         <Image
          source={require('../assets/logo.png',
          )}
          style={{ width: 100, height: 100 }}
        />
        {!this.state.alignsecond ? null : (
          <View contentContainerStyle={{flexGrow: 1, justifyContent: 'center',alignItems: 'center'}}>
            <Text
              style={{ color: '#114998', fontSize: 18, fontWeight: 'bold',justifyContent: 'center',alignItems: 'center' }}>
               BUKU USAHA KREDITAN
            </Text>

          <Text
            style={{ color: '#114998', fontSize: 15, fontWeight: 'bold' }}>
             APLIKASI KEUANGAN UNTUK USAHA KREDITAN  
          </Text>
          <Text
            style={{ color: '#114998', fontSize: 13, fontWeight: 'bold' }}>
             MANAJEMEN RAPIH USAHA LANCAR
          </Text>
          </View>
            )}
        </ScrollView>

      </View>
    );
  }
}