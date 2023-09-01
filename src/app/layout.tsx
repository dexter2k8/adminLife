"use client";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import AuthProvider from "@/hook/authContext";
import MenuProvider from "@/hook/menuContext";
import { makeServer } from "@/mock/server";

const nunito = Nunito_Sans({ subsets: ["latin"] });

// MirajeJS have an issue working with NextJS:
// TypeError: Cannot read properties of undefined (reading 'getReader')
makeServer({ environment: "development" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <AuthProvider>
          <MenuProvider>{children}</MenuProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
