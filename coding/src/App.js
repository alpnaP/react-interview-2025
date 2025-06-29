import './App.css';
import ToggleButton from './components/ToggleButton';
import Counter from './components/Counter';
import TodoList from './components/ToDoList';
import UserDirectory from './components/UserDirectory';
function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <h1> Data Fetching from API & Search Implemention - User Directory</h1>
      <UserDirectory />
    <footer style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>CodeWithAlpana</footer>
    </div>
  );
}

export default App;
