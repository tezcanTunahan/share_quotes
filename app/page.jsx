import "./page.scss";
import Feed from "@/components/feed/Feed";

export default function Home() {
  return (
    <section className="home">
      <div className="home__title">
        <h1 className="home__title--h1">Read & Write your Quotes</h1>
        <h3 className="home__title--h3">write this word aside</h3>
        <p>
          This is where you can share your quotes with the world & discover
          others' quotes.{" "}
        </p>
      </div>
      <Feed />
    </section>
  );
}
