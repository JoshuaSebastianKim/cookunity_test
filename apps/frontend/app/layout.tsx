import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./_providers/Providers";
import Appbar from "./_components/Appbar";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon app",
  description: "Pokemon card battle simulator.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <Appbar />
          {session ? (
            children
          ) : (
            <div className="flex-1 flex items-center justify-center">
              Please log in
            </div>
          )}
        </Providers>
      </body>
    </html>
  );
}
