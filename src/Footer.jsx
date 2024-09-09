import "./Footer.css";
import "./Header.css";
import lang from "./icons/Lang.png";
import vk from "./icons/VK.svg";
import tg from "./icons/Telegram.svg";
import ws from "./icons/Whatsapp.svg";

function Footer() {
  return (
    <div className="container d-flex justify-content-center">
      <footer
        className="shadow-sm bg-body d-flex flex-row p-4 justify-content-between"
        style={{ width: "92%" }}
      >
        <div className="col-3 headtext">QPICK</div>
        <div className="col-6 d-flex flex-row justify-content-between">
          <div>
            <div className="pt-1 pb-1 category">Избранное</div>
            <div className="pt-1 pb-1 category">Корзина</div>
            <div className="pt-1 pb-1 category">Контакты</div>
          </div>
          <div>
            <div className="pt-1 pb-1 category">Условия сервиса</div>
            <div className="d-flex flex-row mt-4">
              <div className="me-3">
                <img src={lang} alt="lang" />
              </div>
              <div className="rus mt-1 me-3">Рус</div>
              <div className="eng mt-1">Eng</div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex flex-row justify-content-end">
          <div className="me-3">
            <img src={vk} alt="VK" />
          </div>
          <div className="me-3">
            <img src={tg} alt="Telegramm" />
          </div>
          <div>
            <img src={ws} alt="WhatsApp" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
