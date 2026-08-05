export default function Map() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-center text-5xl font-bold">
          Project Location
        </h2>

        <div className="overflow-hidden rounded-3xl shadow-xl">

          <iframe
           src="https://www.google.com/maps?q=26.676436,80.816037&z=16&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          />

        </div>

      </div>
    </section>
  );
}