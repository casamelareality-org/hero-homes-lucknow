export default function ProjectOverview() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-3 uppercase tracking-[5px] text-red-500">
          Project Overview
        </p>

        <h2 className="text-5xl font-bold">
          Hero Homes Lucknow
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Hero Homes Lucknow is an upcoming premium residential township
          on Kanpur Road, designed for modern families seeking luxury,
          comfort and excellent connectivity.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-gray-700 p-6">
            <h3 className="text-red-500 text-3xl font-bold">
              Location
            </h3>

            <p className="mt-3">
              Kanpur Road
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 p-6">
            <h3 className="text-red-500 text-3xl font-bold">
              Status
            </h3>

            <p className="mt-3">
              Upcoming
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 p-6">
            <h3 className="text-red-500 text-3xl font-bold">
              Property
            </h3>

            <p className="mt-3">
              Premium Apartments
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 p-6">
            <h3 className="text-red-500 text-3xl font-bold">
              Builder
            </h3>

            <p className="mt-3">
              Hero Homes
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}