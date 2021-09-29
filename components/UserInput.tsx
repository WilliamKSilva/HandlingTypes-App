import React, { FC, useContext, useState } from "react"; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, Button, Pressable } from "react-native"; 
import { InputContext } from "../Context/InputText";


const UserInput: React.FC = () => {
    const {name, setName} = useContext(InputContext)

    console.log(name)

    return(
            <View style={styles.inputTextContainer}>
                    <TextInput  onChangeText={(text) => setName(text)} placeholder="Name" selectionColor='#D3D3D3' placeholderTextColor="#D3D3D3" style={styles.inputTextName} />
                    <TextInput  placeholder="Email" selectionColor='#D3D3D3' placeholderTextColor="#D3D3D3" style={styles.inputTextEmail}/>
                    <TextInput  placeholder="Password" selectionColor='#D3D3D3' placeholderTextColor="#D3D3D3" style={styles.inputTextPassword}/>
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
        top: 30, 
        left: 30,
        position: 'absolute', 
        color: '#D3D3D3',
        justifyContent: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3', 
        paddingRight: 254, 
        
    }, 
    
    inputTextEmail: {
        top: 70, 
        left: 30,
        position: 'absolute', 
        color: '#D3D3D3',
        justifyContent: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3', 
        paddingRight: 258, 
        
    }, 

    inputTextPassword: {
        top: 110, 
        left: 30,
        position: 'absolute', 
        color: '#D3D3D3',
        justifyContent: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3', 
        paddingRight: 230,
    },  
  });
  


export default UserInput;