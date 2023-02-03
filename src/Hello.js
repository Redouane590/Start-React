import React from "react";

export default function Hello({age, name}) {

  return <h2 style={{backgroundColor: 'cyan', color: 'black', borderRadius: '12px', padding: '25px', margin: '25px'}}>Bonjour, Je m'appelle { name }, j'ai {age} ans, ceci est mon premier composant exporté en default, ici je fais de la transmission de props.</h2>
}

export function Hello2(props) {
  return (
<>
  <Hello { ...props }/>,
    { props.children }
    </>
  );
}
