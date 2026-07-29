import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">

      <Image
        src="/images/hero.png"
        alt="Hero Homes Lucknow"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

        <p className="mb-4 text-sm uppercase tracking-[8px] text-red-400">
          Luxury Living
        </p>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Hero Homes
          <br />
          Lucknow
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
          Premium Lifestyle on Kanpur Road, Lucknow
          with world-class amenities, green landscapes,
          smart planning and modern luxury.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">
            Book Site Visit
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black">
            Download Brochure
          </button>

        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        ↓
      </div>

    </section>
  );
}