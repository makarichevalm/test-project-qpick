import "./App.css";
import Header from "./Header";
import ShowHeadphones from "./infoHP";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="TitleApp mb-2">Наушники</div>
      </div>
      <ShowHeadphones />
    </div>
  );
}

export default App;
