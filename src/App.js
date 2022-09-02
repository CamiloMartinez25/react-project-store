// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import React, { useState } from 'react'
import Header from './components/Header';
import Products from './components/Products';

function App() {

  const [productQuantity, setQuantity] = useState(0);

  const addProduct = () => {
    setQuantity(productQuantity + 1);
  }

  return (
    <div className="App">
      <Header productsQuantity={productQuantity} />
      <Products handleAddProduct={addProduct}/>
    </div>
  );
}

export default App;
