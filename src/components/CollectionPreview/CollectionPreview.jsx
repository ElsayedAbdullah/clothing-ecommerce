import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import './CollectionPreview.scss'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2>{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((el, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
