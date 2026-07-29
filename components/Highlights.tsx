export default function Highlights() {
  const items = [
    {
      title: "Prime Location",
      text: "Kanpur Road, Lucknow",
      icon: "📍",
    },
    {
      title: "Luxury Clubhouse",
      text: "Premium Lifestyle",
      icon: "🏢",
    },
    {
      title: "24×7 Security",
      text: "Safe & Secure Living",
      icon: "🛡️",
    },
    {
      title: "Green Living",
      text: "Open Green Spaces",
      icon: "🌳",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Project Highlights
        </h2>

        <p className="mb-14 text-center text-gray-500">
          Designed for a Premium Lifestyle
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 text-5xl">
                {item.icon}
              </div>

              <h3 className="mb-2 text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}