import "./Header.css";
import favourite from "./like.svg";
import basket from "./basket.svg";

function Header() {
  return (
    <div className="container mb-3">
      <header className="row">
        <div className="col-8 headtext">QPICK</div>
        <div className="col-4 d-flex justify-content-end">
          <div className="me-4 align-self-center">
            <img alt="Избранное" src={favourite} />
          </div>
          <div className="align-self-center">
            <img alt="Корзина" src={basket} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
