import React from "react";
import {View, Text, TouchableOpacity, Pressable, StyleSheet, Share, Vibration} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import useStorage from "../../hooks/useStorage";
import uui from 'react-native-uuid'
export function ModalPassword({password, closeModal}){
    const {saveItem} = useStorage();
   const copyPassword = async () =>{
    await Clipboard.setStringAsync(password);
    Vibration.vibrate()
   }
   async function registerPassword(){
    try{
     await saveItem("generationPasswords", password)
    closeModal()
}catch(error){
    console.log(error)
    alert("Erro ao salvar")
    return [];
}
}const onShare = async () =>{
    const result = await Share.share({
        message:`Minha senha é: ${password}`
    })
}
    return(
        <View style={styles.container}>
           <View style={styles.content}>
           <Text style={styles.title}>Senha gerada</Text>
           <Pressable style={styles.pressable} onLongPress={() => {copyPassword()}}>
                <Text style={styles.pressableText}>{password}</Text>
            </Pressable>
            <View style={styles.viewButtons}>
                <TouchableOpacity style={styles.buttons} onPress={closeModal}>
                    <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.buttonSalvar]} onPress={() => { registerPassword()}}>
                    <Text style={styles.textSalvar}>Salvar senha</Text>
                </TouchableOpacity>
            </View>
            
                <TouchableOpacity onPress={() => {onShare()}} style={styles.buttonShare}>
                    <Text style={styles.buttonShareText}>Compartilhar</Text>
                </TouchableOpacity>
        
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
        width:"100%",
        backgroundColor:"rgba(24, 24, 24, 0.6)",
    },
    title:{
    color:"black",
    fontSize:27,
    fontWeight:"bold",
    marginBottom:20,
    marginTop:30,
    },
    content:{
       backgroundColor:"#fff",
       height:235,
       width:"90%",
       borderRadius:8,
       alignItems:"center",
    },
    pressable:{
        backgroundColor:"black",
        width:"70%",
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
    },
    pressableText:{
        fontSize:15,
        color:"#fff"
    },
    viewButtons:{
        flexDirection:"row",
        gap:20,
        marginTop:20,
    },
    buttons:{
        width:"40%", 
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
    },
    textButton:{
        color:"black",
        fontSize:18,
        fontWeight:"bold",
    },
    textSalvar:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
    },
    buttonSalvar:{
        backgroundColor:"#392de9",
    },
    buttonShareText:{
        color:"black"
    },
    buttonShare:{
        backgroundColor:"yellow",
        width:100,
        borderRadius:8,
        alignItems:"center",
        marginTop:15,
        justifyContent:"center",
    }
})