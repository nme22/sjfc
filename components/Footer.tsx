import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-navy-900 text-white border-t border-navy-700 py-6'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        <div className='flex space-x-6'>
          <Link
            href='https://www.instagram.com/sjfc_team/'
            className='hover:text-gray-300 transition'
          >
            Instagram
          </Link>
          <Link href='/' className='hover:text-gray-300 transition'>
            GitHub
          </Link>
          <Link
            href='https://www.casasoccerleagues.com/'
            className='hover:text-gray-300 transition'
          >
            Casa Soccer League
          </Link>
        </div>
        <p className='text-sm text-gray-400 font-mono'>
          &copy; {new Date().getFullYear()} SJFC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
