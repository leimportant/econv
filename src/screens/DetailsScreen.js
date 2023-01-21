import React from 'react';
import { RefreshControl, SafeAreaView, FlatList, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
    <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:10, padding: 5}} />
    <View style={{paddingLeft: 8, flex:1}}>
      <Text style={{fontWeight:"bold", fontSize:18, textAlign: 'left'}}>{item.name} </Text>
      <Text style={{textAlign: 'left', color: '#859a9b', fontSize: 16}}>{item.text}</Text>
      <Text style={{textAlign: 'left', color: '#859a9b', fontSize: 14}}>{item.date}</Text>
      <Text style={{textAlign: 'left', fontSize: 14}}>{item.phone}</Text>
    </View>
    <TouchableOpacity style={{height:60,width:50, justifyContent:"center",alignItems:"center"}}>
      <Text style={{color:"green"}}>Lihat</Text>
    </TouchableOpacity>
  </View>
  );
}

export default class App extends React.Component {
  state = {
    data:[
        {
            "id":1,
            "name": "Miyah Myles",
            "date": "Tangal : 20/08/2022 12:04",
            "phone": "089 2349 1234",
            "text": "Pendaftaran Akun",
            "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        },
        {
          "id":2,
            "name": "June Cha",
            "date": "Tangal : 20/08/2022 12:04",
            "phone": "089 2349 1234",
            "text": "Pendaftaran Akun",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
          "id":3,
            "name": "Iida Niskanen",
            "date": "Tangal : 20/08/2022 12:04",
            "phone": "089 2349 1234",
            "text": "Pendaftaran Akun",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
        },
        {
          "id":4,
            "name": "Renee Sims",
            "date": "Tangal : 20/08/2022 12:04",
            "phone": "089 2349 1234",
            "text": "Pendaftaran Akun",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
        },
        {
          "id":5,
            "name": "Jonathan Nu\u00f1ez",
            "date": "Tangal : 20/08/2022 12:04",
            "phone": "089 2349 1234",
            "text": "Pendaftaran Akun",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
        },
        {
            "id":6,
            "name": "Jajang Nurjaman",
            "date": "Tangal : 20/08/2022 12:04",
            "phone": "1 pesanan",
            "text": "Request Pesanan Barang",
            "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
          "id":7,
            "name": "Abdullah Hadley",
            "date": "Tangal : 20/08/2022 12:04",
            "phone": "1 pesanan",
            "text": "Request Pesanan Barang",
            "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
        },
        {
          "id":8,
            "name": "Thomas Stock",
            "date": "Tangal : 20/08/2022 12:04",
            "phone": "4 pesanan",
            "text": "Request Pesanan Barang",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/1.jpg"
        },
        {
          "id":9,
            "name": "Veeti Seppanen",
            "phone": "3 pesanan",
            "date": "Tangal : 20/08/2022 12:04",
            "text": "Request Pesanan Barang",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
        },
        {
          "id":10,
            "name": "Bonnie Riley",
            "phone": "2 pesanan",
            "date": "Tangal : 20/08/2022 12:04",
            "text": "Request Pesanan Barang",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
        },
        {
          "id":11,
            "name": "Pak Dede",
            "phone": "2 item barang masuk",
            "date": "Tangal : 20/08/2022 12:04",
            "text": "Request Pesanan Barang",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
        }
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    marginTop:10
  },
  listItem:{
    margin:5,
    padding:10,
    backgroundColor:"#fff",
    width:"100%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});