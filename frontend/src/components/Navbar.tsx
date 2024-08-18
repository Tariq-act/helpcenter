function Navbar() {
  return (
    <header className='bg-black text-white py-8 px-2'>
      <div className='w-full md:w-4/5 mx-auto flex items-center justify-between'>
        <h2>
          <span className='font-medium'>Abstract</span> | Help Center
        </h2>
        <button className='border border-[rgb(80,80,80)] rounded-md py-1 px-4 bg-[rgb(26,26,28)]'>
          Submit a request
        </button>
      </div>
    </header>
  );
}

export default Navbar;
