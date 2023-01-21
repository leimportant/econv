import React, { useState } from 'react';
import { RefreshControl,
         SafeAreaView,
         FlatList, 
         ImageBackground, 
         StyleSheet, 
         Text, 
         TouchableHighlight,
         LogBox,
         useEffect,
         View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


componentDidMount = () => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const refreshing = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

};

const state = {
  data:[
      {
          "id": 1,
          "name": "Neng Maya",
          "text": "Jatuh Tempo setiap Rabu",
          "address": "Jl. Cijantung No 21",
          "text2": "Bayar 5000, Sisa Utang 12.000",
          "status": "1",
          "status_name": "Lancar",
          "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
      },
      {
        "id": 2,
        "name": "Neng Kinkin",
        "text": "Jatuh Tempo setiap hari",
        "address": "Jl. Cijantung No 10",
        "text2": "Bayar 5000, Sisa Utang 32.000",
        "status": "1",
        "status_name": "Lancar",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"  
      },
      {
        "id": 3,
        "name": "Ibu Yuliad",
        "text": "Jatuh Tempo setiap hari",
        "address": "Jl. Cijantung No 1",
        "text2": "Bayar 5000, Sisa Utang 55.000",
        "status": "2",
        "status_name": "Terlambat 2 hari",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/40.jpg"
  },
    {
      "id": 4,
      "name": "Mami Yola",
      "text": "Jatuh Tempo setiap hari Rabu",
      "address": "Jl. Cijantung No 2",
      "text2": "Bayar 0, Sisa Utang 20.000",
      "status": "3",
      "status_name": "Macet",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/1.jpg"
    },  
    {
      "id": 5,
      "name": "Ibu Jupe",
      "text": "Jatuh Tempo setiap hari",
      "address": "Jl. Cijantung No 112",
      "text2": "Bayar 5000, Sisa Utang 0 (LUNAS)",
      "status": "4",
      "status_name": "Lunas",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/2.jpg"
    },
    {
      "id": 6,
      "name": "Ibu Jupaat",
      "text": "Jatuh Tempo setiap hari",
      "address": "Jl. Cijantung No 132",
      "text2": "Bayar 5000, Sisa Utang 0 (LUNAS)",
      "status": "4",
      "status_name": "Lunas",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/6.jpg"
    },  
  ]
}

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width:90, height:90,borderRadius:10}} />
      <View style={{paddingLeft: 5, flex:1}}>
        <Text style={{fontWeight:"bold", fontSize:18, textAlign: 'left'}}>{item.name}</Text>
        
        <Text style={{textAlign: 'left'}}>{item.text}</Text>
        <Text style={{fontWeight:"bold", textAlign: 'left'}}>{item.text2}</Text>

        {item.status === '1' &&
           <Text style={styles.status_lancar}>
          {item.status_name}</Text>
        }

        {item.status === '2' &&
           <Text style={styles.status_terlambat}>
          {item.status_name}</Text>
        }

        {item.status === '3' &&
           <Text style={styles.status_macet}>
          {item.status_name}</Text>
        }

        {item.status === '4' &&
           <Text style={styles.status_lunas}>
          {item.status_name}</Text>
        }


        <View style={{flex:1, paddingTop: 10, marginLeft: '-45%'}}>
        <Text style={{textAlign: 'left'}}>{item.address}</Text>

        <TouchableOpacity style={{marginBottom: 10, marginTop: 10}} onPress={()=>{alert("you clicked me")}}>
        
        </TouchableOpacity>

        <TouchableOpacity style={{flex:1, paddingTop: 5}} onPress={()=>{alert("you clicked me")}}>
        <Text style={{color:"green", fontSize: 14, fontWeight:'bold'}}>TAMBAH BELANJA</Text>
        </TouchableOpacity>

        </View>
        
      </View>
      
      <TouchableOpacity style={{height:150,width:70}}>
      <Text style={styles.bayar}> BAYAR</Text>
      </TouchableOpacity>

    </View>
  );
}

// List components
const headerComponent = () => (
  <View style={styles.container4}>
    <Text style={{  fontSize: 20, fontWeight: 'bold', paddingTop: 5, color: '#000', textAlign: 'left' }}>
          KONSUMEN HARI INI
    </Text>
  </View>
)
const footerComponent = () => (
  <View>

  </View>
)
const emptyComponent = () => (
  <View>

  </View>
)
const separator = () => (
  <View style={{height: 0.8, width: '100%', backgroundColor: '#fff'}} />
)

export default class App extends React.Component {
  render() {
    return (
      
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                
        <View style={styles.container}>
          <View style={styles.container1}>            
          <ImageBackground source={require("../assets/background_1.jpeg")} resizeMode="cover" style={styles.image}>
            <View style={{height: 120}}>
                <TouchableOpacity style={styles.header_small} onPress={()=>{alert("you clicked me")}}>
                  <Text style={styles.text_user}>
                    Hallo, Jajang Nurjaman S.H

                    </Text> 
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
                       SALESMAN - BDG 
                    </Text>
                </TouchableOpacity>

            </View>
          </ImageBackground>

          </View>

          <View style={styles.container2}>
                <ScrollView  style={styles.view2} horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <TouchableOpacity style={styles.button_small} onPress={()=>{alert("you clicked me")}}>
                    <Text style={{ fontSize: 14 }}>
                    Total Konsumen : 
                    </Text> 
                    <Text style={{ color: '#114998', fontSize: 18, fontWeight: 'bold' }}>
                        544 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_small} onPress={()=>{alert("you clicked me")}}>
               
                   <Text style={{ fontSize: 14 }}>
                    Total Utang : 
                    </Text> 
                    <Text style={{ color: '#114998', fontSize: 18, fontWeight: 'bold' }}>
                        545.000,
                    </Text>
                </TouchableOpacity>
              </ScrollView>   

              <ScrollView  style={styles.view2} horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <TouchableOpacity style={styles.button_small} onPress={()=>{alert("you clicked me")}}>
                    <Text style={{ fontSize: 14 }}>
                    Omset Hari Ini : 
                    </Text> 
                    <Text style={{ color: '#114998', fontSize: 18, fontWeight: 'bold' }}>
                        12.500 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_small} onPress={()=>{alert("you clicked me")}}>
               
                   <Text style={{ fontSize: 14 }}>
                    Omset Minggu Ini : 
                    </Text> 
                    <Text style={{ color: '#114998', fontSize: 18, fontWeight: 'bold' }}>
                        1.545.000
                    </Text>
                </TouchableOpacity>
              </ScrollView>   


              <ScrollView  style={styles.view2}  horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="address-card-o" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 12, fontWeight: 'bold', paddingTop: 5 }}>
                    Konsumen Lunas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="area-chart" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 12, fontWeight: 'bold', paddingTop: 5 }}>
                    Omset
                    </Text>
                </TouchableOpacity>   

                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="newspaper-o" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 12, fontWeight: 'bold', paddingTop: 5 }}>
                    Penjualan
                    </Text>
                </TouchableOpacity>
                            
              </ScrollView>

              <ScrollView horizontal={true}>
                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="money" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 12, fontWeight: 'bold', paddingTop: 5 }}>
                    Kasbon
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <Icon.Button size={30} name="automobile" style={styles.icon}>
                    </Icon.Button>
                    <Text style={{  fontSize: 12, fontWeight: 'bold', paddingTop: 5 }}>
                        Keuangan Saya
                        </Text>
                    </TouchableOpacity> 

                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="telegram" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 12, fontWeight: 'bold', paddingTop: 5 }}>
                    Stock dan Pesanan
                    </Text>
                </TouchableOpacity>               
              </ScrollView>
               
            </View>     
        
        </View>
      
        <ScrollView horizontal={false} style={{width: '100%', height: '100%'}}>          
        <View style={styles.container}>

          
          <SafeAreaView style={styles.container_konsumen}>
              <ScrollView horizontal={true} style={{width: 'auto', height: '100%'}}>

                <FlatList
                  style={{flexGrow:1, borderRadius: 20, width: '100%'}}
                  data={state.data}
                  renderItem={({ item }) => <Item item={item}/>}
                  keyExtractor={(item, index) => item.id + index.toString()}
                  horizontal={false}
                  ListHeaderComponent={headerComponent}
                  ListFooterComponent={footerComponent}
                  ListEmptyComponent={emptyComponent}
                  ItemSeparatorComponent={separator}
                />
                
                </ScrollView>
              
            </SafeAreaView>
            
          </View>
          </ScrollView>
          </ScrollView>
    
          
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#436b95',
    marginBottom: 1,
  },
  container2: {
    height: 350, 
    padding: 5,
    backgroundColor:'#fff',
    borderRadius: 20,
    borderColor: '#a4b4c8'
  },

  container3: {
    height: 300, 
    paddingTop: 15,
    width: 400,
    backgroundColor:'#eee',
    borderBottomEndRadius: 20,
    borderColor: '#fff'
  },
  container1: {
    height: 100,
    backgroundColor:'#fff',
    borderRadius: 1,
    borderColor: '#ddd'
  },
  container4: {
    marginTop: 20,
    height: 40,
    width: '100%',
    paddingLeft: 10,
    backgroundColor: '#7590b0',
    borderRadius: 20,
    borderRadius: 0,
    borderColor: '#ddd',
    borderWidth: 1, 
  },
  view1: {
    backgroundColor: '#c9c9c9',
    padding: 10,
    width: 400,
    margin: 10,
    marginLeft: 10,
    shadowColor: '#cfcfd9',
    borderRadius:10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  view2: {
  },
  icon: {
    paddingLeft: 15,
    justifyContent: 'center',
    alignContent: 'center',
    width: 80,
    backgroundColor: '#7590b0',
    height: 'auto',
  },
  icon_small: {
    paddingTop: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 150,
    height: 'auto',
  },
  header_small: {
    borderRadius: 5,
    padding: 5,
    width: 400,
    height: 60,
    margin: 5,
    marginLeft: 5,
  },
  button_small: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 180,
    height: 60,
    margin: 5,
    marginLeft: 5,
    // borderBottomColor: '#303838',
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  button: {
    backgroundColor: '#d1e1e4',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 120,
    height: 95,
    margin: 5,
    marginLeft: 5,
    borderBottomColor: '#436b95',
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
    height: 150,
  },
  text: {
    fontSize: 12,
    color: "#303838",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  text_user: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    textAlign : 'left',
    textTransform: "uppercase",
  },
  text_omset: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  container_konsumen: {
    flex: 1,
    marginLeft:20,
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#fff',
  },
  listItem:{
    margin:5,
    top: 0,
    left: 0,   
    padding:10,
    backgroundColor:"#d1e1e4",
    width:"100%",
    flex:1,
    flexDirection:"row",
    borderRadius:10
  },
  bayar: {
    color:"green",
    borderWidth:2,
    justifyContent: 'center',
    padding: 8,
    alignContent:'center', 
    fontSize: 13, 
    fontWeight:'bold', 
    textAlign: 'center',
    borderRadius:10,
    borderColor: '#eee',
    backgroundColor: '#ddd'
  },
  status_lancar: {
    color:"white",
    borderWidth:2,
    justifyContent: 'center',
    padding: 6,
    width: 90,
    alignContent:'center', 
    fontSize: 13, 
    fontWeight:'bold', 
    borderRadius:10,
    textAlign: 'center',
    borderColor: '#eee',
    backgroundColor: 'green'
  },
  status_terlambat: {
    color:"#000",
    borderWidth:2,
    justifyContent: 'center',
    padding: 6,
    width: 150,
    alignContent:'center', 
    fontSize: 13, 
    fontWeight:'bold', 
    borderRadius:10,
    textAlign: 'center',
    borderColor: '#eee',
    backgroundColor: 'yellow'
  },
  status_macet: {
    color:"#fff",
    borderWidth:2,
    justifyContent: 'center',
    padding: 6,
    width: 80,
    alignContent:'center', 
    fontSize: 13, 
    fontWeight:'bold', 
    borderRadius:10,
    textAlign: 'center',
    borderColor: '#eee',
    backgroundColor: 'red'
  },
  status_lunas: {
    color:"white",
    borderWidth:2,
    justifyContent: 'center',
    padding: 6,
    width: 90,
    alignContent:'center', 
    fontSize: 13, 
    fontWeight:'bold', 
    borderRadius:10,
    textAlign: 'center',
    borderColor: '#eee',
    backgroundColor: '#347183'
  },


});