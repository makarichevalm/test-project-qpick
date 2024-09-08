import "./App.css";
import Header from "./Header";
import ShowHeadphones from "./infoHP";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="TitleApp">Наушники</div>
        <ShowHeadphones type="wire" />
        <div className="TitleApp mt-4"> Беспроводные наушники</div>
        <ShowHeadphones type="wireless" />
      </div>
    </div>
  );
}

export default App;
