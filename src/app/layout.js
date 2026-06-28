import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const playfair = Playfair_Display({
  subsets: ["italic"],
  weight: ["700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Donora",
  description: "Blood Donation Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${poppins.variable}
        ${playfair.variable}
      `}
    >
      <body className={`${poppins.className}`}>
          <div>
              {children}
          </div>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}