import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from 'next/link';


export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  
  return(
    <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col w-48 h-52">
            <Link href={`/img/${image.id}`}>
              <Image 
                src={image.url} 
                style={{ objectFit: "contain" }} 
                width={480}
                height={480}
                alt={image.name} 
              />
            </Link>
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
