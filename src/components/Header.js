import React from 'react'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Header({productsQuantity}) {
  
  return (
    <header>
        <h2>Resumen de tu Compra</h2>

        <p>Total de productos comprados: <span>{productsQuantity}</span></p>
    </header>
  )
}
