import { type ReactNode } from "react";
import { Navbar } from "../components/storefront/Navbar";
import { Footer } from "../components/storefront/Footer";
import Navbar2 from "@/app/components/storefront/Navbar2";

export default function StoreFrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
        <Navbar2/>
      <main className="w-full px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
