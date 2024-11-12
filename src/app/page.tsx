import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={`${image.id}-${index}`} className="flex flex-col w-48">
            <img src={image.url} alt="Gallery image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
