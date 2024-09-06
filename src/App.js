import "./App.css";
import Header from "./Header";
import Headphone from "./Headphone";
import { headphones } from "./infoHP.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="TitleApp mb-2">
          Наушники
          <img src={"img/hp1.png"} alt="jj" />
        </div>
      </div>
      <ShowHeadphones />
    </div>
  );
}

function ShowHeadphones() {
  const list = headphones.map((headphone) => (
    <Headphone
      key={headphone.id}
      ident={headphone.id}
      photo={headphone.img}
      title={headphone.title}
      price={headphone.price}
      score={headphone.score}
    />
  ));

  return <div className="container">{list}</div>;
}

export default App;
