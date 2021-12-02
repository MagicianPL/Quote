const fetchData = (url, setFetchedData) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setFetchedData(data);
    });
};

export default fetchData;
