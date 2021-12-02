// Setting random quote and author of this quote
//Will be trigger on useEffect
const generateQuote = (array, setRandomQuote) => {
  const randomIndex = Math.floor(Math.random() * array.length - 1);
  const randomObject = array[randomIndex];
  setRandomQuote(randomObject);
};

export default generateQuote;
