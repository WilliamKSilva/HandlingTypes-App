import React, { useState } from "react"; 
import { View } from "react-native";
import SaveButton  from '../components/SaveButton'; 
import UserInput from '../components/UserInput';
import OutputData from '../components/OutputData';


const Register = () => {
    
    return(
        <View>
            <UserInput />
            <SaveButton />
            <OutputData />
        </View>
    )
}



export default Register;
