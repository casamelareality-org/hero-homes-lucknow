import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">

        <div>
          <Image
            src="/images/hero.png"
            alt="Hero Homes"
            width={700}
            height={700}
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>

          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
            About Hero Homes
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight">
            Building Premium
            <br />
            Communities
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hero Homes is focused on creating thoughtfully designed
            residential communities with modern architecture,
            green landscapes and premium lifestyle amenities.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-white p-6 shadow">

              <h3 className="text-4xl font-bold text-red-600">
                20+
              </h3>

              <p className="mt-2 text-gray-600">
                Years Experience
              </p>

            </div>

            <div className="rounded-2xl bg-white p-6 shadow">

              <h3 className="text-4xl font-bold text-red-600">
                7000+
              </h3>

              <p className="mt-2 text-gray-600">
                Happy Families
              </p>

            </div>

            <div className="rounded-2xl bg-white p-6 shadow">

              <h3 className="text-4xl font-bold text-red-600">
                7.8M+
              </h3>

              <p className="mt-2 text-gray-600">
                Sq.ft Delivered
              </p>

            </div>

            <div className="rounded-2xl bg-white p-6 shadow">

              <h3 className="text-4xl font-bold text-red-600">
                22M+
              </h3>

              <p className="mt-2 text-gray-600">
                Sq.ft Under Development
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}