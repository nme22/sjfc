import Link from 'next/link';

export default function Home() {
  return (
    <main className='theme-bg theme-text'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden scanlines theme-bg'>
        <div className='absolute inset-0 cyber-grid' />
        <div className='absolute inset-0' style={{ background: 'linear-gradient(to bottom, var(--color-bg), transparent, var(--color-bg))' }} />
        <div className='absolute bottom-0 left-0 right-0 h-px divider-pulse' style={{ background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)' }} />

        {/* Floating neon accent lines */}
        <div className='absolute top-[30%] left-0 w-full h-px overflow-hidden'>
          <div className='h-full w-32 neon-line-slide' style={{ background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)' }} />
        </div>
        <div className='absolute top-[70%] left-0 w-full h-px overflow-hidden'>
          <div className='h-full w-24 neon-line-slide' style={{ background: 'linear-gradient(to right, transparent, var(--color-text-muted), transparent)', animationDelay: '2s' }} />
        </div>

        <div className='relative z-10 text-center px-6 animate-fade-in-up'>
          <p className='theme-accent text-sm tracking-[0.5em] uppercase mb-4 animate-flicker font-mono'>
            // SOUTH JERSEY FOOTBALL CLUB
          </p>
          <h1 className='text-6xl sm:text-8xl md:text-[10rem] font-extrabold tracking-widest glitch-text leading-none'>
            SJFC
          </h1>
          <div className='flex items-center gap-4 justify-center my-8'>
            <div className='h-px flex-1 max-w-24' style={{ background: 'linear-gradient(to right, transparent, var(--color-accent))' }} />
            <span className='theme-text-muted font-mono text-xs tracking-widest'>EST. 2024</span>
            <div className='h-px flex-1 max-w-24' style={{ background: 'linear-gradient(to left, transparent, var(--color-accent))' }} />
          </div>
          <p className='text-lg md:text-xl theme-text-muted max-w-2xl mx-auto mb-10 font-light'>
            Competitive adult soccer in the Burlington County area. Two teams.
            One mission. <span className='theme-text font-medium'>Elevating the game.</span>
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='https://www.casasoccerleagues.com/season_management_season_page/tab_schedule?page_node_id=9150307'
              className='px-8 py-3 font-bold text-lg clip-cyber hover:scale-105 transform transition duration-200 animate-cyber-pulse'
              style={{ backgroundColor: 'var(--color-btn-primary-bg)', color: 'var(--color-btn-primary-text)' }}
            >
              VIEW SCHEDULE
            </Link>
            <Link
              href='https://www.instagram.com/sjfc_team/'
              className='border px-8 py-3 font-bold text-lg clip-cyber theme-accent transition duration-200'
              style={{ borderColor: 'var(--color-accent)' }}
            >
              FOLLOW US
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='relative py-24 px-6 theme-bg-alt'>
        <div className='absolute top-0 left-0 right-0 h-px divider-pulse' style={{ background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)' }} />

        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div>
            <p className='theme-accent font-mono text-sm tracking-widest mb-3'>&#47;&#47; ABOUT</p>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-6'>
              About the <span className='theme-accent neon-accent'>Club</span>
            </h2>
            <p className='theme-text-muted text-lg leading-relaxed'>
              SJFC was born from a simple idea &mdash; a group of players who
              wanted more than pickup games. That hunger for competition led
              us to the CASA league, where our founding squad entered at the
              seventh division and fought their way up to the fourth in just
              two seasons. Now fielding two teams across the Burlington County
              and Philadelphia area, we continue to seek out driven players
              who share our commitment to competing at the highest level
              while upholding the sportsmanship that defines this club.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-4 stagger-children'>
            {[
              { stat: '2', label: 'TEAMS' },
              { stat: 'CASA', label: 'LEAGUE' },
              { stat: '4 & 7', label: 'DIVISIONS' },
            ].map((item) => (
              <div
                key={item.label}
                className='theme-panel p-6 text-center clip-cyber cyber-card animate-fade-in-up'
              >
                <p className='text-3xl font-extrabold theme-text'>{item.stat}</p>
                <p className='text-xs theme-text-muted mt-2 font-mono tracking-wider'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className='relative py-24 px-6 theme-bg overflow-hidden'>
        <div className='absolute inset-0 cyber-grid' />
        <div className='absolute top-0 left-0 right-0 h-px divider-pulse' style={{ background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)' }} />

        <div className='relative max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <p className='theme-accent font-mono text-sm tracking-widest mb-3'>&#47;&#47; CONNECT</p>
            <h2 className='text-4xl md:text-5xl font-extrabold'>
              Get <span className='theme-accent neon-accent'>Involved</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children'>
            {[
              {
                title: 'Community',
                desc: 'Follow us on Instagram for updates, highlights, and behind-the-scenes content.',
                link: 'https://www.instagram.com/sjfc_team/',
                linkText: 'Instagram',
              },
              {
                title: 'Schedule',
                desc: 'Stay updated on upcoming matches, locations, and game-day details.',
                link: 'https://www.casasoccerleagues.com/season_management_season_page/tab_schedule?page_node_id=9150307',
                linkText: 'View Schedule',
              },
              {
                title: 'YouTube',
                desc: 'Watch match recaps, highlights, and exclusive club content.',
                link: 'https://youtube.com',
                linkText: 'Watch Now',
              },
            ].map((f) => (
              <div
                key={f.title}
                className='theme-panel p-6 cyber-card clip-cyber animate-fade-in-up'
              >
                <h3 className='text-xl font-bold mb-2 theme-text'>
                  {f.title}
                </h3>
                <p className='theme-text-muted text-sm mb-5 leading-relaxed'>{f.desc}</p>
                <Link
                  href={f.link}
                  className='theme-accent font-mono text-sm tracking-wider hover:underline inline-flex items-center gap-2 group'
                >
                  [{f.linkText}] <span className='group-hover:translate-x-1 transition-transform'>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className='relative py-24 px-6 text-center theme-bg-alt overflow-hidden scanlines'>
        <div className='absolute top-0 left-0 right-0 h-px divider-pulse' style={{ background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)' }} />
        <div className='absolute inset-0 cyber-grid' />

        <div className='relative z-10'>
          <p className='theme-accent font-mono text-sm tracking-widest mb-3 animate-flicker'>&#47;&#47; JOIN THE SQUAD</p>
          <h2 className='text-4xl md:text-6xl font-extrabold mb-4'>
            Ready to <span className='theme-accent neon-accent'>Play</span>?
          </h2>
          <p className='theme-text-muted text-lg mb-10 max-w-xl mx-auto'>
            We&apos;re always looking for talented players to join the squad.
            Sign up and take your game to the next level.
          </p>
          <Link
            href='/sign-in'
            className='inline-block px-12 py-4 font-bold text-lg clip-cyber hover:scale-105 transform transition duration-200 animate-cyber-pulse'
            style={{ backgroundColor: 'var(--color-btn-primary-bg)', color: 'var(--color-btn-primary-text)' }}
          >
            JOIN SJFC
          </Link>
        </div>
      </section>
    </main>
  );
}
