import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Modal, Vibration,} from 'react-native';
import Slider from '@react-native-community/slider'
import { ModalPassword } from "../../components/ModalPassword";
let charset = "abcdefghijklmnopqrstuvwxysABCDEFGHIJKLMNOPQSTUVWXYZ0123456789";
export function Home(){
  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);

  function creatingPassword(){
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++ ){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password);
    Vibration.vibrate();
    setVisibleModal(true);
  }
  return(
    <View style={styles.container}>
      <View style={styles.content}>
      <Image source={require("../../assets/logo.png")}
       style={styles.Img}
      />
      <Text style={styles.title}> {size} Caracteres</Text>
      <View style={styles.mainSlider}>
        <Slider maximumTrackTintColor="red" 
        minimumTrackTintColor="black"
        minimumValue={6}
        maximumValue={20}
        value={size}
        onValueChange={(value) => { setSize(value.toFixed(0))}}
        />
      </View>
        <TouchableOpacity style={styles.button} onPress={() =>{
          creatingPassword()
        }}>
          <Text style={styles.buttonText}>Gerar senha</Text>
        </TouchableOpacity> 
        <Modal visible={visibleModal} transparent={true} animationType="fade">
          <ModalPassword password={passwordValue} closeModal={() => {setVisibleModal(false)}} />
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    height:"100%",
    backgroundColor:"#f6f6f6"
  },
  Img:{
    marginBottom:60,
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
  },
  content:{
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    height:"auto",
  },
  mainSlider:{
    marginTop:30,
    backgroundColor:"white",
    padding:12,
    width:"80%",
    borderRadius:8,
  },
  button:{
    backgroundColor:"#392de9",
    padding:14,
    width:"80%",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginTop:30
  },
  buttonText:{
    color:"white",
  }
})
