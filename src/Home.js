import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Bem Vindo ao NE Brasil</h1>
        <Link to="/profile">Faça a sua visita guiada aqui!</Link>
      </div>
    );
  }
}
