import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title:{
    default: "Foodie Haven",
    template: "%s | Foodie Haven",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <header className="bg-orange-100">
          <div className="container flex items-center justify-between py-3 mx-auto">
            <div className="w-20 h-20">
              <Link href='/'>
                <img src="/logo.png" alt="" />
              </Link>
            </div>
            <div className="flex gap-4">
              <Link prefetch={false} className="btn" href="/foods">
                Foods
              </Link>
              <Link className="btn" href="/reviews">
                Reviews
              </Link>
              <Link className="btn" href="/feedback">
                Feedbacks
              </Link>
            </div>
          </div>
        </header>

        <main className="p-6">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
