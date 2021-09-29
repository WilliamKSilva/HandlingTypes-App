import React, { useState } from "react"; 
import { View } from "react-native";
import UserInput from '../components/UserInput';
import OutputData from '../components/OutputData';


const Register = () => {
    
    return(
        <View>
            <UserInput />
            <OutputData />
        </View>
    )
}



export default Register;
