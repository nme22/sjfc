import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-64px)] py-8'>
      <SignUp />
    </div>
  );
}
