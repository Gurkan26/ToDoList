import React,{useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Header from '../Header/header';
import styles from './Card.style';
const Card = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React Native',
      completed: true,
    },
    {
      id: 2,
      title: 'Learn React',
      completed: false,
    },
  ]);

  const addToDo = () => {
    if (input.trim()) {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        title: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const toggleTodo = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const removeTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <View style={styles.container}>
      <Header item={todos} />
      <View>
        {todos.map(todo => (
          <View
            style={{
              backgroundColor: todo.completed ? 'gray' : '#ff5733',
              margin: 10,
              padding: 10,
              borderRadius: 10,
            }}
            key={todo.id}>
            <Text
              onLongPress={() => removeTodo(todo.id)}
              onPress={() => toggleTodo(todo.id)}
              style={{
                color: '#fff',
                textDecorationLine: todo.completed ? 'line-through' : 'none',
                fontSize: 20,
              }}
              key={todo.id}>
              {todo.title}
            </Text>
          </View>
        ))}
        <View style={styles.todoInputArea}>
          <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            style={styles.todoInput}
            placeholder="Add Todo"
          />
          <Button onPress={addToDo}  color="#ef43f4" title="Ekle" />
        </View>
      </View>
    </View>
  );
};
export default Card;
