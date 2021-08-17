import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Item from './components/Item';
import Input from './components/Input';

export default function App() {

  const [todoList, setTodoList] = useState([]);
  

  function submitHandler(inputText,setInputText){
      setTodoList((currentTodoList) => [...currentTodoList, {key: Math.random().toString(), value: inputText}]);    
      setInputText('');
  }

  function removeItemHandler(itemId){
    setTodoList(currentTodoList => currentTodoList.filter(item => item.key !== itemId));
  }

  return (
      <View style={styles.container}>       
        <Input onSubmit={submitHandler}/>
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

