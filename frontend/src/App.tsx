import Footer from "./components/Footer";
import ItemLists from "./components/ItemLists";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <div>
      <Navbar />
      <SearchSection />
      <ItemLists />
      <Footer />
    </div>
  );
}

export default App;
