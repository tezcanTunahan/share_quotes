import React from "react";
import QuoteCard from "@/components/quoteCard/QuoteCard";
const QuotesCardList = ({ data, handleDelete }) => {
  return (
    <div className="quotesCardList">
      {data.map((quote, idx) => (
        <QuoteCard key={idx} quote={quote} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default function MyProfile({ name, quotes, handleDelete }) {
  return (
    <div>
      <h3 style={{ marginBottom: "1rem" }}>{name}'s Profile</h3>
      <QuotesCardList data={quotes} handleDelete={handleDelete} />
    </div>
  );
}
