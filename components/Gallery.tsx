import Image from "next/image";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center uppercase tracking-[5px] text-red-600">
          Gallery
        </p>

        <h2 className="mt-3 text-center text-5xl font-bold">
          Project Gallery
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={400}
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}