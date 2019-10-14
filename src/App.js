import React from 'react';
import './styles.css';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <span className="logo" >Logo</span>
        <h1>iFollow</h1>
        <form>
          <input type='text' placeholder="Digite seu usuário do github" />
          <button>Entrar</button>
        </form>
      </div>
    );
  }
}

export default App;
