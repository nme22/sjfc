// app/components/Navbar.tsx
import Link from 'next/link';
import {
  UserButton,
  SignInButton,
  SignUpButton,
  OrganizationSwitcher,
} from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <nav className='bg-blue-900 text-white border-b-2 border-black py-4 px-6'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='text-3xl font-extrabold hover:scale-105 transform transition'
        >
          SJFC
        </Link>

        {/* Desktop Links + Buttons */}
        <div className='hidden md:flex items-center space-x-6'>
          <Link
            href='/'
            className='text-lg font-medium hover:text-gray-200 transition'
          >
            Home
          </Link>

          {userId ? (
            <>
              <Link
                href='/dashboard'
                className='text-lg font-medium hover:text-gray-200 transition'
              >
                Dashboard
              </Link>
              <OrganizationSwitcher
                appearance={{
                  elements: {
                    orgSwitcherBox: { borderRadius: '0.375rem' },
                  },
                }}
              />
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton mode='modal' forceRedirectUrl='/dashboard'>
                <button className='bg-white text-blue-900 border-2 border-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition'>
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode='modal' forceRedirectUrl='/dashboard'>
                <button className='bg-white text-blue-900 border-2 border-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition'>
                  Sign Up
                </button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
