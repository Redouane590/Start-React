import React from "react";

export default function Hello({age, name}) {
  return <h2>Bonjour, Je m'appelle { name }, j'ai {age} ans, ceci est mon premier composant exporté en default, ici je fais de la transmission de props</h2>
}

export function Hello2(props) {
  return <Hello { ...props }/>;
}
