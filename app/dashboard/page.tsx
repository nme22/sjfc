import { OrganizationSwitcher } from '@clerk/nextjs';
export default function Dashboard() {
  return (
    <div className='flex flex-col justify-center items-center p-1'>
      <h1 className='font-bold text-xl'>This is the Dashboard</h1>
      <OrganizationSwitcher />
      <p>Lets Display the Casa Schedule for the season here.</p>
      <p>
        Lets Post trainings, etc, from Palla API if we can or create a custom
        invitation feature for admins of the org to create events
      </p>
    </div>
  );
}
