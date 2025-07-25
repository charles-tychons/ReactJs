import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";

const App = () => {

  const myName = "John Doe";

  return (
    <div>
      <Header />
      <Greet />
      <MainContent />
      <ProductInfo />
      <Footer />
      <form>
        <label htmlFor="fname">Name</label>
        <input type="text" name="fname" placeholder="Enter your firstname"/>
      </form>
      {2+2}
      {myName}
    </div>
  );
}

export default App;