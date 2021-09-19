import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Scrollview, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Login from './pages/Login'
import Navigator from './routes/homeStack'

export default function App() {

  return (

      <Navigator/>
  
  );
}

