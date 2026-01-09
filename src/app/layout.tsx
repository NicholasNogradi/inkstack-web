import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import  { UserProvider } from "../components/UserProvider";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { UserType } from "../types/types";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const mockUser: UserType = {
  id: '123',
  name: 'Test',
  email: "test@test.com",
  session: false,
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const headerList= await headers();
  // const sessionToken = headerList.get('authorization');
  // // Logic to fetch user based on token...
  // const userData = await fetchUserData(sessionToken);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <UserProvider initialUser={userData}> */}
          <Header user={mockUser}/> 
          {children}
          <Footer />
        {/* </UserProvider> */}
      </body>
    </html>
  );
}
