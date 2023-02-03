import React from "react";
import styles from "./Hello.module.css"


export default function Hello({age, name}) {
  const color = 'black'
  return <h2 className={styles.title}>Bonjour, Je m'appelle { name }, j'ai {age} ans, ceci est mon premier composant exporté en default, ici je fais de la transmission de props.
  j'ai ajouté un peu de style en jsx</h2>
}

export function Hello2(props) {
  return (
<>
  <Hello { ...props }/>,
    { props.children }
    </>
  );
}
