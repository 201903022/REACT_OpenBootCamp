import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingF from './components/pure/GreetingF';
import TaskList from './components/container/task_list';
import Example1 from './hooks/Example1';
import Example2 from './hooks/Example2';
import MiComponenteContexto from './hooks/Example3';
import Example4 from './hooks/Example4';
import './Styles/Buttons.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import TasksForms from './components/pure/forms/TasksForms';
import OptionalRender from './components/pure/optionalRender';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      { /*       
      
      */}
        {/* {Example of functional example} */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name='Martin' lastName='Lopez' />
        <GreetingF name='Martian' lastName='Lopez' /> */}
        {/* {Component of Task List} */}
        {/* <Example1></Example1> */}        
        {/* <Example2></Example2> */}
        
        {/* <LoginForm/>  */}
        {/* <Example4 nombre='Martin'>
          <h2>Este es el hijo 1</h2>
          <h3>Este es el hijo 2</h3>
        </Example4> */}
        {/* <MiComponenteContexto/> */}

        <OptionalRender/>
        {/* <TasksForms/> */}

        {/* <TaskList></TaskList> */}
      </header>
    </div>
  );
}

export default App;
