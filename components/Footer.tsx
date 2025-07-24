import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-blue-900 text-white border-t-2 border-black py-6 fixed bottom-0 left-0 w-full'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        <div className='flex space-x-6'>
          <Link href='/' className='hover:text-gray-300 transition'>
            Instagram
          </Link>
          <Link href='/' className='hover:text-gray-300 transition'>
            GitHub
          </Link>
          <Link href='/' className='hover:text-gray-300 transition'>
            Casa Soccer League
          </Link>
        </div>
        <p className='text-sm font-mono'>
          &copy; {new Date().getFullYear()} SJFC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
