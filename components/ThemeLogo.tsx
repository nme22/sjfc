'use client';

import Image from 'next/image';
import { useTheme } from './ThemeProvider';

export default function ThemeLogo() {
  const { theme, toggle } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggle}
      className='flex items-center gap-2 hover:opacity-80 transition cursor-pointer relative'
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <div className='relative'>
        <Image
          src='/sjfc-logo.png'
          alt='SJFC'
          width={36}
          height={36}
          className={`transition duration-300 ${isLight ? 'invert burn-effect' : ''}`}
        />
        {isLight && (
          <>
            <span className='ember' style={{ left: '20%', bottom: '80%', animationDelay: '0s' }} />
            <span className='ember' style={{ left: '50%', bottom: '85%', animationDelay: '0.3s' }} />
            <span className='ember' style={{ left: '70%', bottom: '75%', animationDelay: '0.6s' }} />
            <span className='ember' style={{ left: '35%', bottom: '90%', animationDelay: '0.15s' }} />
            <span className='ember' style={{ left: '60%', bottom: '82%', animationDelay: '0.45s' }} />
          </>
        )}
      </div>
      <span className='text-2xl font-extrabold tracking-tight'>SJFC</span>
    </button>
  );
}
