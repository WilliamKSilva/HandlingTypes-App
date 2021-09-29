import React, { FC, useContext, useState } from "react"; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, Button, Pressable } from "react-native"; 
import { InputContext } from "../Context/InputText";


const UserInput: React.FC = () => {
    const {name, setName} = useContext(InputContext);
    const {email, setEmail} = useContext(InputContext);
    const {password, setPassword} = useContext(InputContext);
    const {isClicked, setClicked} = useContext(InputContext);

    function handleClick() {
        setClicked(true); 
    }
    console.log(name)

    return(
            <View style={styles.inputTextContainer}>
                    <TextInput  onChangeText={(text) => setName(text)} placeholder="Name" selectionColor='#D3D3D3' placeholderTextColor="#D3D3D3" style={styles.inputTextName} />
                    <TextInput  onChangeText={(text) => setEmail(text)} placeholder="Email" selectionColor='#D3D3D3' placeholderTextColor="#D3D3D3" style={styles.inputTextEmail}/>
                    <TextInput  onChangeText={(text) => setPassword(text)} placeholder="Password" selectionColor='#D3D3D3' placeholderTextColor="#D3D3D3" style={styles.inputTextPassword}/>
                    <TouchableOpacity onPress={handleClick} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Save
                        </Text>
                    </TouchableOpacity>
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
    buttonContainer: {
        elevation: 8, 
        backgroundColor: "#009688",
        top: 80, 
        right: 100,
        marginHorizontal: 130, 
        paddingVertical: 5, 
        borderRadius: 13,

    },


    buttonText: {
        textAlignVertical: 'center', 
        textAlign: 'center',
    }
  });
  


export default UserInput;