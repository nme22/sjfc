import { auth } from '@clerk/nextjs/server';
import DashboardClient from './DashboardClient';

export default async function Dashboard() {
  const { has } = await auth();
  const isAdmin = has({ role: 'org:admin' });

  return <DashboardClient isAdmin={isAdmin} />;
}
