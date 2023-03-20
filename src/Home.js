import React from "react";
import { Link } from "react-router-dom";

const backgroundStyle = {
  backgroundImage:
    "url(https://tecnodefesa.com.br/wp-content/uploads/2016/08/Imagem-1-N.E.Brasil-35anos.jpg)",
  height: "auto", // altura da página
  backgroundSize: "cover", // dimensionamento da imagem
  display: "flex",
  justifyContent: "center",
  backgroundColor: "black"
};

const textStyle = {
  alignItems: "center",
  height: "auto",
  width: "auto",
  borderRadius: "10%",
  backgroundColor: "rgb(142, 141, 148)"
};

const linkStyle = {
  textDecoration: "none", // removendo sublinhado do link
  color: "blue", // definindo cor antes do clique
  alignItems: "center",
  height: "auto",
  width: "auto",
  borderRadius: "10%",
  backgroundColor: "rgb(142, 141, 148)"
};

const activeLinkStyle = {
  color: "red" // definindo cor durante o clique
};

export default class Home extends React.Component {
  render() {
    return (
      <table style={backgroundStyle}>
        <tbody>
          <tr style={{ verticalAlign: "middle", textAlign: "center" }}>
            <td style={textStyle}>
              <h1>BEM VINDO AO NE BRASIL</h1>
            </td>
          </tr>
          <tr style={{ verticalAlign: "middle", textAlign: "center" }}>
            <td>
              <h1>
                <Link to="/profile" style={linkStyle} activeStyle={activeLinkStyle}>
                  INICIAR VISITA GUIADA
                </Link>
              </h1>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
