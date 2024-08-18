import { useState } from "react";
import { useAppContext } from "../store/contextData";

function SearchSection() {
  const { searchCards } = useAppContext();
  const [query, setQuery] = useState<string>("");

  const handleSearch = () => {
    searchCards(query);
  };

  return (
    <section className='bg-[#DADBF0] py-10 md:py-20 px-2'>
      <div className='w-full md:w-4/5 mx-auto flex flex-col gap-8 items-center justify-center'>
        <h1 className='text-3xl md:text-6xl text-center'>How can we help?</h1>
        <div className='w-full md:w-[60%] relative bg-white px-4 py-2 border border-black rounded-md shadow-lg'>
          <input
            className='w-full border-gray-300 p-2 rounded focus-within:outline-none'
            type='text'
            name='search'
            aria-label='Search'
            placeholder='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className='text-xl absolute right-3 top-1/2 transform -translate-y-1/2'
            onClick={handleSearch}
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
