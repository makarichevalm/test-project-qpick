import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import ShowHeadphones from "./infoHP";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="TitleApp ms-5">Наушники</div>
        <ShowHeadphones type="wire" />
        <div className="TitleApp ms-5"> Беспроводные наушники</div>
        <ShowHeadphones type="wireless" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
