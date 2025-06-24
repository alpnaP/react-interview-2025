import './App.css';
import ToggleButton from './components/ToggleButton';
import Counter from './components/Counter';
import TodoList from './components/ToDoList';
function App() {
  return (
    <div className="App">
      <TodoList />
    <footer style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>CodeWithAlpana</footer>
    </div>
  );
}

export default App;
