import React from 'react';
import { RefreshControl, 
         SafeAreaView,
         FlatList, ImageBackground, 
         StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const state = {
  data:[
      {
          "id": 1,
          "name": "Kimono Green",
          "text": "Kimono blue Bahan Halus dan Lembut",
          "text2": "Rp. 75.000 /PCS",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/6.jpg"
      },
      {
        "id": 2,
        "name": "Kimono Blue",
        "text": "Kimono blue Bahan Tebal dan tidak mudah kusut",
        "text2": "Rp. 80.000 /PCS",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/76.jpg"
      },
      {
        "id": 3,
        "name": "Kimono Green",
        "text": "Kimono blue Bahan Halus dan Lembut",
        "text2": "Rp. 75.000 /PCS",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/4.jpg"
  },
    {
      "id": 4,
      "name": "Kimono Blue 1",
      "text": "Kimono blue Bahan Tebal dan tidak mudah kusut",
      "text2": "Rp. 80.000 /PCS",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/3.jpg"
    },  
    {
      "id": 5,
      "name": "Kimono Blue 2",
      "text": "Kimono blue Bahan Tebal dan tidak mudah kusut",
      "text2": "Rp. 80.000 /PCS",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/2.jpg"
    },  
  ]
}

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width:80, height:80,borderRadius:10, padding: 5}} />
      <View style={{paddingLeft: 8, flex:1}}>
        <Text style={{fontWeight:"bold", fontSize:18, textAlign: 'left'}}>{item.name}</Text>
        <Text style={{textAlign: 'left'}}>{item.text}</Text>
        <Text style={{fontWeight:"bold", textAlign: 'left'}}>{item.text2}</Text>
      </View>
      <TouchableOpacity style={{height:60,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"green"}}>Lihat</Text>
      </TouchableOpacity>
    </View>
  );
}

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView horizontal={false} style={{width: '100%', height: '100%'}}>     
    
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} style={{width: '100%', height: '100%'}}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <FlatList
          style={{flex:1}}
          data={state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.id}
        />
      
      </ScrollView>
    </SafeAreaView>
    </ScrollView>
  );
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
    flexDirection:"row",
    borderRadius:5
  }
});

export default App;