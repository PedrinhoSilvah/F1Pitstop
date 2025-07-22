import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CircuitsImg from "../../assets/config/CircuitsImgs";
import Flags from "../../assets/config/Flags";
import "./style.scss";

const Circuits = () => {
  return (
    <>
      <Header />
      <section className="Circuits">
        <h1>F1 circuits 2025</h1>
        <ul>
          <li>
            <p className="data_gp">07 dec</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.AbuDhabi} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.AbuDhabiImg} alt="Flags" />
              <h2 className="name_gp">GP Abu Dhabi</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">20 apr</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Arabia} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.ArabiaImg} alt="Flags" />
              <h2 className="name_gp">GP da Arabia Saudita</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">20 apr</p>
            <div>
              <img
                className="img_circuits"
                src={CircuitsImg.Australia}
                alt=""
              />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.AustraliaImg} alt="Flags" />
              <h2 className="name_gp">GP da Australia</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">29 jun</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Austria} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.AustriaImg} alt="Flags" />
              <h2 className="name_gp">GP da Austria</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">21 sep</p>
            <div>
              <img
                className="img_circuits"
                src={CircuitsImg.Azerbaijão}
                alt=""
              />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.AzerbaijaoImg} alt="Flags" />
              <h2 className="name_gp">GP do Azerbaijão</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">13 apr</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Bahrin} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.BahrinImg} alt="Flags" />
              <h2 className="name_gp">GP do Bahrin</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">27 jul</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Belgica} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.BelgicaImg} alt="Flags" />
              <h2 className="name_gp">GP da Belgica</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">09 nov</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Brasil} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.BrasilImg} alt="Flags" />
              <h2 className="name_gp">GP do Brasil</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">15 jun</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Canadar} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.CanadaImg} alt="Flags" />
              <h2 className="name_gp">GP do Canadar</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">30 nov</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Catar} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.QatarImg} alt="Flags" />
              <h2 className="name_gp">gp do catar</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">23 mar</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.China} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.ChinaImg} alt="Flags" />
              <h2 className="name_gp">gp da china</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">19 oct</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Eua} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.EuaImg} alt="Flags" />
              <h2 className="name_gp">gp dos eua</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">31 aug</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Holanda} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.HolandaImg} alt="Flags" />
              <h2 className="name_gp">gp da holanda</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">03 aug</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Hungria} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.hungriaImg} alt="Flags" />
              <h2 className="name_gp">gp da hungria</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">18 may</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Imola} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.ItaliaImg} alt="Flags" />
              <h2 className="name_gp">gp de imola</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">06 jul</p>
            <div>
              <img
                className="img_circuits"
                src={CircuitsImg.Inglaterra}
                alt=""
              />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.InglaterraImg} alt="Flags" />
              <h2 className="name_gp">gp da grã betania</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">07 sep</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Italia} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.ItaliaImg} alt="Flags" />
              <h2 className="name_gp">gp da italia</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">06 apr</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Japao} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.JapaoImg} alt="Flags" />
              <h2 className="name_gp">gp do japão</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">23 nov</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.LasVegas} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.EuaImg} alt="Flags" />
              <h2 className="name_gp">gp de las vegas</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">26 oct</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Mexico} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.MexicoImg} alt="Flags" />
              <h2 className="name_gp">gp do mexico</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">04 may</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Miami} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.EuaImg} alt="Flags" />
              <h2 className="name_gp">gp de miami</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">25 may</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Monaco} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.MonacoImg} alt="Flags" />
              <h2 className="name_gp">gp de monaco</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">05 oct</p>
            <div>
              <img
                className="img_circuits"
                src={CircuitsImg.Singapura}
                alt=""
              />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.SingapuraImg} alt="Flags" />
              <h2 className="name_gp">gp de singapura</h2>
            </div>
          </li>
          <li>
            <p className="data_gp">01 jun</p>
            <div>
              <img className="img_circuits" src={CircuitsImg.Spain} alt="" />
            </div>
            <div className="div_name_gp">
              <img className="Flags" src={Flags.EspanhaImg} alt="Flags" />
              <h2 className="name_gp">gp da espanha</h2>
            </div>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default Circuits;
