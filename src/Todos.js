/* src/App.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const Todos = () => {

    const initialState = { name: '', description: '' }
    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])
    const styles = {
        container: { width: 325, marginTop: 75, marginLeft: 'auto', marginRight: 'auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
        todo: { marginBottom: 15, marginTop: 5 },
        input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
        todoID: { marginBottom: 15, fontWeight: 'bold' },
        todoName: { fontSize: 20, fontWeight: 'bold' },
        todoDescription: { marginBottom: 0 },
        button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
        buttondel: { backgroundColor: 'black', color: 'white', float: 'right' },
        hr: { width: '100%', height: 1 }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function fetchTodos() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { console.log('error fetching todos') }
    }

    async function addTodo() {
        try {
            if (!formState.name || !formState.description) return
            const todo = { ...formState }
            setTodos([...todos, todo])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createTodo, { input: todo }))
            fetchTodos()
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    async function removeTodo({ id }) {
        try {
            const newTodosArray = todos.filter(todo => todo.id !== id)
            setTodos(newTodosArray)
            await API.graphql(graphqlOperation(deleteTodo, { input: { id } }))
        } catch (err) {
            console.log('error deleting todo:', err)
        }
    }

    return (
        <div style={styles.container}>
            <h2>Princigration Todos</h2>
            <input
                onChange={event => setInput('name', event.target.value)}
                style={styles.input}
                value={formState.name}
                placeholder="Name"
            />
            <input
                onChange={event => setInput('description', event.target.value)}
                style={styles.input}
                value={formState.description}
                placeholder="Description"
            />
            <button style={styles.button} onClick={addTodo}>Create Todo</button>
            {
                todos.map((todo, index) => (
                    <div key={todo.id ? todo.id : index} style={styles.todo}>
                        <button style={styles.buttondel} onClick={() => removeTodo(todo)}>Delete</button>
                        <p style={styles.todoID}>Todo ID: {todo.id}</p>
                        <p style={styles.todoName}>{todo.name}</p>
                        <p style={styles.todoDescription}>{todo.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Todos;