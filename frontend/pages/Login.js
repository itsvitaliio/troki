import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, Button, Modal, ScrollView, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import DashboardRecruiter from './DashboardRecruiter';
import DashboardWorker from './DashboardWorker';
import Troki from '../assets/troki.png'
import axios from 'axios';
export default function Login({navigation}) {
    
    const [user, setUser] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const workHandler = () => {
        navigation.navigate('SignupWorker')
    }
    const hireHandler = () => {
        navigation.navigate('SignupRecruiter')
    }
    const dashHandler = () => {
        (user === 'Worker' ? navigation.navigate('DashboardWorker') : navigation.navigate('DashboardRecruiter'))
    }

    // You need to call this function on button click
    const login = () =>{
      console.log("You're trying to log in")
      
      axios.post('https://htn-backend.herokuapp.com/login', {
        username: username,
        password: password
      })
      .then((res)=>{
        if(res.status===200){
          // authenticate and move to dashboard
        }
      })
      .catch((err)=>{
        console.log("Nope. Not working.")
        console.log(err);
      })
    }

    return (
        <ScrollView>
        <View style={styles.container}>
        <View style = {styles.bkgrnd}></View>

        <TouchableOpacity >
            <Image source = {Troki} style = {styles.image}></Image>
        </TouchableOpacity>

            <View style = {styles.fieldWrap}>
                <View style = {styles.inputWrap}>
                    <TextInput
                      onChangeText={text => {setUsername(text); setUser(text)}}
                      value = {username}
                      style = {styles.input}
                      placeholder = "Username"
                      placeholderTextColor="black"></TextInput>
                    <TextInput
                      secureTextEntry = {true}
                      style = {styles.input}
                      placeholder = "Password"
                      placeholderTextColor="black"></TextInput>
                </View>
            

                <TouchableOpacity onPress = {() => dashHandler()}>
                <View style = {styles.btn}>
                    <Text style = {styles.white}>Login</Text>
                </View>
                
                </TouchableOpacity>

            </View>

        <Text style = {styles.signUp}>
            Sign up today!
        </Text>

        <Text style = {styles.black}>
            I am looking...
        </Text>

        <View style = {styles.row}>
            <TouchableOpacity onPress = {() => workHandler()}>
            <View style = {styles.btn2}>
                <Text style = {styles.white}>To work</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => hireHandler()}>
            <View style = {styles.btn2}>
                <Text style = {styles.white}>To hire</Text>
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
    
  },
  smallContainer: {

  },
  image: {
    height: 120,
    width: 200,
    marginTop: 10,
    marginBottom: 10,
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
    height: 375,
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
    marginTop: 45,
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
    height: 150,  
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
