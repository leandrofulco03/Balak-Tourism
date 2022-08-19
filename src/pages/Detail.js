import React from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router';

function Detail() {

  let { id } = useParams();

  return (
    <div>
        <ItemDetailContainer id={id} />
    </div>
  )
}

export default Detail;