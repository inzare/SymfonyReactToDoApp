import React from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from './contexts/TodoContext';
import TodoTable from './components/TodoTable'

class App extends React.Component {
    render() {
        return (
            <div>
                <TodoContextProvider>
                    <TodoTable></TodoTable>
                </TodoContextProvider>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));