import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Modal, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Info from '../assets/info.png'
import Delete from "../assets/delete.png"
import Add from "../assets/add.png"
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Popup from './Popup';

export default function DistanceSelect(props) {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('');
  const [services, setServices] = useState([]);

  const handleAdd = ()  => {
    setServices([...services, value])
    console.log(services)
    console.log('value ' + value)
    
  }
  const handleDelete = (index) => {
    let temp = [...services];
    temp.splice(index, 1);
    setServices(temp);
  }
  return (
    <View style = {{width: '95%'}}>
    <View style = {styles.smallContainer}>
            

            <View style = {styles.descriptionContainer}>
             <TouchableOpacity onPress = {() =>setVisible(true)}><Image source = {Info} style = {styles.icon}></Image></TouchableOpacity>
              <Text style = {styles.subtitle}>{props.text}</Text>
              
            </View>
            
            <View style = {styles.select}>

                <Picker 
                    style = {styles.dropdown}
                    onValueChange = {(itemValue) => {setValue(itemValue)} }
                >
                    <Picker.Item label="None" value="None" />
                    <Picker.Item label="Snow removal" value="Snow removal" />
                    <Picker.Item label="Lawn mow" value="Lawn mow" />
                    <Picker.Item label="Leaf raking" value="Leaf raking" />
                    <Picker.Item label="Weed removal" value="Weed removal"/>

                </Picker>
                <TouchableOpacity onPress = {() => handleAdd()}><Image source={Add} style = {styles.add}></Image></TouchableOpacity>
    
            </View>

           
            <Dialog
              
              visible={visible}
              onTouchOutside={() => {
                setVisible(false)
              }}
            >
              <DialogContent style = {styles.popup}>
                <Text style = {styles.subtitle}>{props.modalText}</Text>
              </DialogContent>
            </Dialog>



    </View>
            
            <View style = {styles.serviceContainer}>
                {
                  services.map((item, index) => {
                    return (
                          <View key = {index} style = {styles.serviceItem}>
                              <Text  style = {styles.black}>{item}</Text>
                              <TouchableOpacity onPress = {() => handleDelete(index)}>

                              <Image source = {Delete} style = {styles.icon}></Image>

                               </TouchableOpacity> 
                          </View>
                          
                      
                      
                    )
                  })
                }
                </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
    icon: {
      height: 20,
      width: 20,
      marginRight: 10,
    },
    add: {
      height: 30,
      width :30,
    },
    container: {
      display: 'flex',
      backgroundColor: 'white',
      alignItems: 'center',
    
    
    },
    smallContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',

    },
    descriptionContainer: {
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
    },
    serviceContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',   
      flexWrap: 'wrap',
    },
    serviceItem: {
      height: 40,
      backgroundColor: '#D7CCC8',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 10,
      marginRight : 5,
      marginBottom: 5,
      marginTop: 5,
    },
  
    btn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      height: 50,
      backgroundColor: '#F9A543',
      borderRadius: 25,
      marginTop:20,
  
    },
    btn2: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 125,
      height: 40,
      backgroundColor: '#F9A543',
      borderRadius: 25,
      marginTop:20,
  
    },
    bkgrnd: {
      position: 'absolute',
      width: '100%',
      height: 400,
      backgroundColor: '#F9A543',
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      display: 'flex',
      alignItems: 'center',
    },
    fieldWrap: {
      height: 500,
      width: '80%',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      marginTop: 40,
      shadowColor: '#470000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.5,
      borderRadius: 10,
      marginBottom: 20,
    },
    appName: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 45,
      marginBottom: 10,
  
    },
    subtitle: {
        fontSize: 18,
        fontWeight : 'bold',

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
      marginTop: 30,

  
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 50,
        width: '50%',
        borderRadius: 10,
        fontSize: 18,
        color: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'red',
  
    },
    select: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 50,
        width: '50%',
        borderRadius: 10,
        fontSize: 18,
        color: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'red',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    selectText: {
        color: "#C4C4C4",
        fontSize: 18,
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
      fontSize: 15,
      marginRight: 10,
      marginLeft: 10,
      color: 'black',
      fontWeight: 'bold',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-around',
      width: 275,
      flexDirection: 'row',
      marginBottom: 20,
    },
    dropdown: {
      borderColor: 'white',
      backgroundColor: 'white',
      fontSize: 18,
      width: '80%',
    },
    popup: {

      flexWrap: 'wrap',
      width: 300,
    },
  });