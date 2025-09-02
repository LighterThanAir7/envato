import Link from "next/link";
import SearchForm from "@/components/search-form";

export default function Home() {
  return (
    <main className="main | hero">
      <h1 className="hero__title">Find events around you</h1>
      <p className="hero__description">Browse more than <span>10,000 events</span> around you</p>

      <SearchForm />

      <section className="hero__popular">
        <p>Popular: </p>
        <ul className="hero__popular-list">
          <li className="hero__popular-item">
            <Link href="/events/austin">Austin</Link>
          </li>
          <li className="hero__popular-item">
            <Link href="/events/seattle">Seattle</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
