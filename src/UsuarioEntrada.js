import React, {Component} from 'react';

class UsuarioEntrada extends Component{
 
  render(){
    return(
      <div>
        <input type="text" onChange={event => this.props.OnChange(event.target.value)} title="Informe um usuário"></input>
      </div>
    );
  }

}

export default UsuarioEntrada;