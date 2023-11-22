import Navbar from "./components/nav/index";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fusion7 Agency | Creative Design and Development Agency",
  description:
    "Transforming ideas into captivating experiences. Fusion7 Agency is your partner in innovative design and seamless development. We specialize in crafting visually stunning designs and robust digital solutions that elevate your brand and engage your audience. Let us bring your vision to life with a fusion of creativity and technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
