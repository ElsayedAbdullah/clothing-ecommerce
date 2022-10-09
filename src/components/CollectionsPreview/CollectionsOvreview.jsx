import React, { useState } from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

const CollectionsOvreview = () => {
  const SHOP_DATA = useSelector(state => state.shop);
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="collections-preview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOvreview;
