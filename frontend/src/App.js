import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import GreetingF from './components/GreetingF';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name='Martin' lastName='Lopez' />
        <GreetingF name='Martian' lastName='Lopez' />
      </header>
    </div>
  );
}

export default App;
