import type { Metadata } from "next";
import { Roboto } from 'next/font/google'

import "./globals.css";
import Loader from "@/shared/components/loader/loader";
import Header from "@/shared/components/header/header";
import Footer from "@/shared/components/footer/footer";

const roboto = Roboto({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MSPL",
  icons: {
    icon: "/logo.svg"
  },
  description: "MSPL стремится к расширению географии своих турниров, привлекая к участию спортсменов из разных регионов и стран. Это способствует популяризации бильярдного спорта и укреплению международных спортивных связей.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Loader />
        <Header />
          <main>
            {children}
          </main> 
        <Footer />
      </body>
    </html>
  );
}
