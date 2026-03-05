import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const { orgId } = await auth();
  if (!orgId) {
    return NextResponse.json({ error: 'No organization selected' }, { status: 400 });
  }

  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ organizationId: orgId });
  const formation = (org.publicMetadata as Record<string, unknown>)?.formation ?? null;

  return NextResponse.json({ formation });
}

export async function POST(req: Request) {
  const { orgId, has } = await auth();
  if (!orgId) {
    return NextResponse.json({ error: 'No organization selected' }, { status: 400 });
  }

  const isAdmin = has({ role: 'org:admin' });
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const body = await req.json();
  const { active, assignments } = body;

  const client = await clerkClient();
  await client.organizations.updateOrganization(orgId, {
    publicMetadata: { formation: { active, assignments } },
  });

  return NextResponse.json({ success: true });
}
