import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

                <TouchableOpacity style={styles.header_small} onPress={()=>{alert("you clicked me")}}>
               
                   <Text style={{ fontSize: 14 }}>
                    Target Hari Ini : 
                    </Text> 
                    <Text style={{ color: '#114998', fontSize: 18, fontWeight: 'bold' }}>
                        545.000, -IDR 
                    </Text>
                </TouchableOpacity>


                  {/* <Text style={styles.text_user}>
                    Hallo, Jajang Nurjaman S.H
                  </Text>
                  <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
                       </Text> */}
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
                    Total Omset Minggu Ini : 
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
                <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                    Konsumen
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="chrome" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                    Konsumen Lunas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="area-chart" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                    Omset
                    </Text>
                </TouchableOpacity>               
              </ScrollView>

              <ScrollView horizontal={true}>
                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="money" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                    Kasbon
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="newspaper-o" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                    Penjualan
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Icon.Button size={30} name="diamond" style={styles.icon}>
                </Icon.Button>
                <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                    Stock Barang
                    </Text>
                </TouchableOpacity>               
              </ScrollView>
               <ScrollView horizontal={true}>
                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <Icon.Button size={30} name="telegram" style={styles.icon}>
                    </Icon.Button>
                    <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                        Buat Pesanan
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <Icon.Button size={30} name="automobile" style={styles.icon}>
                    </Icon.Button>
                    <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                        Keuangan Saya
                        </Text>
                    </TouchableOpacity> 
                </ScrollView>
            </View>     
        
        </View>
                       
        
        <View style={styles.container}>
          {/* <View style={styles.container4}>
            <Text style={{  fontSize: 20, fontWeight: 'bold', paddingTop: 5, color: '#fff', textAlign: 'left' }}>
                        KONFEKSI
            </Text>
          </View> */}

            <View style={styles.container3}>
            {/* <ScrollView  style={styles.view2} horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <TouchableOpacity style={styles.button_small} onPress={()=>{alert("you clicked me")}}>
                    <Text style={{ fontSize: 14 }}>
                    Total Order : 
                    </Text> 
                    <Text style={{ color: '#114998', fontSize: 18, fontWeight: 'bold' }}>
                        544 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_small} onPress={()=>{alert("you clicked me")}}>
               
                   <Text style={{ fontSize: 14 }}>
                    Target Hari Ini : 
                    </Text> 
                    <Text style={{ color: '#114998', fontSize: 18, fontWeight: 'bold' }}>
                        545.000, -IDR 
                    </Text>
                </TouchableOpacity>

              </ScrollView> */}
                 
              {/* <ScrollView horizontal={true}>
                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <Icon.Button size={30} name="check-square-o" style={styles.icon}>
                    </Icon.Button>
                    <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                        Buat Order
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <Icon.Button size={30} name="list-ol" style={styles.icon}>
                    </Icon.Button>
                        <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                            Target Harian
                        </Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <Icon.Button size={30} name="bar-chart" style={styles.icon}>
                    </Icon.Button>
                        <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                            Laporan
                        </Text>
                    </TouchableOpacity>

                </ScrollView> */}

                {/* <ScrollView horizontal={true}>
                    
                  <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <Icon.Button size={30} name="bank" style={styles.icon}>
                    </Icon.Button>
                        <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                            Gudang
                        </Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <Icon.Button size={30} name="diamond" style={styles.icon}>
                    </Icon.Button>
                        <Text style={{  fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
                            Stock Barang
                        </Text>
                    </TouchableOpacity> 

                </ScrollView> */}
            </View>
          </View>

          
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
    height: 450, 
    padding: 5,
    backgroundColor:'#fff',
    borderRadius: 20,
    borderColor: '#ddd'
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
    backgroundColor:'#eee',
    borderRadius: 1,
    borderColor: '#ddd'
  },
  container4: {
    height: 40,
    width: 400,
    paddingLeft: 10,
    backgroundColor: '#436b95',
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
    backgroundColor: '#859a9b',
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
    backgroundColor: '#fff',
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
});