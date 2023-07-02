"use client";
import "./feed.scss";
import { useState, useEffect } from "react";
// import QuoteCard from "./QuoteCard.jsx";

const QuotesCardList = ({ data, handleTagClick }) => {
  return (
    <div className="quotes-card-list">
      {data.map((quote) => (
        <div>{quote.quote}</div>
        // <QuoteCard
        // key={quote.id}
        // quote={quote}
        // handleTagClick={handleTagClick}
        // />
      ))}
    </div>
  );
};

export default function Feed() {
  const [searchText, setSearchText] = useState("");
  const [quotes, setQuotes] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("/api/quote");
      const data = await response.json();
      setQuotes(data);
    };
    fetchQuote();
  }, []);

  return (
    <section className="feed">
      <form>
        <input
          type="text"
          value={searchText}
          placeholder="search for tag or a username"
          onChange={handleSearchChange}
          required
        />
      </form>
      <QuotesCardList data={quotes} handleTagClick={() => {}} />
    </section>
  );
}
