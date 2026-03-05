export default function Dashboard() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        {/* Header */}
        <div className='mb-10'>
          <h1 className='text-3xl font-extrabold text-navy-900'>Dashboard</h1>
          <p className='text-gray-500 mt-1'>Welcome back to SJFC</p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Season Schedule */}
          <div className='md:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-2xl'>📅</span>
              <h2 className='text-xl font-bold text-navy-900'>Season Schedule</h2>
            </div>
            <iframe
              className='w-full rounded-lg min-h-[70vh] md:min-h-[600px]'
              src='https://season-microsites.ui.sportsengine.com/seasons/6978cd52226da93f7a6e6c15/schedule2?embed=true&noNav=true&link=063464&accent=828382'
              allow='clipboard-write'
              style={{ border: 'none' }}
            />
          </div>

          {/* Events Card */}
          <div className='md:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-2xl'>⚽</span>
              <h2 className='text-xl font-bold text-navy-900'>Training & Events</h2>
            </div>
            <p className='text-gray-600'>
              Stay tuned for upcoming training sessions and club events.
              Admins will be able to create and manage events here.
            </p>
            <span className='inline-block mt-4 text-gray-400 text-sm font-medium'>
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
