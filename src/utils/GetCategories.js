import {categories, ItemProduct} from "../lib/BackendData";

function makeGetRandomElement(initialArray) {
  let arr;
  function randomIndex() {
    return Math.floor(Math.random() * arr.length);
  }
  function reinArray() {
    arr = initialArray.slice();
  }
  reinArray();
  return function getRandomElement() {
    if(arr.length === 0) reinArray();
    return arr.splice(randomIndex(), 1)[0];
  }
}

const getRandomElement = makeGetRandomElement(categories);
const getRandomElementToBanner = makeGetRandomElement(ItemProduct);
export const popularCat = []
export const DecountElement = getRandomElementToBanner()

for(let i = 0; i < 4; i++) {
  popularCat[i] = getRandomElement()
}





