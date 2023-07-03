"use client";
import "./feed.scss";
import { useState, useEffect } from "react";
import QuoteCard from "@/components/quoteCard/QuoteCard";

const QuotesCardList = ({ data, handleTagClick }) => {
  return (
    <div className="quotesCardList">
      {data.map((quote, idx) => (
        <QuoteCard key={idx} quote={quote} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

export default function Feed() {
  const [quotes, setQuotes] = useState([]);

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
      <QuotesCardList data={quotes} handleTagClick={() => {}} />
    </section>
  );
}
