import React, {Component} from 'react';

class UsuarioSaida extends Component{

  render(){
    return(
      <div>
        <p>Login <b> {this.props.nome} </b> </p>
        <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros. </p>
      </div>
    );
  }
}

export default UsuarioSaida;