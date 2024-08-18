const Footer = () => {
  return (
    <footer className='bg-black text-white py-8 px-2'>
      <div className='w-full md:w-4/5 mx-auto flex flex-col md:flex-row justify-center'>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 gap-y-4'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold  '>Abstract</h1>
            <p className='text-sm'>Branches</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='font-bold'>Resources</h1>
            <ul className='list-none text-sm'>
              {["blog", "help center", "release notes", "status"].map(
                (item) => (
                  <li key={item} className='capitalize mb-1 cursor-pointer'>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='font-bold'>Community</h1>
            <ul className='list-none text-sm'>
              {["twitter", "linkedIn", "facebook", "dribble", "podcast"].map(
                (item) => (
                  <li key={item} className='capitalize mb-1 cursor-pointer'>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold'>Company</h1>
              <ul className='list-none text-sm'>
                {["about us", "careers", "legal"].map((item) => (
                  <li key={item} className='capitalize mb-1 cursor-pointer'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-bold'>Contact Us</h1>
              <p className='text-sm'>info@abstract.com</p>
            </div>
          </div>
        </div>

        <div className='md:self-end text-sm'>
          <p>© Copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
