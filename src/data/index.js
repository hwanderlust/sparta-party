import image1 from "../images/col1row1.jpg";
import image2 from "../images/col2row1.jpg";
import image3 from "../images/col3row1.jpg";
import image4 from "../images/col1row2.jpg";
import image5 from "../images/col2row2.jpg";
import image6 from "../images/col3row2.jpg";


const jsonData = [
  {
    date: 'February 10, 2017',
    title: 'Bureaux exquisite delightful carefully curated soft power.',
    text: 'Presented by LOREM IPSUM',
    pic: image1
  },
  {
    date: 'February 2, 2017',
    title: 'Sharp bureaux sleepy K-pop carefully curated.',
    text: 'Presented by LOREM IPSUM',
    pic: image2
  },
  {
    date: 'January 27, 2017',
    title: 'St Mortiz uniforms Beams.',
    text: 'Presented by LOREM IPSUM',
    pic: image3
  },
  {
    date: 'January 21, 2017',
    title: 'Esse airport veniam ryokan soft power.',
    text: 'Presented by LOREM IPSUM',
    pic: image4
  },
  {
    date: 'January 18, 2017',
    title: 'K-pop extraordinary.',
    text: 'Presented by LOREM IPSUM',
    pic: image5
  },
  {
    date: 'January 12, 2017',
    title: 'Artisanal iconic cutting-edge business clas.',
    text: 'Presented by LOREM IPSUM',
    pic: image6
  },
  
]

export default jsonData;

// const convertDateToString = (dateObj) => {

//   const monthLookup = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const month = monthLookup[dateObj.getMonth()];

//   return `${month} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
// }

// console.log(convertDateToString(new Date("February 10, 2017")));