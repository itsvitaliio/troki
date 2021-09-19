import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Modal, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Info from '../assets/info.png'
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default function Popup(props) {

  const [visible, setVisible] = useState(false)
  return (



            <Dialog
              
              visible={visible}
              onTouchOutside={() => {
                setVisible(false)
              }}
            >
              <DialogContent style = {styles.popup}>
                <Text style = {styles.text}>{props.modalText}</Text>
              </DialogContent>
            </Dialog>
         
  
    
  );
}

const styles = StyleSheet.create({
   
  
    text: {
        fontSize: 18,
        fontWeight : 'bold',
        

    },
  
    popup: {
      flexWrap: 'wrap',
      width: 300,
    },
  });