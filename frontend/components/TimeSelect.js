import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Modal, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Info from '../assets/info.png'
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Popup from './Popup';

export default function DistanceSelect(props) {
 
  const [visible, setVisible] = useState(false)
  return (

    <View style = {styles.smallContainer}>
            
            <View style = {styles.descriptionContainer}>
             <TouchableOpacity ><Image source = {Info} style = {styles.icon}></Image></TouchableOpacity>
              <Text style = {styles.subtitle}>{props.text}</Text>
              
            </View>
            
                <Picker 
                    style = {styles.select}
                   
                >
                    <Picker.Item label="12 am" value={0} />
                    <Picker.Item label="1 am" value={1} />
                    <Picker.Item label="2 am" value={2} />
                    <Picker.Item label="3 am" value={3} />
                    <Picker.Item label="4 am" value={4} />
                    <Picker.Item label="5 am" value={5} />
                    <Picker.Item label="6 am" value={6} />
                    <Picker.Item label="7 am" value={7} />
                    <Picker.Item label="8 am" value={8} />
                    <Picker.Item label="9 am" value={9} />
                    <Picker.Item label="10 am" value={10} />
                    <Picker.Item label="11 am" value={11} />
                    <Picker.Item label="12 pm" value={12} />
                    <Picker.Item label="1 pm" value={13} />
                    <Picker.Item label="2 pm" value={14} />
                    <Picker.Item label="3 pm" value={15} />
                    <Picker.Item label="4 pm" value={16} />
                    <Picker.Item label="5 pm" value={17} />
                    <Picker.Item label="6 pm" value={18} />
                    <Picker.Item label="7 pm" value={19} />
                    <Picker.Item label="8 pm" value={20} />
                    <Picker.Item label="9 pm" value={21} />
                    <Picker.Item label="10 pm" value={22} />
                    <Picker.Item label="11 pm" value={22} />
                    

                </Picker>
                
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
    
  );
}

const styles = StyleSheet.create({
    icon: {
      height: 20,
      width: 20,
      marginRight: 10,
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
        width: '95%',
        alignItems: 'center',

    },
    descriptionContainer: {
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
      
      


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
        borderColor: '#C4C4C4',
  
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
        backgroundColor: "white",
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
      fontSize: 18,
      marginRight: 10,
      fontWeight: 'bold',
      color: 'black',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-around',
      width: 275,
      flexDirection: 'row',
      marginBottom: 20,
    },
    popup: {
      flexWrap: 'wrap',
      width: 300,
      position: 'fixed'
    },
  });