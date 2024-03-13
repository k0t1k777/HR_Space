import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/description" className="sidebar__link">
        <button className="sidebar__button">Описание вакансии</button>
      </Link>

      <Link to="/equirement" className="sidebar__link">
        <button className="sidebar__button">Требования к кандидату</button>
      </Link>

      <Link to="/conditions-for-candidate" className="sidebar__link">
        <button className="sidebar__button">Условия для кандидата</button>
      </Link>

      <Link to="/conditions-for-cooperation" className="sidebar__link">
        <button className="sidebar__button">Условия сотрудничества</button>
      </Link>
    </div>
  );
}
