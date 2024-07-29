import { UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
export default function Navbar() {
   const { userId } = auth();
   return (
      <nav className="flex items-center justify-between bg-gray-800 text-white p-2">
         <Link href="/">
            <h1 className="font-bold">SJFC</h1>
         </Link>

         <div className="flex ml-auto items-center gap-4">
            {!userId && (
               <>
                  {/* <Link
                     href="/sign-in"
                     className="text-white underline hover:text-green-200"
                  >
                     Sign In
                  </Link> */}
                  <SignInButton mode="modal" forceRedirectUrl="/dashboard" />

                  {/* <Link
                     href="/sign-up"
                     className="text-white underline hover:text-green-200"
                  >
                     Sign Up
                  </Link> */}
                  <SignUpButton
                     mode="modal"
                     forceRedirectUrl="/dashboard"
                     fallbackRedirectUrl="/"
                  />
               </>
            )}
            <div className="flex items-center justify-end">
               {userId && <UserButton />}
            </div>
         </div>
      </nav>
   );
}
