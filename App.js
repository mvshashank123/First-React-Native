import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Todo from './Todo'

export default function App() {
  const [input,setInput] =useState('')
  const [todos,setTodos] =useState([])

  const addTodo = () =>{
    setTodos([...todos,input])
    setInput('')
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.titleText}>Hello React Native</Text>
      <StatusBar style="auto" />
      <ScrollView>
      {todos.map((todo)=>(
        <Todo title={todo}/>
      ))}
      </ScrollView>
      
      <TextInput placeholder="Enter the description" style={styles.textContainer} value ={input} onChangeText = {text =>setInput(text)}/>
      <Button onPress={addTodo} title="Add Todo"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35
  },
  titleText: {
    //backgroundColor:'green',
    fontSize: 30,
    fontWeight:'bold'
  },
  textContainer: {
    margin : 20,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
});
