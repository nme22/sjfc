'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export default function MobileMenu({ userId }: { userId: string | null }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <button
        onClick={() => setOpen(!open)}
        className='theme-text p-2 focus:outline-none'
        aria-label='Toggle menu'
      >
        {open ? (
          <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        ) : (
          <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        )}
      </button>

      {open && (
        <div
          className='absolute top-full left-0 right-0 theme-bg-alt px-6 py-4 flex flex-col space-y-4 z-50'
          style={{ borderTop: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
        >
          <Link
            href='/'
            onClick={() => setOpen(false)}
            className='text-lg font-medium theme-text-muted'
          >
            Home
          </Link>

          {userId ? (
            <>
              <Link
                href='/dashboard'
                onClick={() => setOpen(false)}
                className='text-lg font-medium theme-text-muted'
              >
                Dashboard
              </Link>
              <UserButton />
            </>
          ) : (
            <div className='flex flex-col gap-3'>
              <Link
                href='/sign-in'
                onClick={() => setOpen(false)}
                className='px-4 py-2 font-semibold clip-cyber transition w-full cursor-pointer text-center'
                style={{ backgroundColor: 'var(--color-btn-primary-bg)', color: 'var(--color-btn-primary-text)' }}
              >
                Sign In
              </Link>
              <Link
                href='/sign-up'
                onClick={() => setOpen(false)}
                className='border px-4 py-2 font-semibold clip-cyber theme-accent transition w-full cursor-pointer text-center'
                style={{ borderColor: 'var(--color-accent)' }}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
