import Link from 'next/link';
import {
  UserButton,
  SignInButton,
  SignUpButton,
  OrganizationSwitcher,
} from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import MobileMenu from './MobileMenu';
import ThemeLogo from './ThemeLogo';

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <nav className='relative theme-bg theme-text py-3 px-6' style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className='w-full flex items-center justify-between'>
        {/* Left: Logo (theme toggle) + Org Switcher */}
        <div className='flex items-center gap-4'>
          <ThemeLogo />

          {userId && (
            <div className='hidden md:block pl-4' style={{ borderLeft: '1px solid var(--color-border-strong)' }}>
              <OrganizationSwitcher />
            </div>
          )}
        </div>

        {/* Right: Desktop Links + Buttons */}
        <div className='hidden md:flex items-center gap-5'>
          <Link
            href='/'
            className='text-sm font-medium theme-text-muted hover:theme-accent transition cursor-pointer'
            style={{ color: 'var(--color-text-muted)' }}
            onMouseOver={undefined}
          >
            Home
          </Link>

          {userId ? (
            <>
              <Link
                href='/dashboard'
                className='text-sm font-medium transition cursor-pointer'
                style={{ color: 'var(--color-text-muted)' }}
              >
                Dashboard
              </Link>
              <UserButton />
            </>
          ) : (
            <div className='flex items-center gap-3'>
              <SignInButton mode='modal' forceRedirectUrl='/dashboard'>
                <button
                  className='text-sm font-semibold transition cursor-pointer'
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode='modal' forceRedirectUrl='/dashboard'>
                <button
                  className='px-4 py-2 text-sm font-semibold clip-cyber transition cursor-pointer'
                  style={{ backgroundColor: 'var(--color-btn-primary-bg)', color: 'var(--color-btn-primary-text)' }}
                >
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <MobileMenu userId={userId} />
      </div>
    </nav>
  );
}
