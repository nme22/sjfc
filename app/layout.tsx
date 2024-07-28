import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
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
            <body>
               <Navbar />
               {children}
            </body>
         </html>
      </ClerkProvider>
   );
}
