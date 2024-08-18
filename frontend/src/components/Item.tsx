import { Card } from "../store/AppProvider";

function Item({ data }: { data: Card }) {
  return (
    <div className='w-max-80 border bg-[#F3F6F8] rounded-md' key={data.id}>
      <h2 className='py-2 px-3 font-semibold text-lg'>{data.title}</h2>
      <hr className=' border-gray-300' />
      <p className='py-2 mb-2 px-3 text-[#55565D]'>{data.description}</p>
    </div>
  );
}

export default Item;
