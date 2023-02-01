import React from "react";

export default function Hello(props) {
  return <h2>Bonjour, Je m'appelle { props.name }, ceci est mon premier composant exporté en default</h2>
}

export function Hello2({age}) {
  return <h3>Bonjour ceci est mon deuxieme composant exporté nommé, j'ai { age } ans, je viens d'utiliser des props dans mes composants pour afficher mon prénom et mon age</h3>
}
