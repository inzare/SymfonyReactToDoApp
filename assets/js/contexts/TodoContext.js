import React, { createContext } from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            todos: [
                {task: 'do something'},
            ],
        };
    }

    //create
    createTodo(){

    }
    //read
    readTodo(){

    }
    //update
    updateTodo(){

    }
    //delte
    deleteTodo(){

    }

    render() {
        return (
            <TodoContext.Provider value={{ 
            ...this.state,
            createTodo: this.createTodo.bind(this),
            readTodo: this.readTodo.bind(this),
            updateTodo: this.updateTodo(this),
            deleteTodo: this.deleteTodo(this)            
            }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;