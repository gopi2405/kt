// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <form action="../../post" method="post"
          className="form">
          <label>name:</label>
          <input value={name} onChange={e => setName(e.target.value)} id='name' name='name' /><br />
          <label>name2:</label>
          <input value={name2} onChange={e => setName2(e.target.value)} id='name' name='name2' /><br />
          <button type="submit" >click</button>
        </form>
      </header>
    </div>
  );
}

export default App;
