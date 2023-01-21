import React from 'react';
import { RefreshControl, SafeAreaView, FlatList, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const state = {
  data:[
      {
          "id": 1,
          "name": "JAJANG NURJAMAN",
          "text": "SALESMAN - BANDUNG",
          "text1": "BANDUNG",
          "text2": "089 1223 3456",
          "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
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
        <Text style={{textAlign: 'left'}}>{item.text1}</Text>
        <Text style={{fontWeight:"bold", textAlign: 'left'}}>{item.text2}</Text>
      </View>
      <TouchableOpacity style={{height:60,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"green"}}>Edit</Text>
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
    <SafeAreaView style={styles.container}>
      <ScrollView
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
          renderItem={({ item }) => <Item item={item.name}/>}
          keyExtractor={item => item.id}
        />
      
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    marginTop:10,
  },
  listItem:{
    margin:15,
    padding:15,
    backgroundColor:"#eee",
    width:"100%",
    flex:1,
    flexDirection:"row",
    borderRadius:20,
    height: 400,
  }
});

export default App;