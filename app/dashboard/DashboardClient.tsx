'use client';

import { useEffect, useRef, useCallback } from 'react';
import Formation, { FormationControls, useFormation } from '@/components/Formation';

export default function DashboardClient({ isAdmin }: { isAdmin: boolean }) {
  const { active, setActive, assignments, setAssignments, loaded } = useFormation();
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const saveFormation = useCallback((formationName: string, formationAssignments: Record<string, string>) => {
    fetch('/api/formation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: formationName, assignments: formationAssignments }),
    });
  }, []);

  // Auto-save when admin changes formation or assignments (debounced)
  useEffect(() => {
    if (!isAdmin || !loaded) return;
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      saveFormation(active, assignments);
    }, 1000);
    return () => {
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
    };
  }, [active, assignments, isAdmin, loaded, saveFormation]);

  return (
    <div className='min-h-screen theme-bg theme-text'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Header */}
        <div className='mb-10'>
          <p className='theme-accent font-mono text-sm tracking-widest mb-2'>&#47;&#47; DASHBOARD</p>
          <h1 className='text-3xl font-extrabold'>Welcome back to <span className='theme-accent neon-accent'>SJFC</span></h1>
        </div>

        {/* Schedule + Formation side by side */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          {/* Season Schedule */}
          <div className='theme-panel p-6 cyber-card clip-cyber'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='theme-accent font-mono text-sm tracking-wider'>[ SEASON SCHEDULE ]</span>
            </div>
            <iframe
              className='w-full min-h-[70vh] lg:min-h-[700px]'
              src='https://season-microsites.ui.sportsengine.com/seasons/6978cd52226da93f7a6e6c15/schedule2?embed=true&noNav=true&link=063464&accent=828382'
              allow='clipboard-write'
              sandbox='allow-scripts allow-same-origin allow-popups allow-forms'
              style={{ border: 'none' }}
            />
          </div>

          {/* Formation */}
          <div className='theme-panel p-8 cyber-card clip-cyber flex flex-col'>
            <div className='flex flex-col gap-4 mb-6'>
              <span className='theme-accent font-mono text-sm tracking-wider'>[ FORMATION ]</span>
              {isAdmin && (
                <FormationControls active={active} setActive={setActive} onReset={() => setAssignments({})} />
              )}
            </div>
            <Formation active={active} assignments={assignments} setAssignments={setAssignments} editable={isAdmin} />
          </div>
        </div>

        {/* Events Card */}
        <div className='grid grid-cols-1 gap-6'>
          <div className='theme-panel p-6 cyber-card clip-cyber'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='theme-accent font-mono text-sm tracking-wider'>[ TRAINING & EVENTS ]</span>
            </div>
            <p className='theme-text-muted'>
              Stay tuned for upcoming training sessions and club events.
              Admins will be able to create and manage events here.
            </p>
            <span className='inline-block mt-4 theme-text-muted text-sm font-mono opacity-50'>
              // Coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
