import "./footer.scss";
import iconVk from "./../../picture/iconVk.svg"
import iconFb from "./../../picture/iconFb.svg"
import iconTt from "./../../picture/iconTt.svg"
import iconYt from "./../../picture/iconYt.svg"
let Footer = () => {
    return (
        /*BEGIN FOOTER*/
        <footer className="container">
            <div className="footer__container">
                <div className="footer__items">
                    <h1>Заголовок</h1>
                    <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    <a>500na700.ru</a>
                </div>
                <div className="footer__icons">
                    <ul>
                        <li><img alt="icon-vk" src={iconVk} /></li>
                        <li><img alt="icon-fb" src={iconFb} /></li>
                        <li><img alt="icon-tt" src={iconTt} /></li>
                        <li><img alt="icon-yt" src={iconYt} /></li>
                    </ul>
                </div>
            </div>
        </footer>
        /*END FOOTER*/
    )
}
export default Footer;