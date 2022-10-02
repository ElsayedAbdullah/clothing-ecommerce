import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import sections from "../../directory.data";
import './Directory.scss'
const Directory = () => {
  const [sectionsData, setSectionsData] = useState(sections);
  return (
    <div className="directory-menu">
      {sectionsData.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
