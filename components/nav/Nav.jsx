"use client";
import "./nav.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="nav">
      <div className="nav__right">
        <Link href="/">UnkownQuotes</Link>
      </div>
      <div className="nav__left">
        {session?.user ? (
          <div className="nav__left__login">
            <Link href="/profile">{session.user.name}</Link>
            <button onClick={signOut} className="nav__button">
              Log out
            </button>
            <Link href="create-quote">
              <button className="nav__button">Create Quote</button>
            </Link>
          </div>
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <button
              type="button"
              key={provider.name}
              onClick={() => {
                signIn(provider.id);
              }}
              className="nav__button"
            >
              Sign in with {provider.name}
            </button>
          ))
        )}
      </div>
    </nav>
  );
}
