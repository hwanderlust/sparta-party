import React from 'react';
import MasonryItem from "./MasonryItem";


const MasonryColumn = ({ items, colNum, threeCols }) => {

  return (
    <div className={`masonry__column ${colNum}`}>

      {items.map((item, idx) => (

        <MasonryItem key={item.pic} item={item} idx={manageTabIdx(colNum, idx, threeCols)} />
      
        ))}

    </div>
  );
};


const manageTabIdx = (colNum, idx, threeCols) => {

  switch(threeCols) {
    case true:
      if (colNum === "1") {
        switch (idx) {
          case 0:
            return 4
          case 1:
            return 13
          case 2:
            return 22
          default:
            return
        }
      }

      if (colNum === "2") {
        switch (idx) {
          case 0:
            return 7
          case 1:
            return 16
          case 2:
            return 25
          default:
            return
        }
      }

      if (colNum === "3") {
        switch (idx) {
          case 0:
            return 10
          case 1:
            return 19
          case 2:
            return 28
          default:
            return
        }
      }
      return

    case false:
      if (colNum === "1") {
        switch (idx) {
          case 0:
            return 4
          case 1:
            return 10
          case 2:
            return 16
          default:
            return
        }
      }

      if (colNum === "2") {
        switch (idx) {
          case 0:
            return 7
          case 1:
            return 13
          case 2:
            return 19
          default:
            return
        }
      }
      return

    default: 
      return
  }
}

export default MasonryColumn;

