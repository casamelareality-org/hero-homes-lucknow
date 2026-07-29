export default function Footer() {
  return (
    <footer className="bg-black text-white py-14">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-3xl font-bold">
          Hero Homes Lucknow
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl">
          Luxury living on Kanpur Road with premium amenities,
          modern design and excellent connectivity.
        </p>

        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between">

          <p>
            © 2026 Hero Homes Lucknow. All Rights Reserved.
          </p>

          <p className="text-gray-400">
            Designed with ❤️ using Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}