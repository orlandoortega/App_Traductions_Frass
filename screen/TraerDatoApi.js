import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    justifyContent:'center',
    alignItems:'center',
  },
  texto:{
    fontSize:20,
    color:'red',
  }
})

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  const apiFecht = () => {
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => {
          setUsers(data)
          setLoading(false)
        })
    },[])
  }

  apiFecht()

  if(loading){
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>
          Cargando...
        </Text>
      </View>
    );
  }
  return(
    <View style={styles.container}>
      <FlatList
        style={{width:300}}
        data={users}
        renderItem={({ item }) => 
        <View style={{alignItems:'stretch'}}>
          <Text style={{color:'blue'}}>nombre: </Text>
          <Text>{item.name}</Text>
          <Text>{item.username}</Text>
          <Text>{item.email}</Text>
          <Text>{item.address.city}</Text>
        </View>
      }
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}

export default App;