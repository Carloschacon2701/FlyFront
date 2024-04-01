import Brands from "./Section/Brands";
import Hero from "./Section/Hero";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Hero />
      <Brands />
      <div className="p-10 bg-slate-50">
        <h1>Popular Destinations</h1>
      </div>
    </section>
  );
}
