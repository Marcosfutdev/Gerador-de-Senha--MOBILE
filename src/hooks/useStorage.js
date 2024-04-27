import AsyncStorage from '@react-native-async-storage/async-storage';


const useStorage = () =>{
    // buscar item
    const getItem = async (key) =>{
    try{
     const passwords = await AsyncStorage.getItem(key)
     return JSON.parse(passwords) || [];
    }
    catch(error){
        console.log(error)
        alert("Erro ao buscar o item")
    }
    }
     //savlvar item
    const saveItem = async (key, value) =>{
     try{
      let passwords = await getItem(key);
      passwords.push(value)

      await AsyncStorage.setItem(key, JSON.stringify(passwords))
     }
     catch(error){
        console.log(error)
        alert("Erro ao salvar")
     }
    }
    //remover item
    const removeItem = async (key, item) =>{
    try{
     let passwords = await getItem(key);

     let myPasswords = passwords.filter((password) => {
        return( item !== password)
     })
     await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
     return myPasswords;
    }
    catch(error){
        console.log(error)
        alert("Erro ao remover o item")
    }
    }

    return{
        getItem,
        saveItem,
        removeItem,
    }
}
export default useStorage