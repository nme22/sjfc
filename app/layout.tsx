import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
   title: 'South Jersey Football Club',
   description: 'Website dedicated to SJFC',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body className="flex flex-col min-h-screen">
               <Navbar />
               <main>{children}</main>
               <Footer />
            </body>
         </html>
      </ClerkProvider>
   );
}
