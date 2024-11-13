import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { getMyImages } from "~/server/db/queries";


export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  
  return(
    <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col w-48">
            <img src={image.url}/>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
  );
}

export default async function HomePage() {
  

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-4 text-2xl text-center">
          Please sign in to view the gallery
        </div>
      </SignedOut>
      <SignedIn><Images /></SignedIn>
      
    </main>
  );
}
