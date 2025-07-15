import "./styles.scss";
import LogoF1 from '../assets/imgs/LogoF1.png'

const Footer = () => {
  return (
    <footer>
      <img
        className="LogoF1_2"
        src={LogoF1}
        alt=""
      />
      <div className="div_span">
        <span>.</span>
        <span>.</span>
      </div>
      <p>© 2003-2025 Formula One World Championship Limited</p>
    </footer>
  );
};

export default Footer;
