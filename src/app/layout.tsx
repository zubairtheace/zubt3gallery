import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import {  NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "~/app/api/uploadthing/core";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "T3  Gallery",
  description: "The Best Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
  modal,
}: Readonly<{ 
  children: React.ReactNode
  modal: React.ReactNode; 
}>) {
  return (
    <ClerkProvider>      
      <html lang="en" className={`${GeistSans.variable}`}>  
      <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />    
        <body className="flex flex-col gap-4 ">
          <TopNav />
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
