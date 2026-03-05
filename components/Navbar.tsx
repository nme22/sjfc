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
    <nav className='bg-navy-900 text-white border-b border-navy-700 py-4 px-6'>
      <div className='w-full flex items-center justify-between'>
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
                <button className='bg-white text-navy-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition'>
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode='modal' forceRedirectUrl='/dashboard'>
                <button className='border-2 border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-navy-900 transition'>
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
