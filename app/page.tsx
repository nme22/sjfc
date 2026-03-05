import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 overflow-hidden'>
        {/* Background pattern */}
        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage:
              'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className='relative z-10 text-center px-6 animate-fade-in-up'>
          <h1 className='text-8xl md:text-9xl font-extrabold text-white tracking-widest drop-shadow-lg'>
            SJFC
          </h1>
          <p className='text-lg md:text-xl text-gray-400 tracking-[0.3em] uppercase mt-2 mb-6'>
            South Jersey Football Club
          </p>
          <div className='w-16 h-1 bg-white mx-auto mb-6' />
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10'>
            Competitive adult soccer in the Burlington County area. Two teams.
            One mission. Elevating the game.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='https://www.casasoccerleagues.com/season_management_season_page/tab_schedule?page_node_id=9150307'
              className='bg-white text-navy-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition'
            >
              View Schedule
            </Link>
            <Link
              href='https://www.instagram.com/sjfc_team/'
              className='border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-navy-900 transition'
            >
              Follow Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='bg-white py-20 px-6'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-4xl font-extrabold text-navy-900 mb-6'>
              About the Club
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed'>
              South Jersey Football Club is dedicated to maintaining a high
              standard of play for adult players in the Burlington County area.
              The club currently has two competitive teams participating in the
              CASA soccer league within the Philadelphia area. We are always
              looking for talented individuals who want to play at a competitive
              level and help us advance to higher divisions.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {[
              { stat: '2', label: 'Teams' },
              { stat: 'CASA', label: 'League' },
              { stat: '4 | 7', label: 'Divisions' },
            ].map((item) => (
              <div
                key={item.label}
                className='bg-navy-900 text-white rounded-2xl p-6 text-center'
              >
                <p className='text-3xl font-extrabold'>{item.stat}</p>
                <p className='text-sm text-gray-300 mt-1'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Links Section */}
      <section className='bg-navy-800 py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-extrabold text-white text-center mb-12'>
            Get Involved
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: '📸',
                title: 'Community',
                desc: 'Follow us on Instagram for updates, highlights, and behind-the-scenes content.',
                link: 'https://www.instagram.com/sjfc_team/',
                linkText: 'Follow on Instagram',
              },
              {
                icon: '📅',
                title: 'Schedule',
                desc: 'Stay updated on upcoming matches, locations, and game-day details.',
                link: 'https://www.casasoccerleagues.com/season_management_season_page/tab_schedule?page_node_id=9150307',
                linkText: 'View Schedule',
              },
              {
                icon: '🎬',
                title: 'YouTube',
                desc: 'Watch match recaps, highlights, and exclusive club content.',
                link: 'https://youtube.com',
                linkText: 'Watch on YouTube',
              },
            ].map((f) => (
              <div
                key={f.title}
                className='bg-white border-l-4 border-navy-600 rounded-xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transform transition duration-300'
              >
                <span className='text-4xl block mb-4'>{f.icon}</span>
                <h3 className='text-2xl font-bold text-navy-900 mb-2'>
                  {f.title}
                </h3>
                <p className='text-gray-600 mb-4'>{f.desc}</p>
                <Link
                  href={f.link}
                  className='text-navy-700 font-semibold hover:text-navy-900 transition inline-flex items-center gap-1'
                >
                  {f.linkText} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className='bg-navy-900 py-20 px-6 text-center'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-4'>
          Ready to Play?
        </h2>
        <p className='text-gray-300 text-lg mb-8 max-w-xl mx-auto'>
          We&apos;re always looking for talented players to join the squad.
          Sign up and take your game to the next level.
        </p>
        <Link
          href='/sign-in'
          className='bg-white text-navy-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition'
        >
          Join SJFC
        </Link>
      </section>
    </main>
  );
}
