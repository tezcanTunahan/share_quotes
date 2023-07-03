"use client";
import "./profile.scss";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MyProfile from "@/components/myProfile/MyProfile";

export default function Profile() {
  const { data: session } = useSession();
  const [quotes, setQuotes] = useState([]);
  const handleDelete = async (quote) => {
    const res = await fetch(`/api/quote/${quote._id}/delete`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    if (session) {
      const fetchQuote = async () => {
        const response = await fetch(`api/user/${session?.user.id}/quotes`);
        const data = await response.json();
        setQuotes(data);
      };
      fetchQuote();
    }
  }, [session, handleDelete]);

  return (
    <div className="profile">
      <MyProfile
        name={session?.user.name}
        quotes={quotes}
        handleDelete={handleDelete}
      />
    </div>
  );
}
