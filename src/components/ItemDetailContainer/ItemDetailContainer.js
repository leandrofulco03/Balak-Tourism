import React from 'react';
import { useEffect, useState } from 'react';
import travelList from '../../data/ItemMock';
import ItemDetail from '../ItemDetail.js/ItemDetail';
import { useNavigate } from 'react-router-dom';

function ItemDetailContainer({id}) {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  // const getItem = () => {
  //   return new Promise( (resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(travelList);
  //     }, 2000)
  //   })
  // }

  useEffect(() => {
      // getItem()
      // .then( (response) => {
      //   setProduct(response);
      // })
      if (itemFilter === undefined) {
        navigate('/')
      } else {
        setProduct(itemFilter)
      }
  },[id])

  const itemFilter = travelList.find( (product) => {
    return product.id == id
  })

  return (
    <section>
      {product ? 
      <ItemDetail 
        item={product} 
      /> 
      : 
      <h3>Cargando...</h3>
      }
    </section>
  )
}

export default ItemDetailContainer;