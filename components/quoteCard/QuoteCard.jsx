"use client";
import "./quoteCard.scss";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function QuoteCard({ quote, handleDelete }) {
  const pathName = usePathname();
  const [copied, setCopied] = useState("");
  const { data: session } = useSession();
  const handleCopy = () => {
    setCopied(quote.quote);
    navigator.clipboard.writeText(quote.quote);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  return (
    <div className="quoteCard">
      <h3>{quote.creator.username}</h3>
      <p>{quote.creator.email}</p>
      <p>{quote.quote}</p>

      <p>#{quote.tag}</p>
      <button onClick={handleCopy}>
        <p>{copied === quote.quote ? "Copied" : "Coppy"}</p>
      </button>
      {session?.user.id === quote.creator._id && pathName === "/profile" && (
        <button onClick={() => handleDelete(quote)}>Delete</button>
      )}
    </div>
  );
}
