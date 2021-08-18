import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'

const Input = (props) => {
    const [inputText, setInputText] = useState('');
    
    function inputChangeHandler(inputText){
        setInputText(inputText);
    }

    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input} 
                placeholder="What's your goal"
                onChangeText={inputChangeHandler}
                value={inputText}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button disabled={inputText.length > 0 ? false: true} title="Add" onPress={props.onSubmit.bind(this, inputText,setInputText)}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:10,
        marginBottom:10,
    },
    btnContainer: {
        flexDirection:"row",
        justifyContent:"space-around",
        width:'50%',
    },
    button: {
        width: "40%"
    }
    
})

export default Input;