import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingF from './components/pure/GreetingF';
import TaskList from './components/container/task_list';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* {Example of functional example} */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name='Martin' lastName='Lopez' />
        <GreetingF name='Martian' lastName='Lopez' /> */}
        {/* {Component of Task List} */}
        <TaskList></TaskList>
      </header>
    </div>
  );
}

export default App;
