import {createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import { Avatar, Title, Drawer } from "react-native-paper"
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import React,{useState} from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen"
import { Switch } from "react-native-gesture-handler"
import { View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Drawers = createDrawerNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  userInfoSection: {
    paddingLeft: 20,
    marginTop: hp(1)
  },
  title: {
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 20
  },
  caption: {
    fontSize: 14,
    lineHeight: 14
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3
  },
  drawerSection: {
    marginTop: 15
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Avatar.Image
              source={require('../component/images/niño.png')/* user.profile_image ? { uri: user.profile_image } : {} */}
              size={wp(16)}
              style={{ backgroundColor: 'blue' }}
            />
            <View
              style={{
                flexDirection: "column",
                maxWidth: wp(40),
                marginLeft: wp(3)
              }}
            >
              <Title style={styles.title}>
                {/* {user.firstname} {user.lastname} */}
                chato
              </Title>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection} {...props}>
          {[
            { label: "Perfil"/* , icon: iconProfile  */},
            { label: "Viajes"/* , icon: iconTravels */, name: "Travel" },
            { label: "Historial"/* , icon: iconHistory */, name: "History" },
            { label: "Mis calificaciones"/* , icon: iconStar */ },
            { label: "Estado de cuenta"/* , icon: iconOrder */ },
            { label: "Agenda"/* , icon: iconCalendar */ }
          ].map((value, index) => (
            <DrawerItem
              key={index.toString()}
              label={value.label}
              /* icon={({ focused, size }) =>
                drawerIconConfig(value.icon, { focused, size })
              } */
              style={{ marginVertical: 0 }}
              labelStyle={{ fontSize: 12 }}
              onPress={() => {
                value.name && props.navigation.navigate(value.name);
              }}
            />
          ))}

          <View style={{ margin: wp(7), marginTop: wp(5) }}>
            <Button title='Cerrar sesión'/>
          </View>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

export default () => {
    return(
        <Drawers.Navigator
            initialRouteName = 'History'
            drawerPosition = 'right'
            drawerContent={props => <DrawerContent {...props} />}
            overlayColor = 'transparent'
            drawerStyle = {{ width: "60%", height: "65%", borderBottomLeftRadius: 8, paddingStart:25 }}
            >
            <Drawers.Screen
                name = 'Travel'
                component = {Travels}
            />
            <Drawers.Screen
                name = 'History'
                component = {Historys} 
            />
        </Drawers.Navigator>
    );
}

const Card = ({data, ...props}) => {
  const {orderId, origin, destination, paymentMethod, date, price} = data;
  return(
    <View style={{paddingStart:50}}>
      <View style={{paddingTop:15}}>
        <View style={{ width:wp(80), right:hp(4), paddingRight:100}}>
          <View style={{flex:1,backgroundColor:'#ccc', borderRadius:20, width:wp(80), paddingLeft:30}}>
            <View style={{paddingTop:12,flexDirection:'row'}}>
              <Icon name="xing-square" style={{ width:30}} size={15} color='black'/>
              <Text style={{}}> {orderId} </Text>
              <Text style={{paddingStart: 90, fontWeight:'bold'}}> ${price} </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Icon name="steam" style={{ width:30}} size={15} color='black'/>
              <Text style={{paddingTop:3}}> {origin} </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Icon name="paw" style={{ width:30}} size={15} color='black'/>
              <Text style={{paddingTop:3}}> {destination} </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Icon name="money" style={{ width:30}} size={15} color='black'/>
              <Text style={{paddingTop:3}}> {paymentMethod} </Text>
            </View>
            <View style={{paddingTop:3, flexDirection:'row'}}>
              <Icon name="times" style={{ width:30}} size={15} color='black'/>
              <Text style={{paddingBottom:12}}> {date} </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    
  );
}

const Travel = () => {
  const travel = {
    orderId: "00063485",
    origin: "Rivadavia 1258, CABA",
    destination: "Yrygoyen, CABA",
    paymentMethod: "Efectivo",
    date: "11/11/2020,17:45h",
    price: 482
  };
  const travel1 = {
    orderId: "10392655",
    origin: "Rivadavia 0014, CAMION",
    destination: "Yrygoyen, CABA",
    paymentMethod: "Tansferencia",
    date: "11/11/2021,20:45h",
    price: 1050
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const disponibles = 6;
  const activos = 0;
  const navigation = useNavigation()  
  return(
        <ScrollView>
          <View style={{flex:1}}>
            <View style={{flexDirection:'row'}}>
              <View style={{padding:20}}>
                <View style={{paddingLeft:25}}>
                  <Text style={{fontSize:15, paddingBottom:5}}>Disponibles {<Text style={{color:'orange'}}>{disponibles}</Text>}</Text>
                  <Text style={{fontSize:15}}>Activos {<Text style={{color:'black'}}>{activos}</Text>}</Text>
                </View>
              </View>
              <View style={{padding:20}}>
                <View style={{paddingLeft:55}}>
                  <Switch 
                    trackColor={{ false: 'orange', true: "yellow" }}
                    thumbColor={{color:'black'}}
                    onValueChange={toggleSwitch}
                    value={isEnabled} 
                  />
                  <Text>{isEnabled ? "Activo" : "Inactivo"}</Text>
                </View>
              </View>
            </View>
            <View>
              <Card data={travel}/>
              <Card data={travel1}/>
            </View>
          </View>
        </ScrollView>
    );
}

const drawerHeaderOptions = ({ ...props }) => {
    const navigation = useNavigation()
    return () => ({
      headerRight:() => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{alignItems:'center', justifyContent:'center', paddingEnd:20}}>
            <Icon name="list" style={{alignSelf:'center', width:30}} size={20} color='black'/>
          </View>
        </TouchableOpacity>
      )
  });
}

const Travels = ({ props}) => {
    return (
        <Stack.Navigator screenOptions={drawerHeaderOptions(props)}>
          <Stack.Screen
            name="Travels"
            component={Travel}
            options={{
              headerStyle: {backgroundColor: 'orange'},
              title: 'Viajes',
              headerTintColor: '#eee',
            }}
            
          />
        </Stack.Navigator>
      );
}

const Historys = ({ props}) => {
  return (
      <Stack.Navigator screenOptions={drawerHeaderOptions(props)}>
        <Stack.Screen
          name="History"
          component={History}
          options={{
            headerStyle: {backgroundColor: 'orange'},
            title: 'Historial',
            headerTintColor: '#eee',
          }}
          
        />
      </Stack.Navigator>
    );
}

const History = () => {
  const navigation = useNavigation()
  return(
        <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
            <Text onPress={() => navigation.navigate('Travels')}>
                Hola soy primer Screen
            </Text>
        </View>
    );
}