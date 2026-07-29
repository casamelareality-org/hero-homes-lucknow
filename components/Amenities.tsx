export default function Amenities() {
  const amenities = [
    "🏊 Swimming Pool",
    "🏋️ Modern Gym",
    "🌳 Landscaped Garden",
    "🎾 Sports Court",
    "👶 Kids Play Area",
    "🏢 Club House",
    "🛡️ 24×7 Security",
    "🚗 Covered Parking",
  ];

  return (
    <section id="amenities" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Premium Amenities
        </h2>

        <p className="mt-4 text-center text-gray-500">
          Everything you need for a luxurious lifestyle.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-4">

          {amenities.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-red-600 hover:text-white"
            >
              <div className="text-5xl">
                {item.split(" ")[0]}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {item.substring(item.indexOf(" ") + 1)}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}