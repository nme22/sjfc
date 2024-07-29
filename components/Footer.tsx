import Link from 'next/link';

export default function Footer() {
   return (
      <footer className="bg-gray-800 text-white p-4 mt-auto">
         <div className="container mx-auto flex justify-evenly items-center">
            <Link href="/">Twitter</Link>
            <Link href="/">Github</Link>
            <Link href="/">Meetup</Link>
         </div>
         <br />
         <p className="text-center font-mono font-light">
            All rights to this website are secured by SJFC
         </p>
      </footer>
   );
}
