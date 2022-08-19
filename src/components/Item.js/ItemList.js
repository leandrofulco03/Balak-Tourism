import React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';

function ItemList({products}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, []);

  return (
    <div className='d-flex justify-content-center flex-wrap align-items-center'>
              {products.length ? (
                  <>
                  {products.map((item) => {
                    return (
                        <div key={item.id}>
                        <Item 
                        image={item.smartImage} 
                        title={item.title} 
                        description={item.description} 
                        price={item.price}
                        id={item.id}
                        />
                        </div>
                    )
                })}
                </>

              ) : (
                  <Oval color="#00BFFF" height={80} width={80} loading={loading} />  
              )}
    </div>
  )
}

export default ItemList;