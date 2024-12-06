import {
  UserButton,
  SignInButton,
  SignUpButton,
  OrganizationSwitcher,
} from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
export default async function Navbar() {
  const { userId } = await auth();
  if (!userId)
    return (
      <nav className='flex items-center justify-between bg-gray-800 text-white p-2'>
        <Link href='/'>
          <h1 className='font-bold'>SJFC</h1>
        </Link>

        <div className='flex ml-auto items-center gap-4'>
          <SignInButton mode='modal' forceRedirectUrl='/dashboard' />

          <SignUpButton
            mode='modal'
            forceRedirectUrl='/dashboard'
            fallbackRedirectUrl='/'
          />
        </div>
      </nav>
    );
  else {
    return (
      <nav className='flex items-center justify-between bg-gray-800 text-white p-1'>
        <div>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  height: 50,
                  width: 50,
                },
              },
            }}
          />
        </div>
        <div className='flex gap-4'>
          <Link href='/' className='font-bold justify-self-end'>
            SJFC
          </Link>
          <Link className='font-bold' href='/dashboard'>
            Dashboard
          </Link>
        </div>
      </nav>
    );
  }
}
