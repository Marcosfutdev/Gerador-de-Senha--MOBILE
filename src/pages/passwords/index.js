import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Pressable} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {useIsFocused} from '@react-navigation/native';
import useStorage from '../../hooks/useStorage';
import uuid from 'react-native-uuid'
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import { endEvent } from 'react-native/Libraries/Performance/Systrace';
import { Password } from '../../components/Password';
export function Passwords(){
  const {getItem, removeItem} = useStorage();
  const [listPasswords, setListPasswords] = useState([])
  const focused = useIsFocused();

  const DeletePassword = async (item) =>{
   const passwords = await removeItem("generationPasswords", item);
   setListPasswords(passwords)
 }
  useEffect(() => {
    const fetchPasswords = async () =>{
    const passwords = await getItem("generationPasswords");
    setListPasswords(passwords)
    }
    fetchPasswords();
  }, [focused])

    return(
    <SafeAreaView style={{flex:1}} >
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>
       <View style={styles.mainSalves}>
     <FlatList
       data={listPasswords}
       keyExtractor={(item) => String(item)}
       renderItem={({item}) => <Password item={item} listPasswords={listPasswords} DeletePassword={DeletePassword}/>
       }/>
       </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title:{
        color:"white",
        fontSize:22,
        fontWeight:"bold",
        marginTop:80,
        marginLeft:20,
    },
    viewTitle:{
        backgroundColor:"#392de9",
        height:120,
        width:"100%",
    },
    
    mainSalves:{
      width:"100%",
      height:"auto",
      alignItems:"center",
      marginTop:15,
    }
})