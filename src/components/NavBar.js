import { NavLink } from 'react-router-dom';
import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="top" data-testid="navbar">
      <NavLink to="/">
        <IoIosArrowBack data-testid="back-arrow" />
      </NavLink>
      <h3 className="title" data-testid="title">COINMARKET</h3>
      <ul className="nav">
        <li>
          <NavLink to="/">
            <BsFillMicFill data-testid="mic-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BsFillGearFill data-testid="gear-icon" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
