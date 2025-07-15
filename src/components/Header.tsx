import './styles.scss'
import { Link } from "react-router-dom";
import LogoF1 from '../assets/imgs/LogoF1.png'

const Header = () => {
  return (
    <header>
      <nav>
        <img
          className="LogoF1"
          src={LogoF1}
          alt="Logo_F1"
        />
        <ul>
          <Link className='Url' to="/">Home</Link>
          <Link className='Url' to="/Seasons">Corridas</Link>
          <Link className='Url' to="/Drivers">Pilotos</Link>
          <Link className='Url' to="/Team" >Equipes</Link>
          <Link className='Url' to="/Circuits">Circuitos</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
