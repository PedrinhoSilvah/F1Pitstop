import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.scss";
import Imagens from "../../assets/config/DriversImg";
import Logos from "../../assets/config/Logos";

const Drivers = () => {
  return (
    <>
      <Header />
      <section className="Sec_Drivers">
        <div>
          <h1 className="Text_Drivers">F1 DRIVERS</h1>
          <ul>
            <li className="Mclaren">
              <img src={Imagens.Lando} alt="Img_driver" />
              <div>
                <p>Lando</p>
                <p className="SobreNome">Norris</p>
                <p className="Number">4</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.McLaren}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Mclaren">
              <img src={Imagens.Piatri} alt="Img_driver" />
              <div>
                <p>Oscar</p>
                <p className="SobreNome">Piastri</p>
                <p className="Number">81</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.McLaren}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Ferrari">
              <img src={Imagens.Hamilton} alt="Img_driver" />
              <div>
                <p>Lewis</p>
                <p className="SobreNome">Hamilton</p>
                <p className="Number">44</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.Ferrari}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Ferrari">
              <img src={Imagens.Leclec} alt="Img_driver" />
              <div>
                <p>Charles</p>
                <p className="SobreNome">Leclerc</p>
                <p className="Number">16</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.Ferrari}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Mercedes">
              <img src={Imagens.Russel} alt="Img_driver" />
              <div>
                <p>George</p>
                <p className="SobreNome">Russel</p>
                <p className="Number">63</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.Mercedes}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Mercedes">
              <img src={Imagens.Kimi} alt="Img_driver" />
              <div>
                <p>Kimi</p>
                <p className="SobreNome">Antonelli</p>
                <p className="Number">12</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.Mercedes}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="RedBull">
              <img src={Imagens.Max} alt="Img_driver" />
              <div>
                <p>Max</p>
                <p className="SobreNome">Verstappen</p>
                <p className="Number">1</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.RedBull}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="RedBull">
              <img src={Imagens.Yuki} alt="Img_driver" />
              <div>
                <p>Yuki</p>
                <p className="SobreNome">Tsunoda</p>
                <p className="Number">22</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.RedBull}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Sauber">
              <img src={Imagens.Hulk} alt="Img_driver" />
              <div>
                <p>Nico</p>
                <p className="SobreNome">Hulkenberg</p>
                <p className="Number">27</p>
                <div>
                  <img className="testeImg" src={Logos.Stake} alt="Logo_Team" />
                </div>
              </div>
            </li>
            <li className="Sauber">
              <img src={Imagens.Gabriel} alt="Img_driver" />
              <div>
                <p>Gabriel</p>
                <p className="SobreNome">Bortoleto</p>
                <p className="Number">5</p>
                <div>
                  <img className="testeImg" src={Logos.Stake} alt="Logo_Team" />
                </div>
              </div>
            </li>
            <li className="Alpine">
              <img src={Imagens.Gasly} alt="Img_driver" />
              <div>
                <p>Pierre</p>
                <p className="SobreNome">Gasly</p>
                <p className="Number">10</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.Alpine}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Alpine">
              <img src={Imagens.ColaPinto} alt="Img_driver" />
              <div>
                <p>Franco</p>
                <p className="SobreNome">Colapinto</p>
                <p className="Number">43</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.Alpine}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Hass">
              <img src={Imagens.Ocon} alt="Img_driver" />
              <div>
                <p>Esteban</p>
                <p className="SobreNome">Ocon</p>
                <p className="Number">31</p>
                <div>
                  <img className="testeImg" src={Logos.Hass} alt="Logo_Team" />
                </div>
              </div>
            </li>
            <li className="Hass">
              <img src={Imagens.Berman} alt="Img_driver" />
              <div>
                <p>Oliver</p>
                <p className="SobreNome">Bearman</p>
                <p className="Number">87</p>
                <div>
                  <img className="testeImg" src={Logos.Hass} alt="Logo_Team" />
                </div>
              </div>
            </li>
            <li className="AstonMartin">
              <img src={Imagens.Alonso} alt="Img_driver" />
              <div>
                <p>Fernando</p>
                <p className="SobreNome">Alonso</p>
                <p className="Number">14</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.AstonMartin}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="AstonMartin">
              <img src={Imagens.Stroll} alt="Img_driver" />
              <div>
                <p>Lance</p>
                <p className="SobreNome">Stroll</p>
                <p className="Number">18</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.AstonMartin}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Williams">
              <img src={Imagens.Sainz} alt="Img_driver" />
              <div>
                <p>Carlos</p>
                <p className="SobreNome">Sainz</p>
                <p className="Number">55</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.Williams}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="Williams">
              <img src={Imagens.Albon} alt="Img_driver" />
              <div>
                <p>Alexander</p>
                <p className="SobreNome">Albon</p>
                <p className="Number">23</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.Williams}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="RedbullRacing">
              <img src={Imagens.Liam} alt="Img_driver" />
              <div>
                <p>Liam</p>
                <p className="SobreNome">Lawson</p>
                <p className="Number">30</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.RedBullRacing}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
            <li className="RedbullRacing">
              <img src={Imagens.Hadja} alt="Img_driver" />
              <div>
                <p>Isack</p>
                <p className="SobreNome">Hadjar</p>
                <p className="Number">6</p>
                <div>
                  <img
                    className="testeImg"
                    src={Logos.RedBullRacing}
                    alt="Logo_Team"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Drivers;
