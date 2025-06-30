import './App.css';
import ToggleButton from './components/ToggleButton';
import Counter from './components/Counter';
import TodoList from './components/ToDoList';
import UserDirectory from './components/UserDirectory';
import DropdownMenu from './components/Dropdown';
function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <h1> Implementation of DropdownMenu</h1>
      <DropdownMenu />
    <footer style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>CodeWithAlpana</footer>
    </div>
  );
}

export default App;
