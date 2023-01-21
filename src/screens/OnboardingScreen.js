import { Image, View } from 'react-native';
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import React from 'react';
import { Button } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';


const div = (props) => {
  return (
    <View>{props.children}</View>
  );
};

const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255,0,0,0.3)';
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);
const setTitle = <View style={{ backgroundColor: "blue", flex: 0.3 }} />+`APLIKASI KEUANGAN UNTUK USAHA KREDITAN MANAJEMEN RAPIH USAHA LANCAR`;

const Done = ({ isLight, navigation, ...props }) => (
  <Button
    title={''}
    buttonStyle={{
      backgroundColor: 'rgba(52, 52, 52, alpha)' //backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 100,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  />
);

const Skip = ({ isLight, skipLabel, ...props }) => (
  <Button
    title={''}
    buttonStyle={{
      backgroundColor: 'rgba(52, 52, 52, alpha)'// backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 100,
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  >
    {skipLabel}
  </Button>
);

const Next = ({ isLight, ...props }) => (
  <Button
    title={'Lanjut'}
    buttonStyle={{
      backgroundColor: 'rgba(52, 52, 52, alpha)' //backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 100,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  />
);

const CustomButtons = ({ navigation }) => (
  <Onboarding
    DotComponent={Square}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    titleStyles={{ color: '#f194ff' }} // set default color for the title
    pages={[
      {
        backgroundColor: '#003180',
        image: <Image
        source={require('../assets/Pins/pin1.jpg')}
        style={{ width: '95%', height: 300, borderRadius: 10 }}/>,
        title: 'HALO, SELAMAT DATANG',
        subtitle: 'Tinggalkan cara lama yang serba manual dan tidak efisien. Beralihlah ke teknologi yang menjadikan kegiatan operasional usaha menjadi mudah dan praktis',
        titleStyles: { color: '#fff', fontWeight: 'bold'}, // overwrite default color

      },
      {
        backgroundColor: '#61b3ff',
        image: <Image
        source={require('../assets/Pins/pin6.jpg')}
        style={{ width: 350, height: 300, borderRadius: 10 }}/>,
        title: 'PENGOPERASIAN MUDAH',
        titleStyles: { color: '#2E2E2E', fontWeight: 'bold'}, // overwrite default color
        subtitle: "Pengoperasian yang sangat mudah dan praktis membantu para pegawai memudahkan kegiatan operasional usaha sehingga para pegawai hanya fokus mengembangkan usaha, menjual barang, mencari kosumen baru tanpa memikirkan pembukuan usaha",
      },
      {
        backgroundColor: '#6573ee',
        image: <Image
        source={require('../assets/Pins/pin4.jpg')}
        style={{ width: '100%', height: 300, borderRadius: 5 }}/>,
        
        title: (
          <Button
            title={'MULAI LOGIN'}
            mode="contained"
            containerViewStyle={{ marginTop: 20 }}
            backgroundColor={'white'}
            borderRadius={5}
            textStyle={{ color: '#003c8f' }}
            onPress={() =>  navigation.navigate('LoginPhoneScreen')}
          />
        ),
        subtitle: "\n BUKU USAHA KREDITAN \n \n APLIKASI KEUANGAN UNTUK USAHA KREDITAN MANAJEMEN RAPIH USAHA LANCAR",
        titleStyles: { color: '#2E2E2E', fontWeight: 'bold'}, // overwrite default color
      },
    ]}
  />

);


export default CustomButtons;