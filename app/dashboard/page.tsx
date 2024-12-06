import { OrganizationSwitcher } from '@clerk/nextjs';
export default function Dashboard() {
  return (
    <div className='flex flex-col justify-center items-center p-1'>
      <h1 className='font-bold text-xl'>This is the Dashboard</h1>
      <OrganizationSwitcher />
    </div>
  );
}
