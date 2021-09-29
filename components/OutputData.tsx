import React, { useContext, useState } from "react"; 
import { View, StyleSheet, Text} from "react-native";
import { InputContext } from "../Context/InputText";

const OutputData: React.FC = () => {
    const {name, setName } = useContext(InputContext)
    const {email, setEmail} = useContext(InputContext) 
    const {password, setPassword} = useContext(InputContext)

    return (
        <View style={styles.outputContainer}>
            <Text style={styles.textName}>{name}</Text> 
            <Text style={styles.textEmail}></Text> 
            <Text></Text>
        </View>
    )
} 


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
    textName: {
        borderBottomWidth: 1, 
        borderBottomColor: "#D3D3D3",
        bottom: 65,
    }, 
    textEmail: {
        
    }
})

export default OutputData;