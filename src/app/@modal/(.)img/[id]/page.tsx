import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: incomingParams,
}: {
  params: { id: string };
}) {
  const params = await incomingParams; // Await params explicitly
  const photoId = params.id;

  const idAsNumber = Number(photoId);

  if (isNaN(idAsNumber)) {
    throw new Error("Invalid photo ID");
  }

  const image = await getImage(idAsNumber);

  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
