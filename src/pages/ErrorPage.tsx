import React from "react";

export default function ErrorPage() {

  const divStyle = {
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  return (
    <div style={divStyle}>
        <h1>Erro 404!</h1>
    </div>
  );
}



