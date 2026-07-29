export default function Price() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl bg-white p-10 shadow-xl">

          <p className="uppercase tracking-[5px] text-red-600">
            Pricing
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Starting Price
          </h2>

          <h3 className="mt-6 text-4xl font-bold text-red-600">
            Price On Request
          </h3>

          <p className="mt-5 text-gray-600">
            Fill the enquiry form to get the latest price list,
            floor plans, payment plan and exclusive launch offers.
          </p>

          <button className="mt-8 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700">
            Get Price Details
          </button>

        </div>

      </div>
    </section>
  );
}