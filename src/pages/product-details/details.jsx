import React from 'react';
import { products } from '../../context/context';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams()

    const fProduct = products.find((p) => Number(p.id) === Number(id))

    return (
    <div id='product-detail'>
        {
            fProduct.title
        }
    </div>
  )
}

export default Details