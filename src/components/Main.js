/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData";
import StyledWrapper from "./StyledWrapper";
import generateQuote from "../helpers/generateQuote";

const Main = () => {
  const [fetchedData, setFetchedData] = useState([]);
  //For random object from fetched array
  const [randomQuote, setRandomQuote] = useState(null);
  const [prevQuote, setPrevQuote] = useState(null);
  //For toggling previous button
  const [disabled, setDisabled] = useState(true);

  //fetching data
  useEffect(() => {
    fetchData(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json",
      setFetchedData
    );
  }, []);

  //when data is fetched it's generate random object from an array
  useEffect(() => {
    generateQuote(fetchedData, setRandomQuote);
  }, [fetchedData]);

  const previousQuote = () => {
    setPrevQuote(randomQuote);
    setRandomQuote(prevQuote);
  };

  return (
    <StyledWrapper>
      {randomQuote ? (
        <>
          <blockquote>{randomQuote.quote}</blockquote>
          <p>{randomQuote.author}</p>
          <button
            onClick={() => {
              setPrevQuote(randomQuote);
              generateQuote(fetchedData, setRandomQuote);
              setDisabled(false);
            }}
          >
            CLICK
          </button>
          <p>ncdncdj</p>
          <button
            disabled={disabled}
            onClick={() => {
              previousQuote();
              setDisabled(true);
            }}
          >
            Previous
          </button>
        </>
      ) : null}
    </StyledWrapper>
  );
};

export default Main;
