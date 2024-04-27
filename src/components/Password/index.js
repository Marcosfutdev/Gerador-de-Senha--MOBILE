import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Pressable, Image} from 'react-native';
export function Password({listPasswords, item, DeletePassword}){
const [visiblePassword, setVisiblePassword] = useState(true);
    return(
    <Pressable style={styles.viewSalve} onLongPress={() => {DeletePassword(item)}}><Text style={visiblePassword ? styles.passwordSalve : styles.passwordSalveFalse} onLongPress={() => { DeletePassword(item)}}>{item}</Text>
       <TouchableOpacity style={{marginRight:10, marginBottom:10, height:42}}
       onPress={() => {listPasswords.filter((password) =>{
         if(password === item) return
       })
       setVisiblePassword(!visiblePassword)
       }
       }
       >
       <Text><Image source={visiblePassword ? require("../../assets/visibility-off_118484(1).png"): require("../../assets/-visibility_90186.png")} style={{tintColor:"white",}}/></Text>
       </TouchableOpacity>
       </Pressable>
    );
}

const styles = StyleSheet.create({
    viewSalve:{
        backgroundColor:"black",
        borderRadius:8,
        height:45,
        width:340,
        marginBottom:10,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
       
      },
      passwordSalve:{
        color:"white",
        fontWeight:"bold",
        fontSize:18,
        marginLeft:20,
      },
      passwordSalveFalse:{
        color:"white",
        backgroundColor:"white",
        width:200,
        marginLeft:20,
        },
})