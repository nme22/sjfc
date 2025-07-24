import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className='bg-white min-h-screen'>
        {/* Hero */}
        <section className='flex flex-col items-center text-center py-24 px-6 border-b-2 border-black'>
          <h1 className='text-5xl font-extrabold text-blue-900 mb-4'>
            Welcome to South Jersey FC
          </h1>
          <p className='text-xl text-gray-700 mb-8 max-w-xl'>
            South Jersey Football Club is a team dedicated to maintaining a high
            standard of play for adult players in the Burlington Country Area.
            The club currently has two competitive teams participating in the
            CASA soccer league within Philadelphia area. Teams are currently
            placed in the 5th and 7th divisions respectively. The club is always
            looking for talented individuals who like to play at a competitive
            level to come participate in advancements to higher divisons!
          </p>
        </section>

        {/* Features */}
        <section className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-6'>
          {[
            {
              title: 'Community',
              desc: 'Follow us on Instagram!',
              link: 'https://www.instagram.com/sjfc_team/',
            },
            {
              title: 'Schedule',
              desc: 'Stay updated on gameday.',
              link: 'https://www.casasoccerleagues.com/season_management_season_page/tab_schedule?page_node_id=9150307',
            },
            {
              title: 'Youtube',
              desc: 'Check us out on Youtube!.',
              link: 'something.com',
            },
          ].map((f) => (
            <div
              key={f.title}
              className='bg-white border-2 border-black p-6 rounded-2xl shadow-lg hover:-translate-y-1 transform transition'
            >
              <h2 className='text-2xl font-bold text-blue-900 mb-2'>
                {f.title}
              </h2>
              <p className='text-gray-700'>{f.desc}</p>
              <Link href={f.link}>Link</Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
