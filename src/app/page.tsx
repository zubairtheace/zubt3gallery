import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/c3CFnADis3gPIgbpJmM2WgaAMfvCO0uqLR9Q6TxN7m5FrZ4d",
  "https://utfs.io/f/c3CFnADis3gPIgbpJmM2WgaAMfvCO0uqLR9Q6TxN7m5FrZ4d",
  "https://utfs.io/f/c3CFnADis3gP5QhNYZN6gSIFWqCeY17R8ykvUB6GjwuVxh0A",
  "https://utfs.io/f/c3CFnADis3gP3eXYuJV8yzcfPgkVwjtHqb2OXMo6WSALsmCQ",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  src: url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={`${image.id}-${index}`} className="w-48 p-4">
            <img src={image.src} alt="Gallery image" />
          </div>
        ))}
      </div>
    </main>
  );
}

