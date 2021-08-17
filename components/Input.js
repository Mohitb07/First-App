import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

const Input = (props) => {
    const [inputText, setInputText] = useState('');
    
    function inputChangeHandler(inputText){
        setInputText(inputText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            placeholder="What's your goal"
            onChangeText={inputChangeHandler}
            value={inputText}
            />
            <Button title="Add" onPress={props.onSubmit.bind(this, inputText,setInputText)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input: {
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:10
    },
    
})

export default Input;