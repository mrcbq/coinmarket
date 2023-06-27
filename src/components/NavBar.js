import { NavLink } from 'react-router-dom';
import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="top">
      <NavLink to="/">
        <IoIosArrowBack />
      </NavLink>
      <h1 className="title">Coinmarket</h1>
      <ul className="nav">
        <li>
          <NavLink to="/">
            <BsFillMicFill />
          </NavLink>
        </li>
        <li>
          <NavLink to="/coins">
            <BsFillGearFill />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}