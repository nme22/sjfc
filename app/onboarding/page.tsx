export default function Onboarding() {
  return (
    <div className='flex flex-col justify-center items-center p-1'>
      <h1 className='font-bold text-xl'>Onboarding into SJFC!</h1>
      <h3>
        {' '}
        Below we'll be asking you a series of questions to get a better idea of
        what kind of player you are.{' '}
      </h3>
    </div>
  );
}
/*
    Lets do a questionaire or something here to update some User information such as Position, preferred Foot, Age, Orign, Address, Soccer Level, 
    and put this information into the DB. Once that call to the DB is done, lets update the user's metadata in Clerk to have middleware never direct them here again
 */
