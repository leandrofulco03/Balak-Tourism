import React from 'react';
import { useState, useEffect } from 'react';
import travelList from '../../data/ItemMock';
import ItemList from '../Item.js/ItemList';

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(travelList);
      }, 2000)
    })
  }

  useEffect(() => {
      getProducts()
      .then( (response) => {
        setProducts(response);
      })
      .catch((err) => {
        console.log("ERROR");
      })
      .finally( () => {
        console.log("Promesa exitosa");
      })
  }, [])

  return (
    <div className='item-container my-5'>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;