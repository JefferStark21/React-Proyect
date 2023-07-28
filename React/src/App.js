import logo from './logo.svg';
import usuarios from './usuarios.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={usuarios} className="Usuarios" alt="usuarios"/>
        <p> This is my change, the image that is above... </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.cualquier maricada
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
