import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

import Item from './components/Item';
import Input from './components/Input';

export default function App() {

  const [todoList, setTodoList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  function submitHandler(inputText,setInputText){ 
      setTodoList((currentTodoList) => [...currentTodoList, {key: Math.random().toString(), value: inputText}]);    
      setInputText('');
      setIsAddMode(false)
  }

  function removeItemHandler(itemId){
    setTodoList(currentTodoList => currentTodoList.filter(item => item.key !== itemId));
  }

  function onCancelModal(){
    setIsAddMode(false);
  }

  return (
      <View style={styles.container}>       
        <Button title="Add new item" onPress={() => setIsAddMode(true)}/>
        <Input isVisible={isAddMode} onSubmit={submitHandler} onCancel={onCancelModal}/>
        <FlatList data={todoList}
          renderItem={itemData => <Item id={itemData.item.key} onDelete={removeItemHandler} title={itemData.item.value}/> }
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    marginTop:40
  },

})

