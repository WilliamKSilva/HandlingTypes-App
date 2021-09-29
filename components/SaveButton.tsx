import React from "react"; 
import { TouchableOpacity, Text, StyleSheet, TouchableHighlightProps} from "react-native";


interface ButtonProps extends TouchableHighlightProps {
    
}


const SaveButton: React.FC<ButtonProps> = ({...rest}) => {
    
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>
                Save
            </Text>
        </TouchableOpacity>
    )
} 



const styles = StyleSheet.create({
    
    buttonContainer: {
        elevation: 8, 
        backgroundColor: "#009688",
        top: 1, 
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


export default SaveButton;