import "./Footer.css";
import lang from "./icons/Lang.png";
import vk from "./icons/VK.svg";
import tg from "./icons/Telegram.svg";
import ws from "./icons/Whatsapp.svg";

function Footer() {
  return (
    <div className="container d-flex justify-content-center">
      <footer
        className="shadow-sm bg-body d-flex flex-row"
        style={{ width: "92%" }}
      >
        <div className="col-3">QPICK</div>
        <div className="col-3">
          <div>Избранное</div>
          <div>Корзина</div>
          <div>Контакты</div>
        </div>
        <div className="col-3">
          <div>Условия сервиса</div>
          <div className="d-flex flex-row">
            <div>
              <img src={lang} alt="lang" />
            </div>
            <div>Рус</div>
            <div>Eng</div>
          </div>
        </div>
        <div className="col-3 d-flex flex-row">
          <div>
            <img src={vk} alt="VK" />
          </div>
          <div>
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
