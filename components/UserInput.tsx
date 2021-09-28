import React, { FC, useState } from "react"; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight } from "react-native"; 

interface UserData {
    name: string, 
    email: string, 
    password: string,
} 


interface Props {
    login: UserData
}


const UserInput: React.FC<Props> = () => {
    

    const [isName, setName] = useState<string>("none"); 

    
    return(
            <View style={styles.inputTextContainer}>
                    <TextInput  onChangeText={(value) => setName(value)} placeholder="Name" selectionColor='#D3D3D3' placeholderTextColor="#D3D3D3" style={styles.inputTextName} />
                    <TextInput placeholder="Email" selectionColor='#D3D3D3' placeholderTextColor="#D3D3D3" style={styles.inputTextEmail}/>
                    <TextInput placeholder="Password" selectionColor='#D3D3D3' placeholderTextColor="#D3D3D3" style={styles.inputTextPassword}/>
            </View>
    )
}


const styles = StyleSheet.create({
    inputTextContainer: {
        backgroundColor: '#301934',
        marginHorizontal: 20, 
        marginVertical: 50, 
        borderRadius: 13,
        paddingVertical: 100, 
        paddingHorizontal: 20,
        flexDirection: 'column', 
        justifyContent: 'center', 
        textAlign: 'center'
        
    }, 

    inputTextName: {
        top: 50, 
        left: 30,
        position: 'absolute', 
        color: '#D3D3D3',
        justifyContent: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3', 
        paddingRight: 254, 
        
    }, 
    
    inputTextEmail: {
        top: 100, 
        left: 30,
        position: 'absolute', 
        color: '#D3D3D3',
        justifyContent: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3', 
        paddingRight: 258, 
        
    }, 

    inputTextPassword: {
        top: 150, 
        left: 30,
        position: 'absolute', 
        color: '#D3D3D3',
        justifyContent: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3', 
        paddingRight: 230,
    }
    
    
    
  });
  


export default UserInput;