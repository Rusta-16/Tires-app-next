import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import { Dancing_Script } from 'next/font/google'
import Footer from "./components/ui/Footer";


const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ["400", "700"],
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="mt-auto">
          <Footer />
        </footer>  
      </body>
    </html>
  );
}
