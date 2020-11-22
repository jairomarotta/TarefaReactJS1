import './App.css';
import React, {Component} from 'react';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida   from './UsuarioSaida';

class App extends Component {

  constructor(props) {
    super(props);    
    this.state = {Nome: ''};
  }   

  render(){    
    return (
      <div id="principal">
        <div id="principal_login">
          <UsuarioEntrada nome={this.state.Nome} OnChange={NovoValor => this.setState({Nome: NovoValor})}></UsuarioEntrada>
          <UsuarioSaida   nome={this.state.Nome}></UsuarioSaida>
          </div>
      </div>
    )
  }

}

export default App;
