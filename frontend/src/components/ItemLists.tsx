import { useAppContext } from "../store/contextData";
import Item from "./Item";

function ItemLists() {
  const { filteredData } = useAppContext();

  // console.log(data);

  return (
    <section className='py-20 px-10'>
      <div className='w-full md:w-4/5 lg:w-2/4 mx-auto grid md:grid-cols-2 place-items-stretch gap-y-8 gap-x-4'>
        {filteredData.length > 0 ? (
          filteredData.map((card) => <Item key={card.id} data={card} />)
        ) : (
          <p>No results found.</p>
        )}

        {/* <Item />
        <Item />
        <Item />
        <Item /> */}
      </div>
    </section>
  );
}

export default ItemLists;
