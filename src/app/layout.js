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
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>  
      </body>
    </html>
  );
}
