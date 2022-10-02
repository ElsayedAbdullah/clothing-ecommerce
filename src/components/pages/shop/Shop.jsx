import React, { useState } from 'react'
import CollectionPreview from '../../CollectionPreview/CollectionPreview.jsx'
import SHOP_DATA from './shop.data.js'
const Shop = () => {
  const [shopData, setShopData] = useState(SHOP_DATA)
  return (
    <div>
      {shopData.map(({id, ...otherCollectionProps})=> (
        <CollectionPreview key={id} {...otherCollectionProps} /> 
      ))}
    </div>
  )
}

export default Shop