import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Cars from "../../assets/config/Team";
import Logos from "../../assets/config/Logos";
import "./style.scss";

const Team = () => {
  return (
    <>
      <Header />
      <section className="Section_Team">
        <h1 className="H1_Team">F1 TEAM</h1>
        <ul className="Ul_Container_Team">
          <li className="container_Team Mclaren">
            <img className="Img_Cars" src={Cars.McLaren} alt="Img_Team" />
            <img className="Logos_Team" src={Logos.McLaren} alt="Logo_Team" />
            <div className="Text_Team">
              <h2>Oscar Piastri</h2>
              <p>|</p>
              <h2>Lando Norris</h2>
            </div>
          </li>
          <li className="container_Team AstonMartin">
            <img className="Img_Cars" src={Cars.AstonMartin} alt="Img_Team" />
            <img
              className="Logos_Team"
              src={Logos.AstonMartin}
              alt="Logo_Team"
            />
            <div className="Text_Team">
              <h2>Lance Stroll</h2>
              <p>|</p>
              <h2>Fernando Alonso</h2>
            </div>
          </li>
          <li className="container_Team Hass">
            <img className="Img_Cars" src={Cars.Hass} alt="Img_Team" />
            <img className="Logos_Team" src={Logos.Hass} alt="Logo_Team" />
            <div className="Text_Team">
              <h2>Esteban Ocon</h2>
              <p>|</p>
              <h2>Oliver Bearman</h2>
            </div>
          </li>
          <li className="container_Team Mercedes">
            <img className="Img_Cars" src={Cars.Mercedes} alt="Img_Team" />
            <img className="Logos_Team" src={Logos.Mercedes} alt="Logo_Team" />
            <div className="Text_Team">
              <h2>George Russell</h2>
              <p>|</p>
              <h2>Kimi Antonelli</h2>
            </div>
          </li>
          <li className="container_Team RedBull">
            <img className="Img_Cars" src={Cars.RedBull} alt="Img_Team" />
            <img
              className="Logos_Team"
              src={Logos.RedBullRacing}
              alt="Logo_Team"
            />
            <div className="Text_Team">
              <h2>Liam Lawson</h2>
              <p>|</p>
              <h2>Isack Hadjar</h2>
            </div>
          </li>
          <li className="container_Team Sauber">
            <img className="Img_Cars" src={Cars.Sauber} alt="Img_Team" />
            <img
              className="Logos_Team_Config"
              src={Logos.Stake}
              alt="Logo_Team"
            />
            <div className="Text_Team">
              <h2>Nico Hulkenberg</h2>
              <p>|</p>
              <h2>Gabriel Bortoleto</h2>
            </div>
          </li>
          <li className="container_Team Williams">
            <img className="Img_Cars" src={Cars.Williams} alt="Img_Team" />
            <img className="Logos_Team" src={Logos.Williams} alt="Logo_Team" />
            <div className="Text_Team">
              <h2>Alexander Albon</h2>
              <p>|</p>
              <h2>Carlos Sainz</h2>
            </div>
          </li>
          <li className="container_Team RedbullRacing">
            <img className="Img_Cars" src={Cars.RedBullRacing} alt="Img_Team" />
            <img className="Logos_Team" src={Logos.RedBull} alt="Logo_Team" />
            <div className="Text_Team">
              <h2>Max Verstappen</h2>
              <p>|</p>
              <h2>Yuki Tsunoda</h2>
            </div>
          </li>
          <li className="container_Team Ferrari">
            <img className="Img_Cars" src={Cars.Ferrari} alt="Img_Team" />
            <img className="Logos_Team" src={Logos.Ferrari} alt="Logo_Team" />
            <div className="Text_Team">
              <h2>Charles Leclerc</h2>
              <p>|</p>
              <h2>Lewis Hamilton</h2>
            </div>
          </li>
          <li className="container_Team Alpine">
            <img className="Img_Cars" src={Cars.Alpine} alt="Img_Team" />
            <img
              className="Logos_Team_Config"
              src={Logos.Alpine}
              alt="Logo_Team"
            />
            <div className="Text_Team">
              <h2>Pierre Gasly</h2>
              <p>|</p>
              <h2>Franco Colapinto</h2>
            </div>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default Team;
