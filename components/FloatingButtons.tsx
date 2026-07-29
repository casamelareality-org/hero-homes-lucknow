export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/918127366627"
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg"
      >
        💬
      </a>

      <a
        href="tel:+918127366627"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-lg"
      >
        📞
      </a>
    </>
  );
}