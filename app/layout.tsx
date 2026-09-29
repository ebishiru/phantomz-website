import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "The Last PhantomZ | Pixel Art Boss Survival Game on Android",
  description: "Play PhantomZ, a pixel art boss survival RPG. Dodge deadly attacks, defeat powerful bosses, unlock skills, and survive as long as you can.",
  verification: {
    google: "9SL7lWBeu2rfsoTDz0xXVaRPGG5KpzaCuPNEtAJzNM8",
  }
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
