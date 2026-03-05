import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='theme-bg theme-text py-6' style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        <div className='flex space-x-6'>
          <Link
            href='https://www.instagram.com/sjfc_team/'
            className='theme-text-muted font-mono text-sm'
          >
            Instagram
          </Link>
          <Link href='/' className='theme-text-muted font-mono text-sm'>
            GitHub
          </Link>
          <Link
            href='https://www.casasoccerleagues.com/'
            className='theme-text-muted font-mono text-sm'
          >
            CASA League
          </Link>
        </div>
        <p className='text-xs theme-text-muted font-mono opacity-50'>
          &copy; {new Date().getFullYear()} SJFC // ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
