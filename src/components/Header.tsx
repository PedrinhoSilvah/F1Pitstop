import './styles.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <img
          className="LogoF1"
          src="https://wallpaperaccess.com/full/2180263.png"
          alt="Logo_F1"
        />
        <ul>
          <li>Home</li>
          <li>Corridas</li>
          <li>Pilotos</li>
          <li>Equipes</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
