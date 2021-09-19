import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Troki from '../assets/troki.png'
import axios from 'axios'

export default function SignupRecruiter({navigation}) {
    const workHandler = () => {
        navigation.navigate('Login')
    }
    const dashHandle = () => {
      navigation.navigate('DashboardRecruiter');
    }
    
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [address, setAddress] = useState('');

    // You need to call this function on button click
    const register = () =>{
      console.log("You're trying to log in " + user + " " + pass)
      axios.post('https://troki.herokuapp.com/register', {
        username: user,
        password: pass,
        address: address,
        // lets test it now ;)
        // if you'd like to, I can
        type: "employer", //share mongodb? 
      })
      .then((res)=>{
        if(res.status===200){
          // Trigger authentication here pls
          // In other words go to dashboard ;)
          console.log(res.data);
          console.log("You are logged in ")
          dashHandle();
          // 👍
          // try now, to register a worker
        } 
      })
      .catch((err)=>{
        console.log(err.response.data);
      })
    }

  return (

    
    <ScrollView>
    <View style={styles.container}>

        <View style = {styles.bkgrnd}></View>

        <Image source = {Troki} style = {styles.image} />
        <View>
            <Text style = {styles.appName}>
                Get started today!
            </Text>
        </View> 
       
        <View style = {styles.fieldWrap}>
          <View style = {styles.inputWrap}>
            <TextInput onChangeText = {text => setUser(text)}style = {styles.input} placeholder = "Username" ></TextInput>
            <TextInput style = {styles.input} placeholder = "Email"></TextInput>
            <TextInput onChangeText = {text => setPass(text)} secureTextEntry = {true} style = {styles.input} placeholder = "Password" ></TextInput>
            <TextInput secureTextEntry = {true} style = {styles.input} placeholder = "Confirm Password" ></TextInput>
            <TextInput onChangeText = {text => setAddress(text)} style = {styles.input} placeholder = "Address" ></TextInput>
             
          </View>
          {/** just make sure you get username, password and address, ok? */}
          {/** Can we just ctrl c ctrl v yeah yeah*/}
          
          <TouchableOpacity onPress = {() => register()}>
          <View style = {styles.btn}>
            <Text style = {styles.white}>Sign up</Text>
          </View>
        
          </TouchableOpacity>

        </View>



      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FF8A65',
    alignItems: 'center',
    height: 1000,
    
  },
  smallContainer: {

  },
  image: {
    height: 120,
    width: 200,
    marginTop: 10,

  },

  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    backgroundColor: '#F4511E',
    borderRadius: 25,
    marginTop:20,

  },
  btn2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 125,
    height: 40,
    backgroundColor: '#F4511E',
    borderRadius: 25,
    marginTop:20,

  },
  bkgrnd: {
    position: 'absolute',
    width: '100%',
    height: 400,
    backgroundColor: '#D84315',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    display: 'flex',
    alignItems: 'center',
  },
  fieldWrap: {
    height: 500,
    width: '70%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',

    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 1,
    borderRadius: 10,
  },
  appName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,

  },

  smallText: {
 
    color: 'white',
  },
  link: {
    color: '#6981FF',

  },
  inputWrap:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,  
    width: '100%',
    marginTop: 40,

  },
  input: {
      paddingLeft: 5,
      paddingRight: 5,
      height: 50,
      width: '85%',
      borderRadius: 10,
      fontSize: 18,
      color: 'black',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'red',

  },
  white: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signUp: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
    padding: 5,

  },
  black: {
    fontSize: 20,

    color: 'black',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 275,
    flexDirection: 'row',
    marginBottom: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});