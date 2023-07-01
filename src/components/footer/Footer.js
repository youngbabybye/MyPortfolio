import "./style.css";

import vk from "./../../img/icons/vk.svg";
import tg from "./../../img/icons/tg.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a
                                href="https://vk.com/yongstpd"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={vk} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a
                                href="https://t.me/yngstpd"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={tg} alt="Link" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
