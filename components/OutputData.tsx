import React, { useContext, useEffect, useRef, useState, createRef } from "react"; 
import { View, StyleSheet, Text, TextInput} from "react-native";
import { InputContext } from "../Context/InputText";

interface ref {
    text: () => void;
}


const OutputData: React.FC = () => {
    const {name, setName } = useContext(InputContext)
    const {email, setEmail} = useContext(InputContext) 
    const {password, setPassword} = useContext(InputContext)
    const {isClicked, setClicked} = useContext(InputContext);



    return (
        <View style={styles.outputContainer}>
            <Text style={styles.textTitle}> Informações Salvas</Text>
            <Text style={styles.textName}> {isClicked === true ? name : null} </Text>
            <Text style={styles.textEmail}> {isClicked === true ? email : null}</Text> 
            <Text style={styles.textPassword}>{isClicked === true ? password : null}</Text>
        </View>
    )
} 

console.log()

const styles = StyleSheet.create({
    outputContainer: {
        marginHorizontal: 20, 
        paddingVertical: 100, 
        paddingHorizontal: 20,
        backgroundColor: '#301934', 
        top: 150, 
        borderRadius: 13, 
        flexDirection: 'column',
    }, 
    textTitle: {
        color: "#D3D3D3", 
        bottom: 90, 
        fontSize: 23, 
    },
    textName: {
        borderBottomWidth: 1, 
        borderBottomColor: "#D3D3D3",
        bottom: 65, 
        color: "#D3D3D3"
    }, 
    textEmail: {
        borderBottomWidth: 1, 
        borderBottomColor: "#D3D3D3",
        bottom: 15, 
        color: "#D3D3D3"
    }, 
    textPassword: {
        borderBottomWidth: 1, 
        borderBottomColor: "#D3D3D3",
        top: 35, 
        color: "#D3D3D3"
    }
})

export default OutputData;