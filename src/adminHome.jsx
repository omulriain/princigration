import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { createTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';

function AdminHome() {

    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);
    const initialState = { name: '', description: '' };
    const [formState, setFormState] = useState(initialState);
    const [todos, setTodos] = useState([]);
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
    };

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
        <>
            <header>
                <div className="toggle-nav-box fixed-top"><MDBBtn className="pos-nav-toggle-2" onClick={toggleShow}><h6 className="text-dark">Open Nav</h6></MDBBtn></div>
                <div className="signout-button fixed-top"><AmplifySignOut /></div>
                <MDBCollapse show={showShow}>
                    <section className="sidenav-width-border bg-blue fixed-top">
                        <img
                            className="admin-logo"
                            src="princigration logo sapphire blue Vfinal2 no back.png"
                            width="100"
                            height="61"
                            alt="company logo"
                        />
                        <h4 className="text-dark fw-bold">Admin Dashboard</h4>
                        <MDBBtn className="pos-nav-toggle text-dark" onClick={toggleShow}><h6>Close Nav</h6></MDBBtn>
                        <Link to="">
                            <MDBBtn className="text-dark public-button" color="warning">
                                <container>Return to Public Site</container>
                            </MDBBtn>
                        </Link>
                        <Nav className="flex-column" variant="tabs" activeKey="1">
                            <Nav.Item>
                                <Nav.Link eventKey="1">
                                    <Link to="/adminHome"><h6 className="text-dark">Home</h6></Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2">
                                    <Link to="/adminTraffic">
                                        <h6 className="text-dark">Traffic</h6>
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3">
                                    <Link to="/adminSEO"><h6 className="text-dark">SEO</h6></Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </section>
                </MDBCollapse>
            </header>
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
        </>
    );
}

export default withAuthenticator(AdminHome);