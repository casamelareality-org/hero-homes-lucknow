export default function Location() {
  const places = [
    { title: "✈️ Chaudhary Charan Singh Airport", time: "10 Min" },
    { title: "🚇 Amausi Metro Station", time: "8 Min" },
    { title: "🛣️ Shaheed Path", time: "5 Min" },
    { title: "🏥 Medanta Hospital", time: "20 Min" },
    { title: "🏫 DPS Lucknow", time: "15 Min" },
    { title: "🛍️ Lulu Mall", time: "25 Min" },
  ];

  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-red-500 uppercase tracking-[5px]">
          Location Advantage
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Everything Close To You
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {places.map((place, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-2xl border border-zinc-700 p-6 hover:border-red-500 transition"
            >
              <h3 className="text-lg font-semibold">
                {place.title}
              </h3>

              <span className="rounded-full bg-red-600 px-4 py-2">
                {place.time}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}