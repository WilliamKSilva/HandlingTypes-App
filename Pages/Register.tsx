import React, { useState } from "react"; 
import { View } from "react-native";
import SaveButton  from '../components/SaveButton'; 
import UserInput from '../components/UserInput';



const Register = () => {
    
    return(
        <View>
            <UserInput />
            <SaveButton />
        </View>
    )
}



export default Register;
