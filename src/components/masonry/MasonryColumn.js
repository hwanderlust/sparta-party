import React from 'react';
import MasonryItem from "./MasonryItem";


const MasonryColumn = ({ items, colNum }) => {

  return (
    <div className={`masonry__column ${colNum}`}>

      {items.map((item, idx) => (

        <MasonryItem key={item.pic} item={item} idx={manageTabIdx(colNum, idx)} />
      
        ))}

    </div>
  );
};


const manageTabIdx = (colNum, idx) => {

  if (colNum === "1") {
    switch (idx) {
      case 0:
        return 4
      case 1:
        return 10
        // return 6
      case 2:
        return 16
        // return 8
      default:
        return
    }
  }

  if (colNum === "2") {
    switch (idx) {
      case 0:
        return 7
        // return 5
      case 1:
        return 13
        // return 7
      case 2:
        return 19
        // return 9
      default:
        return
    }
  }
}

export default MasonryColumn;

