// imports
import "./Header.css";
import { NavLink } from "react-router-dom";
import LogoHeader from '../../assets/header.svg';
import Photo from '../../assets/ava-user.png';
import { linksHeader } from "../../utils/constants";


export default function Header() {

  return (

      <header className="header">

        <img className="header__logo" src={LogoHeader} alt="логотип" />

        <nav className="header__list-links">
          {
            linksHeader.map((item, index) => {
              return <NavLink key={index} className="header__link" to="#">{item}</NavLink>
            })
          }
        </nav>

        <div className="header__container">
          <button className="header__button"></button>
          <img className="header__photo" src={Photo} alt="фото" />
          <div className="header__user-data">
            <p className="header__user-name">Виталий Крымов</p>
            <span className="header__user-id">#45732</span>
          </div>
        </div>
      </header>
  );
}