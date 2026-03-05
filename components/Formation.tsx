'use client';

import { useState, useRef, useEffect } from 'react';

type FormationName = '4-4-2' | '4-3-3' | '3-5-2' | '4-2-3-1' | '3-4-3';

interface Position {
  x: number;
  y: number;
  role: string;
}

const formations: Record<FormationName, Position[]> = {
  '4-3-3': [
    { x: 50, y: 90, role: 'GK' },
    { x: 15, y: 72, role: 'LB' },
    { x: 38, y: 75, role: 'CB' },
    { x: 62, y: 75, role: 'CB' },
    { x: 85, y: 72, role: 'RB' },
    { x: 30, y: 50, role: 'CM' },
    { x: 50, y: 55, role: 'CDM' },
    { x: 70, y: 50, role: 'CM' },
    { x: 18, y: 25, role: 'LW' },
    { x: 50, y: 22, role: 'ST' },
    { x: 82, y: 25, role: 'RW' },
  ],
  '4-4-2': [
    { x: 50, y: 90, role: 'GK' },
    { x: 15, y: 72, role: 'LB' },
    { x: 38, y: 75, role: 'CB' },
    { x: 62, y: 75, role: 'CB' },
    { x: 85, y: 72, role: 'RB' },
    { x: 15, y: 48, role: 'LM' },
    { x: 38, y: 52, role: 'CM' },
    { x: 62, y: 52, role: 'CM' },
    { x: 85, y: 48, role: 'RM' },
    { x: 35, y: 25, role: 'ST' },
    { x: 65, y: 25, role: 'ST' },
  ],
  '3-5-2': [
    { x: 50, y: 90, role: 'GK' },
    { x: 25, y: 75, role: 'CB' },
    { x: 50, y: 78, role: 'CB' },
    { x: 75, y: 75, role: 'CB' },
    { x: 10, y: 50, role: 'LWB' },
    { x: 35, y: 52, role: 'CM' },
    { x: 50, y: 55, role: 'CDM' },
    { x: 65, y: 52, role: 'CM' },
    { x: 90, y: 50, role: 'RWB' },
    { x: 38, y: 25, role: 'ST' },
    { x: 62, y: 25, role: 'ST' },
  ],
  '4-2-3-1': [
    { x: 50, y: 90, role: 'GK' },
    { x: 15, y: 72, role: 'LB' },
    { x: 38, y: 75, role: 'CB' },
    { x: 62, y: 75, role: 'CB' },
    { x: 85, y: 72, role: 'RB' },
    { x: 35, y: 58, role: 'CDM' },
    { x: 65, y: 58, role: 'CDM' },
    { x: 18, y: 38, role: 'LAM' },
    { x: 50, y: 40, role: 'CAM' },
    { x: 82, y: 38, role: 'RAM' },
    { x: 50, y: 20, role: 'ST' },
  ],
  '3-4-3': [
    { x: 50, y: 90, role: 'GK' },
    { x: 25, y: 75, role: 'CB' },
    { x: 50, y: 78, role: 'CB' },
    { x: 75, y: 75, role: 'CB' },
    { x: 15, y: 50, role: 'LM' },
    { x: 40, y: 53, role: 'CM' },
    { x: 60, y: 53, role: 'CM' },
    { x: 85, y: 50, role: 'RM' },
    { x: 20, y: 25, role: 'LW' },
    { x: 50, y: 22, role: 'ST' },
    { x: 80, y: 25, role: 'RW' },
  ],
};

const formationNames: FormationName[] = ['4-3-3', '4-4-2', '3-5-2', '4-2-3-1', '3-4-3'];

export function useFormation() {
  const [active, setActive] = useState<FormationName>('4-3-3');
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  // Load saved formation from org metadata
  useEffect(() => {
    fetch('/api/formation')
      .then((res) => res.json())
      .then((data) => {
        if (data.formation) {
          setActive(data.formation.active || '4-3-3');
          setAssignments(data.formation.assignments || {});
        }
      })
      .catch(() => {});
  }, []);

  return { active, setActive, assignments, setAssignments };
}

export function FormationControls({
  active,
  setActive,
  onReset,
  onSave,
}: {
  active: FormationName;
  setActive: (f: FormationName) => void;
  onReset: () => void;
  onSave: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const activeIndex = formationNames.indexOf(active);
    const buttons = containerRef.current.querySelectorAll<HTMLButtonElement>('[data-formation]');
    const btn = buttons[activeIndex];
    if (btn) {
      setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [active]);

  return (
    <div className='flex flex-col gap-3 w-full'>
      {/* Formation tabs — scrollable on mobile */}
      <div className='overflow-x-auto -mx-1 px-1'>
        <div
          ref={containerRef}
          className='relative inline-flex rounded-lg overflow-hidden'
          style={{ border: '1px solid var(--color-border-strong)', backgroundColor: 'var(--color-bg)' }}
        >
          {/* Sliding neon indicator */}
          <div
            className='absolute top-0 bottom-0 rounded-lg pointer-events-none'
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              backgroundColor: 'var(--color-accent)',
              boxShadow: '0 0 12px var(--color-glow), 0 0 24px var(--color-glow), inset 0 0 8px rgba(255,255,255,0.1)',
              transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 0,
            }}
          />
          {formationNames.map((name) => (
            <button
              key={name}
              data-formation={name}
              onClick={() => setActive(name)}
              className='relative z-10 px-2.5 py-1.5 font-mono text-xs sm:text-sm cursor-pointer whitespace-nowrap'
              style={{
                color: active === name ? '#fff' : 'var(--color-text-muted)',
                fontWeight: active === name ? 700 : 400,
                transition: 'color 0.3s ease, font-weight 0.3s ease',
                textShadow: active === name ? '0 0 8px rgba(255,255,255,0.4)' : 'none',
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Save & Reset */}
      <div className='flex gap-2'>
        <button
          onClick={onSave}
          className='flex-1 sm:flex-none px-3 py-1.5 font-mono text-xs sm:text-sm cursor-pointer rounded-lg'
          style={{
            color: 'var(--color-accent)',
            border: '1px solid var(--color-border-strong)',
            backgroundColor: 'var(--color-bg)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-accent)';
            e.currentTarget.style.boxShadow = '0 0 10px var(--color-glow)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border-strong)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Save
        </button>
        <button
          onClick={onReset}
          className='flex-1 sm:flex-none px-3 py-1.5 font-mono text-xs sm:text-sm cursor-pointer rounded-lg'
          style={{
            color: '#ff4444',
            border: '1px solid rgba(255,68,68,0.3)',
            backgroundColor: 'var(--color-bg)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,68,68,0.6)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(255,68,68,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,68,68,0.3)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function Formation({ active, assignments, setAssignments, editable = true }: {
  active: FormationName;
  assignments: Record<string, string>;
  setAssignments: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  editable?: boolean;
}) {
  const [editing, setEditing] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [fillMode, setFillMode] = useState(false);
  const [fillIndex, setFillIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const positions = formations[active];

  const getKey = (formationName: string, index: number) =>
    `${formationName}-${index}`;

  // Stop fill mode if assignments are cleared externally (e.g. Reset button)
  useEffect(() => {
    if (fillMode && Object.keys(assignments).length === 0) {
      setFillMode(false);
      setFillIndex(0);
      setEditing(null);
      setInputValue('');
    }
  }, [assignments, fillMode]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  // When fill mode starts or advances, open the current position for editing
  useEffect(() => {
    if (fillMode && fillIndex < positions.length) {
      const key = getKey(active, fillIndex);
      setEditing(key);
      setInputValue(assignments[key] || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fillMode, fillIndex, active, positions.length]);

  const startFill = () => {
    // Resume from first unfilled position
    let startIdx = 0;
    for (let i = 0; i < positions.length; i++) {
      const key = getKey(active, i);
      if (!assignments[key]) {
        startIdx = i;
        break;
      }
      if (i === positions.length - 1) {
        startIdx = 0; // all filled, start over
      }
    }
    setFillMode(true);
    setFillIndex(startIdx);
  };

  const stopFill = () => {
    setFillMode(false);
    setFillIndex(0);
    setEditing(null);
    setInputValue('');
  };

  const goBack = () => {
    if (fillIndex > 0) {
      // Save current input before going back
      if (editing) {
        const trimmed = inputValue.trim();
        setAssignments((prev) => {
          const next = { ...prev };
          if (trimmed) {
            next[editing] = trimmed;
          } else {
            delete next[editing];
          }
          return next;
        });
      }
      setFillIndex(fillIndex - 1);
    }
  };

  const handleCardClick = (key: string) => {
    if (!editable) return;
    if (fillMode) return;
    setEditing(key);
    setInputValue(assignments[key] || '');
  };

  const saveAndAdvance = () => {
    if (!editing) return;
    const trimmed = inputValue.trim();
    setAssignments((prev) => {
      const next = { ...prev };
      if (trimmed) {
        next[editing] = trimmed;
      } else {
        delete next[editing];
      }
      return next;
    });

    if (fillMode) {
      const nextIndex = fillIndex + 1;
      if (nextIndex < positions.length) {
        setFillIndex(nextIndex);
      } else {
        stopFill();
      }
    } else {
      setEditing(null);
      setInputValue('');
    }
  };

  const handleSave = () => {
    if (fillMode) return; // don't save on blur during fill mode
    if (editing) {
      const trimmed = inputValue.trim();
      setAssignments((prev) => {
        const next = { ...prev };
        if (trimmed) {
          next[editing] = trimmed;
        } else {
          delete next[editing];
        }
        return next;
      });
      setEditing(null);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') saveAndAdvance();
    if (e.key === 'Escape') {
      if (fillMode) {
        stopFill();
      } else {
        setEditing(null);
        setInputValue('');
      }
    }
  };

  return (
    <div className='flex flex-col h-full'>
      {/* Fill Lineup controls */}
      {editable && (
        <div className='flex items-center gap-3 mb-3'>
          {fillMode ? (
            <>
              <button
                onClick={goBack}
                disabled={fillIndex === 0}
                className='px-2 py-1 font-mono text-xs sm:text-sm cursor-pointer rounded-lg disabled:opacity-30 disabled:cursor-default'
                style={{
                  color: 'var(--color-text-muted)',
                  border: '1px solid var(--color-border-strong)',
                  backgroundColor: 'var(--color-bg)',
                }}
              >
                ←
              </button>
              <div className='flex items-center gap-2 flex-1'>
                <span className='text-xs sm:text-sm font-mono whitespace-nowrap' style={{ color: 'var(--color-accent)' }}>
                  {fillIndex + 1}/{positions.length} — {positions[fillIndex]?.role}
                </span>
                <div className='flex-1 h-1.5 rounded-full overflow-hidden' style={{ backgroundColor: 'var(--color-border-strong)' }}>
                  <div
                    className='h-full rounded-full'
                    style={{
                      width: `${((fillIndex) / positions.length) * 100}%`,
                      backgroundColor: 'var(--color-accent)',
                      boxShadow: '0 0 6px var(--color-glow)',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
              </div>
              <button
                onClick={stopFill}
                className='px-3 py-1 font-mono text-xs sm:text-sm cursor-pointer rounded-lg'
                style={{
                  color: '#ff4444',
                  border: '1px solid rgba(255,68,68,0.3)',
                  backgroundColor: 'var(--color-bg)',
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={startFill}
              className='px-3 py-1.5 font-mono text-xs sm:text-sm cursor-pointer rounded-lg'
              style={{
                color: 'var(--color-accent)',
                border: '1px solid var(--color-border-strong)',
                backgroundColor: 'var(--color-bg)',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.boxShadow = '0 0 10px var(--color-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-strong)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Fill Lineup
            </button>
          )}
        </div>
      )}

      {/* Pitch */}
      <div
        className='relative w-full rounded-lg overflow-hidden flex-1 mx-auto min-h-[70vh] lg:min-h-[400px]'
      >
        {/* Grass stripes — Bernabeu style alternating */}
        <div className='absolute inset-0' style={{
          background: `repeating-linear-gradient(
            to bottom,
            #2d8a4e 0%,
            #2d8a4e 8.33%,
            #349955 8.33%,
            #349955 16.66%
          )`,
        }} />

        {/* Subtle mow pattern overlay */}
        <div className='absolute inset-0 opacity-[0.04]' style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4%, white 4%, white 4.5%)',
        }} />

        {/* Outer boundary */}
        <div className='absolute inset-[3.5%] border-[2.5px] border-white/90 rounded-[2px]' />

        {/* Halfway line */}
        <div className='absolute left-[3.5%] right-[3.5%] top-1/2 h-[2.5px] bg-white/90' />

        {/* Center circle */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square rounded-full border-[2.5px] border-white/90' />

        {/* Center dot */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/90' />

        {/* Top penalty box */}
        <div className='absolute top-[3.5%] left-[20%] right-[20%] h-[16%] border-[2.5px] border-t-0 border-white/90' />

        {/* Top goal box (6-yard) */}
        <div className='absolute top-[3.5%] left-[32%] right-[32%] h-[7%] border-[2.5px] border-t-0 border-white/90' />

        {/* Top penalty arc */}
        <div className='absolute top-[16.5%] left-1/2 -translate-x-1/2 w-[14%] h-[5%] border-[2.5px] border-t-0 border-white/90 rounded-b-full' />

        {/* Top penalty spot */}
        <div className='absolute top-[14%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/90' />

        {/* Top goal */}
        <div className='absolute top-[1%] left-[40%] right-[40%] h-[2.5%] border-[2px] border-t-[3px] border-white/40 rounded-t-sm' style={{ background: 'rgba(255,255,255,0.05)' }} />

        {/* Bottom penalty box */}
        <div className='absolute bottom-[3.5%] left-[20%] right-[20%] h-[16%] border-[2.5px] border-b-0 border-white/90' />

        {/* Bottom goal box (6-yard) */}
        <div className='absolute bottom-[3.5%] left-[32%] right-[32%] h-[7%] border-[2.5px] border-b-0 border-white/90' />

        {/* Bottom penalty arc */}
        <div className='absolute bottom-[16.5%] left-1/2 -translate-x-1/2 w-[14%] h-[5%] border-[2.5px] border-b-0 border-white/90 rounded-t-full' />

        {/* Bottom penalty spot */}
        <div className='absolute bottom-[14%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/90' />

        {/* Bottom goal */}
        <div className='absolute bottom-[1%] left-[40%] right-[40%] h-[2.5%] border-[2px] border-b-[3px] border-white/40 rounded-b-sm' style={{ background: 'rgba(255,255,255,0.05)' }} />

        {/* Corner arcs */}
        <div className='absolute top-[2%] left-[2%] w-[4%] aspect-square border-[2.5px] border-t-0 border-l-0 border-white/90 rounded-br-full' />
        <div className='absolute top-[2%] right-[2%] w-[4%] aspect-square border-[2.5px] border-t-0 border-r-0 border-white/90 rounded-bl-full' />
        <div className='absolute bottom-[2%] left-[2%] w-[4%] aspect-square border-[2.5px] border-b-0 border-l-0 border-white/90 rounded-tr-full' />
        <div className='absolute bottom-[2%] right-[2%] w-[4%] aspect-square border-[2.5px] border-b-0 border-r-0 border-white/90 rounded-tl-full' />

        {/* Players */}
        {positions.map((pos, i) => {
          const isGK = pos.role === 'GK';
          const key = getKey(active, i);
          const playerName = assignments[key];
          const isEditing = editing === key;
          const isFillTarget = fillMode && fillIndex === i;
          const isFilled = fillMode && i < fillIndex;

          return (
            <div
              key={`${active}-${i}`}
              className='absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500 ease-out'
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                opacity: fillMode && !isFillTarget && !isFilled ? 0.4 : 1,
                transition: 'left 0.5s ease-out, top 0.5s ease-out, opacity 0.3s ease',
              }}
            >
              <button
                onClick={() => handleCardClick(key)}
                className={`relative group ${editable && !fillMode ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* Pulse ring for fill target */}
                {isFillTarget && (
                  <div
                    className='absolute -inset-2 rounded-lg animate-ping'
                    style={{ backgroundColor: 'var(--color-accent)', opacity: 0.3 }}
                  />
                )}
                {/* Card container */}
                <div
                  className='relative w-11 h-14 sm:w-14 sm:h-[72px] rounded-md overflow-hidden group-hover:scale-110 transition-transform duration-200'
                  style={{
                    background: isGK
                      ? 'linear-gradient(180deg, #f59e0b 0%, #b97a0a 100%)'
                      : 'linear-gradient(180deg, #1a3a6e 0%, #0d1f3c 100%)',
                    boxShadow: isFillTarget
                      ? '0 0 16px var(--color-glow), 0 0 32px var(--color-glow), 0 2px 8px rgba(0,0,0,0.5)'
                      : isEditing
                        ? '0 0 12px rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.5)'
                        : '0 2px 8px rgba(0,0,0,0.5)',
                    border: isFillTarget || isEditing ? '1.5px solid rgba(255,255,255,0.8)' : '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {/* Logo */}
                  <div className='flex items-center justify-center pt-1 sm:pt-1.5'>
                    <img src='/sjfc-logo.png' alt='' className='w-6 h-6 sm:w-8 sm:h-8 opacity-90' />
                  </div>
                  {/* Position badge */}
                  <div
                    className='absolute bottom-0 inset-x-0 flex items-center justify-center py-0.5 sm:py-1'
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                  >
                    <span className='text-[10px] sm:text-xs font-bold font-mono text-white tracking-wider'>
                      {pos.role}
                    </span>
                  </div>
                </div>
              </button>

              {/* Name label / input below card */}
              {isEditing ? (
                <input
                  ref={inputRef}
                  type='text'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onBlur={handleSave}
                  onKeyDown={handleKeyDown}
                  placeholder='Name'
                  className='w-20 sm:w-24 px-1.5 py-0.5 mt-1 text-[10px] sm:text-xs font-mono rounded text-center focus:outline-none'
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    border: '1px solid var(--color-accent)',
                    boxShadow: '0 0 8px var(--color-glow)',
                  }}
                />
              ) : playerName ? (
                <span
                  className='mt-1 px-2 py-0.5 text-[10px] sm:text-xs font-semibold font-mono text-white rounded truncate text-center max-w-20 sm:max-w-24'
                  style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
                >
                  {playerName}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
