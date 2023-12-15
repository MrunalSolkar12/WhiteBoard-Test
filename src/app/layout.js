"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { UserContextProvider } from "./Context/context";
import { GoogleOAuthProvider } from "@react-oauth/google";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId="660187663646-4dboc9og6b0otnqt5774td6p57qc59fn.apps.googleusercontent.com">
          <UserContextProvider>{children}</UserContextProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
