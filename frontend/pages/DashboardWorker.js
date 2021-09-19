import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Modal, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Info from '../assets/info.png'
import DashboardField from '../components/DashboardField'
import DistanceSelect from '../components/DistanceSelect';
import Services from '../components/Services'
import SwitchBtn from '../components/SwitchBtn'
import TimeSelect from '../components/TimeSelect'
import Refresh from '../assets/refresh.png'

export default function DashboardWorker() {

  const [show, setShow] = useState(false);
  const [color, setColor] = useState('blue');
  return (

    <ScrollView>
      <View style={styles.container}>


        <View style = {styles.bkgrnd}></View>

        <View>

        </View> 
        
        <View style = {styles.fieldWrap}>
        <Text style = {styles.title}>
                Job filters
            </Text>
          <DashboardField text = {'Nickname: '} modalText = {"Your nickname will be shown to recruiters when you accept a job request."}></DashboardField>
          <DashboardField text = {'Postal Code: '} modalText = {"Your postal code is used to calculate distance when nearby jobs."}></DashboardField>
          <DistanceSelect text = {'Max travel: '} modalText = {"Select the maximum distance you are willing to travel. The employer is not responsible for any costs during the commute."}></DistanceSelect>
          <Services text = {'Services: '} modalText = {"Choose the services you are willing to provide and press the add button. "}></Services>

        
        
        
        </View>

        <View style = {styles.fieldWrap}>
            <Text style = {styles.title}>
                Search 
            </Text>
            <SwitchBtn text = {'Status: '} modalText = {""}></SwitchBtn>
            <TimeSelect text = {"Auto logoff: "} modalText = {""}></TimeSelect>

            <View style = {styles.waitContainer}>
              <Text style = {styles.smallText}>Please wait while we find you a job. To accept a job, click on the request. </Text>
              <TouchableOpacity onPress = {() => setShow(true)}><Image source = {Refresh} style = {styles.icon}></Image></TouchableOpacity>
            </View>

            <View style = {styles.recruitBox}>
              <View style = {styles.labelBar}>
                <Text style = {styles.black}>Postal code</Text>
                <Text style = {styles.black}>Service</Text>

              </View>

              {
                show && color==='blue' && 
                
                <TouchableOpacity onPress={() => setColor('green')}>
                  
                    <View style = {styles.itemBar}>


                        <Text style = {styles.itemText}>A2A2A1</Text>
                        <Text style = {styles.itemText}>Snow removal</Text>
                    </View>
                 </TouchableOpacity>
              
              }
                            {
                show && color==='green' && 
                
                <TouchableOpacity>
                  
                    <View style = {styles.itemBarGreen}>


                        <Text style = {styles.itemText}>A2A2A1</Text>
                        <Text style = {styles.itemText}>Snow removal</Text>
                    </View>
                 </TouchableOpacity>
              
              }
              </View>
        </View> 


        <View style = {styles.fieldWrap}>

        <Text style = {styles.title}>
            Job details
        </Text>
        <View style = {styles.waitContainer}>
        <Text style = {styles.smallText}>
          Detailed information about workers will appear once they accept your request
        </Text>
        </View>


        <View style = {styles.recruitBox}>

          <View style = {styles.msg}>
            {
              color==='green' && 
              <Text style = {styles.itemText}>Hi! Thanks for accepting my request. I'm Mario and I need a snow removal job. My phone number is 416-234-2352. I live on 236 Unamed Street, Toronto ON, A2A2A1. </Text>
            }
           
          </View>


        </View>




</View>




      
      </View>
    </ScrollView>
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
      backgroundColor: '#FF8A65',
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
    waitContainer: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      width: '95%',
      alignItems: 'center',
  },

    descriptionContainer: {
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',

    },
    recruitBox: {
      borderRadius: 10,
      borderStyle: 'solid',
      borderColor: 'red',
      borderWidth: 2,
      width: '95%',
      height: 250,
      marginTop: 10,


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
      height: 1300,
      backgroundColor: '#D84315',
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
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      borderRadius: 10,
      marginBottom: 20,
    },
    title: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
  
    },
    subtitle: {
        fontSize: 18,
        fontWeight : 'bold',

    },
  
    smallText: {

      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: 10,
      align: 'center',
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
    labelBar: {
      backgroundColor: '#F4511E',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemBar: {
      backgroundColor: '#D7CCC8',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      height: 40,
      alignItems: 'center',
    },
    itemBarGreen: {
      backgroundColor: '#23E823',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      height: 40,
      alignItems: 'center',
    },
    itemText: {
      fontSize: 20,
      color: 'black',
    },
    msg: {
      width: '95%',
  
    },
  });