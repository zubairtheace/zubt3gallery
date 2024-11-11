import { db } from "~/server/db";

export const dynamic = "force-dynamic";

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

export default async function HomePage() {
  // Fetch posts from the database
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {/* Render posts */}
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {/* Render mock images */}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={`${image.id}-${index}`} className="w-48 p-4">
            <img src={image.src} alt="Gallery image" />
          </div>
        ))}
      </div>
    </main>
  );
}
