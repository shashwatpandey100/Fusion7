"use client";
import "./globals.css";
import localFont from 'next/font/local'

const myFont = localFont({
    src: './static-fonts/my-font.otf',
    display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
