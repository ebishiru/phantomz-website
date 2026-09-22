import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Last PhantomZ",
  description: "Webpage for Last PhantomZ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <Header />
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
      <Footer />
    </html>
  );
}
