import { SignInButton, SignUpButton } from '@clerk/nextjs';
export default function Navbar() {
   return (
      <nav className="flex-row text-white">
         <h1>SJFC</h1>

         <div>
            <SignInButton />
            <SignUpButton />
         </div>
      </nav>
   );
}
