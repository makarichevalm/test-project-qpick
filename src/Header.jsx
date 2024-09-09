import "./Header.css";
import favourite from "./icons/like.svg";
import basket from "./icons/basket.svg";

function Header() {
  return (
    <div className="container mb-3">
      <header className="row pt-2 pb-2">
        <div className="col-8 headtext ms-5">QPICK</div>
        <div className="col-3 d-flex justify-content-end">
          <div className="me-4 align-self-center">
            <img alt="Избранное" src={favourite} />
          </div>
          <div className="align-self-center me-4">
            <img alt="Корзина" src={basket} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
