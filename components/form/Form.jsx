import "./form.scss";
import Link from "next/link";

export default function Form({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) {
  return (
    <section className="formContainer">
      <h1>{type} Quote</h1>
      <p>{type} & share your unkown quotes with the world.</p>
      <form onSubmit={handleSubmit} className="formContainer__form">
        <span>Your Quote</span>
        <textarea
          value={post.quote}
          onChange={(e) => {
            setPost({ ...post, quote: e.target.value });
          }}
          placeholder="Enter your quote here..."
          required
          className="formContainer__form__quote"
        />
        <span>
          Tags
          <span>(#bla, #blaa, #blaaa)</span>
        </span>
        <input
          value={post.tag}
          onChange={(e) => {
            setPost({ ...post, tag: e.target.value });
          }}
          placeholder="Enter your tag here..."
          required
          className="formContainer__form__tag"
        />
        <Link href={"/"}>Cancel</Link>
        <button type="submit" disabled={submitting}>
          {submitting ? type + "..." : type}
        </button>
      </form>
    </section>
  );
}
